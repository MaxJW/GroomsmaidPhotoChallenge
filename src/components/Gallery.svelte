<script lang="ts">
    import { onDestroy } from 'svelte';
    import { db } from '../firebase.js';
    import { collection, onSnapshot } from 'firebase/firestore';
    import { Image } from 'lucide-svelte';

    export let name;

    let dbName = 'christmas';
    let challenges: Array<{
        id: string;
        name: string;
        images: Array<{ url: string; teamName: string; timestamp: number }>;
    }> = [];

    const collRef = collection(db, dbName);
    const unsub = onSnapshot(collRef,
        (coll) => {
            challenges = [];
            coll.forEach((doc) => {
                const data = doc.data();
                const images = Array.isArray(data.images) ? data.images : [];
                if (images.length > 0) {
                    challenges.push({
                        id: doc.id,
                        name: data.name || 'Unnamed Challenge',
                        images: images,
                    });
                }
            });
        },
        (error) => {
            console.error('Error loading gallery:', error);
            alert('Error loading gallery. Please refresh the page!');
        }
    );

    onDestroy(() => {
        if (unsub) {
            unsub();
        }
    });
</script>

<div class="gallery-container">
    <div class="gallery-header card-back">
        <div class="header-content">
            <Image size={32} color="var(--christmas-green-dark)" />
            <h1>Photo Gallery</h1>
        </div>
        <p class="subtitle">All submitted photos grouped by challenge</p>
    </div>

    <div class="gallery-content">
        {#if challenges.length === 0}
            <div class="empty-state card-back">
                <p>No photos submitted yet!</p>
                <p class="subtext">Photos will appear here once teams start completing challenges.</p>
            </div>
        {:else}
            {#each challenges as challenge (challenge.id)}
                <div class="challenge-section card-back">
                    <h2 class="challenge-title">{challenge.name}</h2>
                    <div class="images-grid">
                        {#each challenge.images as image, index (image.timestamp)}
                            <div class="image-wrapper">
                                <img src={image.url} alt="Photo by {image.teamName}" loading="lazy" />
                                <div class="image-overlay">
                                    <span class="team-name">{image.teamName}</span>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</div>

<style>
    .gallery-container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: auto;
        padding: 16px;
        z-index: 1;
    }

    .gallery-header {
        max-width: 1200px;
        margin: 0 auto 24px;
        text-align: center;
    }

    .header-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin-bottom: 8px;
    }

    .header-content h1 {
        margin: 0;
        color: var(--christmas-green-dark);
    }

    .subtitle {
        color: var(--christmas-green-dark);
        opacity: 0.8;
        font-size: 1.1rem;
        margin: 0;
        font-weight: 400;
    }

    .gallery-content {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
    }

    .empty-state {
        text-align: center;
        padding: 60px 20px;
    }

    .empty-state p {
        font-size: 1.4rem;
        color: var(--christmas-green-dark);
        margin: 12px 0;
    }

    .subtext {
        font-size: 1rem;
        opacity: 0.7;
        font-style: italic;
    }

    .challenge-section {
        padding: 24px;
    }

    .challenge-title {
        font-size: 1.6rem;
        color: var(--christmas-green-dark);
        margin: 0 0 20px 0;
        font-weight: 600;
        text-align: center;
        padding-bottom: 12px;
        border-bottom: 2px solid var(--christmas-green-light);
    }

    .images-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 16px;
    }

    .image-wrapper {
        position: relative;
        width: 100%;
        aspect-ratio: 3/4;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(74, 74, 122, 0.15);
        background: #000;
    }

    .image-wrapper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }

    .image-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4), transparent);
        padding: 16px 12px 12px;
    }

    .team-name {
        color: var(--white);
        font-weight: 600;
        font-size: 1rem;
        text-transform: capitalize;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        display: block;
    }

    @media (max-width: 768px) {
        .gallery-container {
            padding: 12px;
        }

        .gallery-header {
            margin-bottom: 16px;
            padding: 20px 16px;
        }

        .header-content h1 {
            font-size: 1.8rem;
        }

        .subtitle {
            font-size: 1rem;
        }

        .gallery-content {
            gap: 16px;
        }

        .challenge-section {
            padding: 18px;
        }

        .challenge-title {
            font-size: 1.4rem;
            margin-bottom: 16px;
        }

        .images-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 12px;
        }

        .team-name {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 480px) {
        .images-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }

        .challenge-title {
            font-size: 1.2rem;
        }

        .empty-state {
            padding: 40px 16px;
        }

        .empty-state p {
            font-size: 1.2rem;
        }
    }
</style>

