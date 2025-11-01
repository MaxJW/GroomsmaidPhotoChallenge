<script lang="ts">
    import { onDestroy } from 'svelte';
    import Challenges from './components/Challenges.svelte';
    import Gallery from './components/Gallery.svelte';
    import User from './components/User.svelte';
    import { Image, Trophy } from 'lucide-svelte';
    import { SvelteToast } from '@zerodevx/svelte-toast';
    import { db } from './firebase.js';
    import { doc, onSnapshot, setDoc } from 'firebase/firestore';

    //Currently set name
    let nameVal = '';
    let showGallery = false;

    $: isAdmin = nameVal.toLowerCase() === 'max_admin';

    // Firestore document reference for global gallery mode
    const galleryModeDoc = doc(db, 'appSettings', 'galleryMode');

    // Subscribe to gallery mode changes from Firestore
    let unsubscribe: (() => void) | null = null;

    // Set up real-time listener for gallery mode
    unsubscribe = onSnapshot(galleryModeDoc,
        (docSnap) => {
            if (docSnap.exists()) {
                showGallery = docSnap.data().enabled || false;
            } else {
                // Document doesn't exist yet - default to false
                showGallery = false;
            }
        },
        (error) => {
            console.error('Error listening to gallery mode:', error);
            // Fallback to false if there's an error
            showGallery = false;
        }
    );

    async function toggleView() {
        if (!isAdmin) return;

        try {
            const newValue = !showGallery;
            await setDoc(galleryModeDoc, { enabled: newValue });
            // showGallery will be updated automatically by the onSnapshot listener
        } catch (error) {
            console.error('Error updating gallery mode:', error);
            alert('Failed to update gallery mode. Please try again.');
        }
    }

    onDestroy(() => {
        if (unsubscribe) {
            unsubscribe();
        }
    });

    //Populate firestore
    // Note: Challenges should be populated manually in Firestore console
    // import { db } from './firebase.js';
    const halloweenList = [
        'The person with the best costume',
        'Your team with the person with the best costume',
        'The person with the scariest costume',
        'Your team with the scariest costume',
        'The person with the funniest costume',
        'Your team with the funniest costume',
        'A pumpkin',
        'Your team reenacting a film scene',
        'Halloween decorations',
        'Something orange',
        'A cat',
        'Sweets',
        'Your team with one or both of the hosts',
        'A selfie',
        'Pretending to trick or treat',
        'The best makeup',
        'A photo with someone you didn’t come with',
        'A hug',
        'In the lounge',
        'In the kitchen',
        'Outside',
        'Upstairs',
        'Your team with a pumpkin',
        'Your team with the venom',
        'A photo posing as your costume',
        'Bobbing for apples',
        'Playing the piano',
        'Drinking one of the cocktails',
        'Eating from the charspookerie',
        'Your team with a ghost',
        'Your team with a spooky backdrop',
        'Another team',
        'A close up of costume details',
        'Best nails',
        'A shadow',
        'A silhouette',
        'Tarot cards',
        'Your team with part of someone else’s costume',
        'Something spooky',
        'In a mirror',
        'Telling a ghost story',
        'Someone scared',
    ];
</script>

<User bind:nameVal />
{#if nameVal != ''}
    {#if isAdmin}
        <div class="admin-toggle">
            <button
                class="toggle-btn"
                class:active={showGallery}
                on:click={toggleView}
                title={showGallery ? "View Challenges" : "View Gallery"}
            >
                {#if showGallery}
                    <Trophy size={20} />
                    <span>Challenges</span>
                {:else}
                    <Image size={20} />
                    <span>Gallery</span>
                {/if}
            </button>
        </div>
    {/if}

    {#if showGallery}
        <Gallery name={nameVal} />
    {:else}
        <Challenges name={nameVal} />
    {/if}
{/if}

<!-- Toast notification component -->
<SvelteToast />

<style>
    .admin-toggle {
        position: fixed;
        top: 80px;
        right: 20px;
        z-index: 100;
    }

    .toggle-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 252, 249, 0.98));
        backdrop-filter: blur(10px);
        border: 2px solid var(--dark-purple);
        border-radius: 12px;
        color: var(--dark-purple);
        font-weight: 500;
        font-size: 0.95rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(74, 74, 122, 0.2);
    }

    .toggle-btn:hover {
        background: linear-gradient(135deg, var(--purple-light), var(--dark-purple));
        color: var(--white);
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(74, 74, 122, 0.3);
    }

    .toggle-btn.active {
        background: linear-gradient(135deg, var(--orange-primary), var(--orange-dark));
        color: var(--white);
        border-color: var(--orange-dark);
    }

    @media (max-width: 480px) {
        .admin-toggle {
            top: 70px;
            right: 12px;
        }

        .toggle-btn {
            padding: 8px 12px;
            font-size: 0.85rem;
        }

        .toggle-btn :global(svg) {
            width: 18px;
            height: 18px;
        }
    }
</style>

