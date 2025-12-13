<script lang="ts">
    import { onDestroy } from 'svelte';
    import { fade, scale } from 'svelte/transition';
    import { db } from '../firebase.js';
    import { collection, doc, updateDoc, getDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
    import confetti from 'canvas-confetti';
    import Leaderboard from './Leaderboard.svelte';
    import Total from './Total.svelte';
    import { Shuffle, Camera, X, Check, PartyPopper, LoaderCircle } from 'lucide-svelte';
    import { uploadImage } from '../cloudinary';
    import { toast } from '@zerodevx/svelte-toast';

    export let name;

    $: isAdmin = name.toLowerCase() === 'max_admin';

    let dbName = 'christmas';

    let randomChallenge = { id: '', name: 'Loading...', completed: [], images: [] };
    let challengeList = [];
    let completedChallenges = 0;

    // Image picker and preview state
    let showPreview = false;
    let capturedImage: string | null = null;
    let imageFile: File | null = null;
    let fileInput: HTMLInputElement;
    let isUploading = false;

    const collRef = collection(db, dbName);
    const unsub = onSnapshot(collRef,
        (coll) => {
            completedChallenges = 0;
            challengeList = [];
            coll.forEach((doc) => {
                const data = doc.data();
                const completed = Array.isArray(data.completed) ? data.completed : [];
                const challengeData = {
                    id: doc.id,
                    name: data.name || 'Unnamed Challenge',
                    completed: completed,
                    images: Array.isArray(data.images) ? data.images : [],
                };
                challengeList.push(challengeData);

                if (randomChallenge && randomChallenge.id && randomChallenge.id == doc.id) {
                    randomChallenge = {
                        ...challengeData,
                        images: challengeData.images || [],
                    };
                }

                if (completed.includes(name)) {
                    completedChallenges += 1;
                }
            });

            if (!randomChallenge || randomChallenge.name == 'Loading...') {
                selectRandomChallenge();
            }
        },
        (error) => {
            console.error('Error in Firestore snapshot:', error);
            alert('Error loading challenges. Please refresh the page!');
        }
    );

    // Cleanup subscription when component is destroyed to prevent memory leaks
    onDestroy(() => {
        if (unsub) {
            unsub();
        }
    });

    function selectRandomChallenge() {
        const availableChallenges = challengeList.filter(
            (challenge) =>
                !challenge.completed.includes(name) && challenge.id !== randomChallenge.id,
        );

        if (availableChallenges.length === 0) {
            console.warn('No uncompleted and unique challenges available.');
            return;
        }

        const randomIndex = Math.floor(Math.random() * availableChallenges.length);
        randomChallenge = availableChallenges[randomIndex];
    }

    function triggerConfetti() {
        const colors = ['#C73A38', '#2B7A4B', '#FFD700', '#FFFFFF', '#E74C4C', '#45A366'];
        
        // Christmas confetti burst
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { y: 0.6 },
            colors: colors,
            shapes: ['circle', 'square'],
            scalar: 1.2,
        });

        // Side bursts
        setTimeout(() => {
            confetti({
                particleCount: 80,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.7 },
                colors: colors,
            });
            confetti({
                particleCount: 80,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.7 },
                colors: colors,
            });
        }, 150);
    }

    function openImagePicker() {
        if (!randomChallenge || !randomChallenge.id) {
            alert('No challenge selected!');
            return;
        }

        // Check if already completed
        if (randomChallenge.completed.includes(name)) {
            alert('Challenge already completed!');
            return;
        }

        // Trigger the file input
        if (fileInput) {
            fileInput.click();
        }
    }

    function handleFileSelect(event: Event) {
        const target = event.target as HTMLInputElement;
        const file = target.files?.[0];

        if (!file) {
            return;
        }

        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please select an image file.');
            return;
        }

        imageFile = file;

        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
            capturedImage = e.target?.result as string;
            showPreview = true;
        };
        reader.readAsDataURL(file);
    }

    function cancelPreview() {
        showPreview = false;
        capturedImage = null;
        imageFile = null;
        isUploading = false;
        // Reset file input so user can select the same file again if needed
        if (fileInput) {
            fileInput.value = '';
        }
    }

    async function confirmAndUpload() {
        if (!randomChallenge || !randomChallenge.id) {
            alert('No challenge selected!');
            return;
        }

        // Check locally first to prevent unnecessary API calls
        if (randomChallenge.completed.includes(name)) {
            alert('Challenge already completed!');
            cancelPreview();
            return;
        }

        // Prevent multiple simultaneous uploads
        if (isUploading) {
            return;
        }

        isUploading = true;

        try {
            const challengedoc = doc(db, dbName, randomChallenge.id);
            const docSnap = await getDoc(challengedoc);

            if (!docSnap.exists()) {
                alert('Challenge not found in database. Please refresh and try again!');
                isUploading = false;
                cancelPreview();
                return;
            }

            // Double-check the document hasn't been updated since we last checked
            const currentCompleted = docSnap.data().completed || [];
            if (currentCompleted.includes(name)) {
                alert('Challenge already completed by you!');
                isUploading = false;
                cancelPreview();
                return;
            }

            let imageUrl: string | null = null;

            // Upload image if available
            if (imageFile) {
                try {
                    imageUrl = await uploadImage(imageFile, randomChallenge.id, name);
                } catch (uploadError) {
                    console.error('Image upload failed:', uploadError);
                    toast.push('Failed to upload image', {
                        theme: {
                            '--toastBackground': 'linear-gradient(135deg, #ff6b6b, #ff5252)',
                            '--toastColor': 'white',
                        },
                        classes: ['error-toast'],
                    });
                    // Continue anyway - mark as complete even if upload fails
                }
            }

            // Prepare update data
            const updateData: any = {
                completed: arrayUnion(name),
            };

            // Add image to images array if upload succeeded
            if (imageUrl) {
                const imageData = {
                    url: imageUrl,
                    teamName: name,
                    timestamp: Date.now(),
                };
                updateData.images = arrayUnion(imageData);
            }

            // Use arrayUnion which is atomic - prevents duplicates even with race conditions
            await updateDoc(challengedoc, updateData);

            // Trigger confetti animation
            triggerConfetti();
            selectRandomChallenge();
            isUploading = false;
            cancelPreview();
        } catch (error) {
            console.error('Error completing challenge:', error);
            isUploading = false;
            // Provide more specific error messages
            if (error.code === 'permission-denied') {
                alert('Permission denied. Please check your access!');
            } else if (error.code === 'unavailable' || error.message?.includes('network')) {
                alert('Network error. Please check your connection and try again!');
            } else {
                alert('Unable to complete challenge. Please try again or refresh!');
            }
            cancelPreview();
        }
    }
</script>

<Total total={challengeList.length} completed={completedChallenges} />
{#if isAdmin}
    <Leaderboard {challengeList} />
{/if}

<div class="container">
    <div class="challenge-wrapper" class:completed={randomChallenge.completed.includes(name)}>
        {#if completedChallenges == challengeList.length}
            <div class="celebration-card">
                <div class="trophy-icon">
                    <PartyPopper size={72} color="var(--gold)" />
                </div>
                <h1>Ho Ho Ho!</h1>
                <h2>All Challenges Complete!</h2>
                <p class="celebration-subtitle">You're a Christmas Champion! 🏆</p>
            </div>
        {:else if randomChallenge && randomChallenge.name && randomChallenge.completed}
            <div class="challenge-card">
                <div class="challenge-content">
                    <p class="prompt">Take a photo of...</p>
                    
                    <div class="challenge-text-box">
                        <h1 class="challenge-title">{randomChallenge.name}</h1>
                    </div>
                    
                    <div class="completers-section">
                        <h3 class="completers-label">🎄 Completed by:</h3>
                        <div class="completers-box" class:has-completers={randomChallenge.completed.length > 0}>
                            {#if randomChallenge.completed.length > 0}
                                <span class="completer-names">{randomChallenge.completed.join(', ')}</span>
                            {:else}
                                <span class="no-completers">Be the first to capture this! 🌟</span>
                            {/if}
                        </div>
                    </div>
                </div>
                
                <div class="action-buttons">
                    <button class="action-btn shuffle-btn" on:click={selectRandomChallenge} title="New Challenge">
                        <Shuffle size={28} />
                    </button>
                    <button class="action-btn camera-btn" on:click={openImagePicker} title="Take Photo">
                        <Camera size={28} />
                    </button>
                    <input
                        type="file"
                        accept="image/*"
                        capture="environment"
                        bind:this={fileInput}
                        on:change={handleFileSelect}
                        style="display: none;"
                    />
                </div>
            </div>
        {/if}
    </div>
</div>

<!-- Image Preview Modal -->
{#if showPreview && capturedImage}
    <div class="preview-overlay" transition:fade={{ duration: 200 }}>
        <div class="preview-modal" transition:scale={{ duration: 300, start: 0.9 }}>
            <div class="preview-header">
                {#if isUploading}
                    <h2>Uploading your photo...</h2>
                    <p>Spreading Christmas cheer! ✨</p>
                {:else}
                    <h2>Perfect Shot! 📸</h2>
                    <p>Use this photo for the challenge?</p>
                {/if}
            </div>

            <div class="preview-image-container">
                {#if isUploading}
                    <div class="loading-overlay">
                        <LoaderCircle size={56} class="loading-spinner" />
                        <p>Saving to Santa's gallery...</p>
                    </div>
                {/if}
                <img 
                    src={capturedImage} 
                    alt="Your photo" 
                    class="preview-image" 
                    class:blur={isUploading} 
                />
            </div>
            
            <div class="preview-buttons">
                <button class="preview-btn cancel-btn" on:click={cancelPreview} disabled={isUploading}>
                    <X size={24} />
                    <span>Retake</span>
                </button>
                <button class="preview-btn confirm-btn" on:click={confirmAndUpload} disabled={isUploading}>
                    {#if isUploading}
                        <LoaderCircle size={24} class="spinner" />
                    {:else}
                        <Check size={24} />
                    {/if}
                    <span>Submit!</span>
                </button>
            </div>
        </div>
    </div>
{/if}

<style>
    .container {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        width: 100%;
        padding: 16px;
        box-sizing: border-box;
    }

    .challenge-wrapper {
        max-width: 500px;
        width: 100%;
    }

    /* Main Challenge Card */
    .challenge-card {
        background: linear-gradient(160deg, 
            rgba(255, 255, 255, 0.98) 0%, 
            rgba(255, 248, 240, 0.95) 30%,
            rgba(255, 255, 255, 0.98) 100%);
        backdrop-filter: blur(16px);
        border-radius: 28px;
        padding: 32px 24px;
        box-shadow: 
            0 20px 50px rgba(43, 122, 75, 0.2),
            0 8px 24px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        border: 5px solid var(--tree-green);
        position: relative;
        text-align: center;
    }

    .challenge-content {
        margin-top: 16px;
    }

    .prompt {
        font-size: 1.4rem;
        font-weight: 700;
        color: var(--tree-green-dark);
        margin: 0 0 16px 0;
        opacity: 0.9;
    }

    .challenge-text-box {
        background: linear-gradient(145deg, 
            rgba(255, 215, 0, 0.15) 0%, 
            rgba(255, 248, 240, 0.9) 50%,
            rgba(255, 215, 0, 0.15) 100%);
        border: 4px dashed var(--gold);
        border-radius: 20px;
        padding: 24px 20px;
        margin: 16px 0;
        position: relative;
    }

    .challenge-text-box::before,
    .challenge-text-box::after {
        content: '⭐';
        position: absolute;
        font-size: 20px;
        top: 50%;
        transform: translateY(-50%);
    }

    .challenge-text-box::before {
        left: -30px;
    }

    .challenge-text-box::after {
        right: -30px;
    }

    .challenge-title {
        font-size: 2rem;
        font-weight: 700;
        color: var(--santa-red);
        margin: 0;
        line-height: 1.3;
        text-shadow: 
            2px 2px 0 var(--snow-white),
            0 2px 8px rgba(199, 58, 56, 0.2);
    }

    .completers-section {
        margin-top: 24px;
    }

    .completers-label {
        font-weight: 700;
        font-size: 1.1rem;
        color: var(--tree-green-dark);
        margin: 0 0 12px 0;
    }

    .completers-box {
        background: rgba(255, 255, 255, 0.8);
        border: 3px solid var(--tree-green-light);
        border-radius: 16px;
        padding: 14px 18px;
        min-height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .completers-box.has-completers {
        background: linear-gradient(135deg, 
            rgba(43, 122, 75, 0.1) 0%, 
            rgba(69, 163, 102, 0.15) 100%);
        border-color: var(--tree-green);
    }

    .completer-names {
        text-transform: capitalize;
        font-weight: 700;
        font-size: 1rem;
        color: var(--tree-green-dark);
        text-align: center;
        line-height: 1.5;
        max-height: 100px;
        overflow-y: auto;
        word-break: break-word;
    }

    .no-completers {
        color: var(--gingerbread-brown);
        font-style: italic;
        font-weight: 400;
        font-size: 1rem;
    }

    /* Action Buttons */
    .action-buttons {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin-top: 28px;
    }

    .action-btn {
        border-radius: 50%;
        width: 72px;
        height: 72px;
        min-width: 72px;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .action-btn::before {
        display: none;
    }

    .shuffle-btn {
        background: linear-gradient(180deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%);
        box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
        color: var(--text-dark);
    }

    .shuffle-btn:hover {
        background: linear-gradient(180deg, var(--gold) 0%, var(--gold-dark) 100%);
        transform: translateY(-4px) rotate(180deg);
        box-shadow: 0 10px 30px rgba(255, 215, 0, 0.6);
    }

    .camera-btn {
        background: linear-gradient(180deg, var(--tree-green-light) 0%, var(--tree-green) 50%, var(--tree-green-dark) 100%);
        box-shadow: 0 6px 20px rgba(43, 122, 75, 0.4);
    }

    .camera-btn:hover {
        background: linear-gradient(180deg, var(--tree-green) 0%, var(--tree-green-dark) 100%);
        box-shadow: 0 10px 30px rgba(43, 122, 75, 0.5);
    }

    /* Celebration Card */
    .celebration-card {
        background: linear-gradient(160deg, 
            rgba(255, 255, 255, 0.98) 0%, 
            rgba(255, 248, 240, 0.95) 30%,
            rgba(255, 255, 255, 0.98) 100%);
        backdrop-filter: blur(16px);
        border-radius: 28px;
        padding: 40px 24px;
        box-shadow: 
            0 20px 50px rgba(43, 122, 75, 0.2),
            0 8px 24px rgba(0, 0, 0, 0.1);
        border: 5px solid var(--tree-green);
        text-align: center;
        position: relative;
        overflow: hidden;
    }

    .trophy-icon {
        margin-bottom: 20px;
        animation: bounce 2s ease-in-out infinite;
    }

    @keyframes bounce {
        0%, 100% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-15px) scale(1.05); }
    }

    .celebration-card h1 {
        font-size: 2.5rem;
        margin: 0 0 8px 0;
    }

    .celebration-card h2 {
        font-size: 1.6rem;
        color: var(--tree-green-dark);
        margin: 0 0 12px 0;
    }

    .celebration-subtitle {
        font-size: 1.2rem;
        color: var(--gingerbread-brown);
        margin: 0;
    }

    /* Preview Modal */
    .preview-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(8px);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
    }

    .preview-modal {
        background: linear-gradient(160deg, 
            rgba(255, 255, 255, 0.98) 0%, 
            rgba(255, 248, 240, 0.95) 30%,
            rgba(255, 255, 255, 0.98) 100%);
        border-radius: 28px;
        padding: 32px 24px;
        max-width: 450px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 
            0 20px 60px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        border: 5px solid var(--tree-green);
        position: relative;
    }

    .preview-header {
        text-align: center;
        margin: 16px 0 24px 0;
    }

    .preview-header h2 {
        color: var(--santa-red);
        font-size: 1.8rem;
        margin: 0 0 8px 0;
    }

    .preview-header p {
        color: var(--tree-green-dark);
        font-size: 1.1rem;
        margin: 0;
    }

    .preview-image-container {
        position: relative;
        border-radius: 20px;
        overflow: hidden;
        border: 4px solid var(--tree-green);
        background: #000;
    }

    .preview-image {
        width: 100%;
        max-height: 50vh;
        object-fit: contain;
        display: block;
        transition: filter 0.3s ease;
    }

    .preview-image.blur {
        filter: blur(4px);
        opacity: 0.6;
    }

    .loading-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.9);
        gap: 16px;
        z-index: 10;
    }

    .loading-overlay p {
        color: var(--tree-green-dark);
        font-weight: 700;
        font-size: 1.1rem;
    }

    :global(.loading-spinner) {
        color: var(--tree-green);
        animation: spin 1s linear infinite;
    }

    :global(.spinner) {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }

    .preview-buttons {
        display: flex;
        gap: 16px;
        margin-top: 24px;
        justify-content: center;
    }

    .preview-btn {
        flex: 1;
        max-width: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 14px 20px;
        border-radius: 50px;
    }

    .preview-btn::before {
        display: none;
    }

    .confirm-btn {
        background: linear-gradient(180deg, var(--tree-green-light) 0%, var(--tree-green) 50%, var(--tree-green-dark) 100%);
        box-shadow: 0 6px 20px rgba(43, 122, 75, 0.4);
    }

    .confirm-btn:hover:not(:disabled) {
        background: linear-gradient(180deg, var(--tree-green) 0%, var(--tree-green-dark) 100%);
    }

    .confirm-btn:disabled {
        opacity: 0.7;
    }

    .cancel-btn {
        background: linear-gradient(180deg, #ff6b6b 0%, #ff5252 50%, #e04545 100%);
        box-shadow: 0 6px 20px rgba(255, 82, 82, 0.3);
    }

    .cancel-btn:hover:not(:disabled) {
        background: linear-gradient(180deg, #ff5252 0%, #e04545 100%);
    }

    .cancel-btn:disabled {
        opacity: 0.5;
    }

    /* Mobile Responsive */
    @media (max-width: 480px) {
        .container {
            padding: 10px;
        }

        .challenge-card {
            padding: 28px 18px;
            border-radius: 24px;
            border-width: 4px;
        }

        .prompt {
            font-size: 1.2rem;
        }

        .challenge-text-box {
            padding: 20px 16px;
            margin: 14px 8px;
            border-width: 3px;
        }

        .challenge-text-box::before,
        .challenge-text-box::after {
            font-size: 16px;
        }

        .challenge-text-box::before {
            left: -24px;
        }

        .challenge-text-box::after {
            right: -24px;
        }

        .challenge-title {
            font-size: 1.7rem;
        }

        .completers-section {
            margin-top: 20px;
        }

        .completers-label {
            font-size: 1rem;
        }

        .completers-box {
            padding: 12px 14px;
            min-height: 45px;
        }

        .action-buttons {
            gap: 16px;
            margin-top: 24px;
        }

        .action-btn {
            width: 64px;
            height: 64px;
            min-width: 64px;
        }

        .action-btn :global(svg) {
            width: 24px;
            height: 24px;
        }

        .celebration-card {
            padding: 32px 20px;
            border-radius: 24px;
        }

        .celebration-card h1 {
            font-size: 2rem;
        }

        .celebration-card h2 {
            font-size: 1.3rem;
        }

        .trophy-icon :global(svg) {
            width: 56px;
            height: 56px;
        }

        .preview-modal {
            padding: 28px 18px;
            border-radius: 24px;
        }

        .preview-header h2 {
            font-size: 1.5rem;
        }

        .preview-buttons {
            gap: 12px;
        }

        .preview-btn {
            padding: 12px 16px;
            font-size: 14px;
        }
    }

    @media (max-width: 375px) {
        .challenge-card {
            padding: 24px 14px;
        }

        .challenge-title {
            font-size: 1.5rem;
        }

        .challenge-text-box::before,
        .challenge-text-box::after {
            display: none;
        }

        .challenge-text-box {
            margin: 14px 0;
        }

        .action-buttons {
            gap: 14px;
        }

        .action-btn {
            width: 58px;
            height: 58px;
            min-width: 58px;
        }
    }
</style>
