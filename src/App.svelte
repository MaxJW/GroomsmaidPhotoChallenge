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
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.98));
        backdrop-filter: blur(10px);
        border: 2px solid var(--christmas-green);
        border-radius: 12px;
        color: var(--christmas-green-dark);
        font-weight: 500;
        font-size: 0.95rem;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(39, 156, 128, 0.2);
    }

    .toggle-btn:hover {
        background: linear-gradient(135deg, var(--christmas-green-light), var(--christmas-green));
        color: var(--white);
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(39, 156, 128, 0.3);
    }

    .toggle-btn.active {
        background: linear-gradient(135deg, var(--christmas-red), var(--christmas-red-dark));
        color: var(--white);
        border-color: var(--christmas-red-dark);
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

