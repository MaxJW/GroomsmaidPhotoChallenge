<script lang="ts">
    import { onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';
    import { db } from '../firebase.js';
    import { collection, doc, updateDoc, getDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
    import confetti from 'canvas-confetti';
    import Leaderboard from './Leaderboard.svelte';
    import Total from './Total.svelte';
    import { RefreshCw, Camera, X, Check, PartyPopper, Loader2 } from 'lucide-svelte';
    import { uploadImage } from '../cloudinary';
    import { toast } from '@zerodevx/svelte-toast';

    export let name;

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
        const count = 200;
        const defaults = {
            origin: { y: 0.7 },
            colors: ['#FFB366', '#4A4A7A', '#FFD4A6', '#6B6B9E', '#B8E6B8', '#FFB3D1'],
            shapes: ['square', 'circle'],
        };

        function fire(particleRatio: number, opts: any) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio),
            });
        }

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        });
        fire(0.2, {
            spread: 60,
        });
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8,
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2,
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        });
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
<Leaderboard {challengeList} />

<div class="container">
    <div class="heading card-back" class:completed={randomChallenge.completed.includes(name)}>
        {#if completedChallenges == challengeList.length}
            <div class="completion-celebration">
                <div class="icon-large">
                    <PartyPopper size={64} color="var(--christmas-red)" />
                </div>
                <h1>All challenges completed!</h1>
                <h2>Submit your best picture from the game below</h2>
            </div>
        {:else if randomChallenge && randomChallenge.name && randomChallenge.completed}
            <div class="challenge-block">
                <h2 class="prompt">Take a photo of...</h2>
                <div class="challenge-card">
                    <h1 class="challenge">{randomChallenge.name}</h1>
                </div>
                <div class="completers-section">
                    <h3 class="completers-label">Completed by:</h3>
                    <div class="completers" class:has-completers={randomChallenge.completed.length > 0}>
                        {#if randomChallenge.completed.length > 0}
                            <span class="completer-list">{randomChallenge.completed.join(', ')}</span>
                        {:else}
                            <span class="no-completers">Not completed by anyone yet!</span>
                        {/if}
                    </div>
                </div>
            </div>
            <div class="buttons">
                <button class="action-btn refresh-btn" on:click={selectRandomChallenge} title="New Challenge">
                    <RefreshCw size={24} />
                </button>
                <button class="action-btn camera-btn" on:click={openImagePicker} title="Take Photo">
                    <Camera size={24} />
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
        {/if}
    </div>
</div>

<!-- Image Preview Modal -->
{#if showPreview && capturedImage}
    <div class="preview-overlay" transition:fade={{ duration: 200 }}>
        <div class="preview-container">
            <div class="preview-header">
                {#if isUploading}
                    <h3>Uploading your photo...</h3>
                {:else}
                    <h3>Do you want to use this picture for this challenge?</h3>
                {/if}
            </div>

            <div class="preview-wrapper">
                {#if isUploading}
                    <div class="loading-overlay">
                        <Loader2 size={48} class="loading-spinner" />
                        <p>Uploading and saving your challenge...</p>
                    </div>
                    <img src={capturedImage} alt="Selected photo" class="preview-image" class:loading-blur={isUploading} />
                {:else}
                    <img src={capturedImage} alt="Selected photo" class="preview-image" />
                {/if}
                <div class="preview-actions">
                    <button class="action-btn confirm-btn" on:click={confirmAndUpload} disabled={isUploading} title="Confirm">
                        {#if isUploading}
                            <Loader2 size={24} class="spinner" />
                        {:else}
                            <Check size={24} />
                        {/if}
                    </button>
                    <button class="action-btn cancel-btn" on:click={cancelPreview} disabled={isUploading} title="Cancel">
                        <X size={24} />
                    </button>
                </div>
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

    .heading {
        text-align: center;
        pointer-events: all;
        max-width: 95%;
        width: 100%;
        max-width: 500px;
        position: relative;
    }

    .heading.completed {
        background: linear-gradient(135deg, rgba(184, 230, 184, 0.95), rgba(191, 255, 191, 0.98)) !important;
    }

    .completion-celebration {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        padding: 20px 0;
    }

    .icon-large {
        animation: bounce 2s ease-in-out infinite;
    }

    @keyframes bounce {
        0%, 100% {
            transform: translateY(0) scale(1);
        }
        50% {
            transform: translateY(-15px) scale(1.1);
        }
    }

    .completion-celebration h1 {
        color: var(--christmas-red-dark);
        font-size: 2.2rem;
        margin: 0;
        font-weight: 600;
    }

    .completion-celebration h2 {
        color: var(--christmas-green-dark);
        font-weight: 400;
        font-size: 1.3rem;
        margin: 0;
    }

    .challenge-block {
        margin-bottom: 24px;
    }

    .prompt {
        font-weight: 400;
        font-size: 1.6rem;
        color: var(--christmas-green-dark);
        margin-bottom: 16px;
        opacity: 0.9;
    }

    .challenge-card {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 252, 249, 0.98));
        backdrop-filter: blur(15px);
        border-radius: 16px;
        padding: 24px;
        margin: 20px 0;
        box-shadow: 0 8px 24px rgba(74, 74, 122, 0.25),
            0 2px 8px rgba(74, 74, 122, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        border: 2px solid rgba(255, 255, 255, 0.6);
        min-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .challenge {
        font-weight: 700;
        font-size: 1.8rem;
        color: var(--christmas-green-dark);
        margin: 0;
        line-height: 1.4;
        text-align: center;
        text-shadow: 0 2px 4px rgba(255, 255, 255, 0.8),
            0 1px 2px rgba(74, 74, 122, 0.2);
        letter-spacing: 0.5px;
    }

    .completers-section {
        margin-top: 20px;
    }

    .completers-label {
        font-weight: 500;
        font-size: 1.3rem;
        color: var(--text-dark);
        margin-bottom: 8px;
    }

    .completers {
        background: rgba(255, 255, 255, 0.7);
        border-radius: 12px;
        padding: 12px 16px;
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--christmas-green-light);
    }

    .completers.has-completers {
        background: rgba(184, 230, 184, 0.3);
        border-color: var(--christmas-green);
    }

    .completer-list {
        text-transform: capitalize;
        font-weight: 500;
        font-size: 1.05rem;
        color: var(--text-dark);
        text-align: center;
        line-height: 1.5;
        max-height: 120px;
        overflow-y: auto;
        word-break: break-word;
    }

    .no-completers {
        color: var(--christmas-green-dark);
        opacity: 0.7;
        font-style: italic;
        font-weight: 400;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        gap: 16px;
        justify-content: center;
        align-items: center;
        margin-top: 24px;
    }

    .action-btn {
        border-radius: 50%;
        aspect-ratio: 1 / 1;
        min-width: 64px;
        width: 64px;
        height: 64px;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid var(--christmas-red-dark);
    }

    .refresh-btn {
        background: linear-gradient(135deg, var(--christmas-green-light), var(--christmas-green));
        color: var(--white);
    }

    .refresh-btn:hover {
        background: linear-gradient(135deg, var(--christmas-green), var(--christmas-green-dark));
        transform: translateY(-2px) rotate(180deg);
    }

    .camera-btn {
        background: linear-gradient(135deg, var(--christmas-green), var(--christmas-green-light));
        color: var(--white);
        border-color: var(--christmas-green-light);
    }

    .camera-btn:hover {
        background: linear-gradient(135deg, var(--christmas-green-light), var(--christmas-green));
    }

    .preview-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.85);
        backdrop-filter: blur(4px);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
    }

    .preview-container {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 252, 249, 0.98));
        backdrop-filter: blur(20px);
        border-radius: 20px;
        padding: 24px;
        max-width: 90%;
        max-height: 90vh;
        width: 100%;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 12px 32px rgba(74, 74, 122, 0.3);
        border: 1px solid rgba(255, 255, 255, 0.5);
    }

    .preview-header {
        text-align: center;
        margin-bottom: 20px;
    }

    .preview-header h3 {
        color: var(--christmas-green-dark);
        font-size: 1.4rem;
        font-weight: 500;
        margin: 0;
    }



    .preview-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .preview-image {
        width: 100%;
        border-radius: 16px;
        object-fit: contain;
        max-height: 60vh;
        background: #000;
        transition: filter 0.3s ease;
    }

    .preview-image.loading-blur {
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
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(8px);
        border-radius: 16px;
        z-index: 10;
        gap: 16px;
    }

    .loading-overlay p {
        color: var(--christmas-green-dark);
        font-size: 1.1rem;
        font-weight: 500;
        margin: 0;
        text-align: center;
    }

    .loading-spinner {
        color: var(--christmas-green);
        animation: spin 1s linear infinite;
    }

    .spinner {
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .preview-actions {
        display: flex;
        gap: 16px;
        justify-content: center;
    }

    .confirm-btn {
        background: linear-gradient(135deg, var(--christmas-green), var(--christmas-green-light));
        color: var(--white);
        border-color: var(--christmas-green-light);
    }

    .confirm-btn:hover:not(:disabled) {
        background: linear-gradient(135deg, var(--christmas-green-light), var(--christmas-green));
    }

    .confirm-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .cancel-btn {
        background: linear-gradient(135deg, #ff6b6b, #ff5252);
        color: var(--white);
        border-color: #ff5252;
    }

    .cancel-btn:hover:not(:disabled) {
        background: linear-gradient(135deg, #ff5252, #ff6b6b);
    }

    .cancel-btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .action-btn :global(svg) {
        flex-shrink: 0;
    }

    @media (max-width: 480px) {
        .container {
            padding: 8px;
            height: 100vh;
            overflow-y: auto;
        }

        .heading {
            max-width: 100%;
            margin: 0;
            padding: 20px 16px;
        }

        .challenge {
            font-size: 2rem;
            line-height: 1.3;
        }

        .prompt {
            font-size: 1.3rem;
            margin-bottom: 12px;
        }

        .challenge-card {
            padding: 18px 16px;
            margin: 14px 0;
            min-height: 70px;
        }

        .challenge-block {
            margin-bottom: 20px;
        }

        .completers-section {
            margin-top: 16px;
        }

        .completers {
            padding: 10px 14px;
            min-height: 50px;
        }

        .completer-list {
            font-size: 1rem;
        }

        .completion-celebration {
            padding: 16px 0;
            gap: 12px;
        }

        .completion-celebration h1 {
            font-size: 1.6rem;
            padding: 0 8px;
        }

        .completion-celebration h2 {
            font-size: 1rem;
            padding: 0 8px;
        }

        .icon-large :global(svg) {
            width: 40px;
            height: 40px;
        }

        .action-btn {
            min-width: 56px;
            width: 56px;
            height: 56px;
        }

        .action-btn :global(svg) {
            width: 22px;
            height: 22px;
        }

        .buttons {
            gap: 14px;
            margin-top: 18px;
        }
    }

    /* iPhone SE specific (375px and below) */
    @media (max-width: 375px) {
        .container {
            padding: 6px;
        }

        .heading {
            padding: 16px 14px;
        }

        .challenge {
            font-size: 1.8rem;
        }

        .challenge-card {
            padding: 16px 14px;
            margin: 12px 0;
        }

        .buttons {
            gap: 12px;
        }
    }
</style>
