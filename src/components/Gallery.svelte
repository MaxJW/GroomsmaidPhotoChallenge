<script lang="ts">
    import { onDestroy } from 'svelte';
    import { fade } from 'svelte/transition';
    import { db } from '../firebase.js';
    import { collection, onSnapshot } from 'firebase/firestore';
    import { Camera } from 'lucide-svelte';

    export let name;

    let dbName = 'christmas';
    let challenges: Array<{
        id: string;
        name: string;
        images: Array<{ url: string; teamName: string; timestamp: number }>;
    }> = [];

    // Lightbox state
    let selectedImage: { url: string; teamName: string } | null = null;

    function openLightbox(image: { url: string; teamName: string }) {
        selectedImage = image;
    }

    function closeLightbox() {
        selectedImage = null;
    }

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

<div class="gallery-wrapper">
    <!-- Header Card -->
    <div class="gallery-header">
        <div class="header-content">
            <Camera size={36} color="var(--santa-red)" />
            <h1>Photo Gallery</h1>
        </div>
        <p class="header-subtitle">All the festive moments captured! 🎄</p>
    </div>

    <!-- Gallery Content -->
    <div class="gallery-grid">
        {#if challenges.length === 0}
            <div class="empty-gallery">
                <div class="empty-icon">📷</div>
                <h2>No Photos Yet!</h2>
                <p>Photos will appear here as teams complete challenges.</p>
            </div>
        {:else}
            {#each challenges as challenge (challenge.id)}
                <div class="challenge-gallery">
                    <div class="challenge-header">
                        <span class="challenge-icon">🎯</span>
                        <h2>{challenge.name}</h2>
                        <span class="photo-count">{challenge.images.length} 📸</span>
                    </div>
                    
                    <div class="photos-grid">
                        {#each challenge.images as image, index (image.timestamp)}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <div class="photo-frame" on:click={() => openLightbox(image)}>
                                <div class="frame-corner top-left"></div>
                                <div class="frame-corner top-right"></div>
                                <div class="frame-corner bottom-left"></div>
                                <div class="frame-corner bottom-right"></div>
                                
                                <img src={image.url} alt="Photo by {image.teamName}" loading="lazy" />
                                
                                <div class="photo-caption">
                                    <span class="team-badge">{image.teamName}</span>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</div>

<!-- Fullscreen Lightbox -->
{#if selectedImage}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="lightbox" transition:fade={{ duration: 200 }} on:click={closeLightbox}>
        <img src={selectedImage.url} alt="Photo by {selectedImage.teamName}" />
        <div class="lightbox-caption">
            <span>{selectedImage.teamName}</span>
        </div>
        <p class="lightbox-hint">Tap anywhere to close</p>
    </div>
{/if}

<style>
    .gallery-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow-y: auto;
        padding: 16px;
        z-index: 1;
    }

    /* Header Card */
    .gallery-header {
        max-width: 800px;
        margin: 0 auto 24px;
        background: linear-gradient(160deg, 
            rgba(255, 255, 255, 0.98) 0%, 
            rgba(255, 248, 240, 0.95) 30%,
            rgba(255, 255, 255, 0.98) 100%);
        backdrop-filter: blur(16px);
        border-radius: 28px;
        padding: 32px 24px;
        text-align: center;
        border: 5px solid var(--tree-green);
        box-shadow: 
            0 12px 40px rgba(43, 122, 75, 0.2),
            0 6px 16px rgba(0, 0, 0, 0.1);
        position: relative;
    }

    .header-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
        margin-top: 12px;
    }

    .header-content h1 {
        margin: 0;
        font-size: 2.2rem;
    }

    .header-content :global(svg) {
        filter: drop-shadow(0 2px 4px rgba(199, 58, 56, 0.3));
    }

    .header-subtitle {
        color: var(--tree-green-dark);
        font-size: 1.1rem;
        margin: 12px 0 0 0;
        font-weight: 400;
    }

    /* Gallery Grid */
    .gallery-grid {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 24px;
        padding-bottom: 40px;
    }

    /* Empty State */
    .empty-gallery {
        background: linear-gradient(160deg, 
            rgba(255, 255, 255, 0.98) 0%, 
            rgba(255, 248, 240, 0.95) 100%);
        border-radius: 28px;
        padding: 60px 32px;
        text-align: center;
        border: 5px dashed var(--tree-green);
        box-shadow: 0 8px 32px rgba(43, 122, 75, 0.15);
    }

    .empty-icon {
        font-size: 64px;
        margin-bottom: 20px;
        animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-12px); }
    }

    .empty-gallery h2 {
        font-size: 1.8rem;
        color: var(--santa-red);
        margin: 0 0 12px 0;
    }

    .empty-gallery p {
        font-size: 1.1rem;
        color: var(--tree-green-dark);
        margin: 0;
    }

    /* Challenge Gallery Section */
    .challenge-gallery {
        background: linear-gradient(160deg, 
            rgba(255, 255, 255, 0.98) 0%, 
            rgba(255, 248, 240, 0.95) 30%,
            rgba(255, 255, 255, 0.98) 100%);
        backdrop-filter: blur(12px);
        border-radius: 24px;
        padding: 24px;
        border: 4px solid var(--tree-green);
        box-shadow: 
            0 8px 32px rgba(43, 122, 75, 0.15),
            0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .challenge-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding-bottom: 16px;
        margin-bottom: 20px;
        border-bottom: 3px dashed var(--tree-green-light);
    }

    .challenge-icon {
        font-size: 24px;
    }

    .challenge-header h2 {
        flex: 1;
        font-size: 1.5rem;
        color: var(--tree-green-dark);
        margin: 0;
        font-weight: 700;
    }

    .photo-count {
        font-size: 1rem;
        font-weight: 700;
        color: var(--santa-red);
        background: rgba(199, 58, 56, 0.1);
        padding: 6px 12px;
        border-radius: 20px;
        border: 2px solid var(--santa-red-light);
    }

    /* Photos Grid */
    .photos-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
        gap: 20px;
    }

    /* Photo Frame - Polaroid Style */
    .photo-frame {
        position: relative;
        background: var(--snow-white);
        border-radius: 12px;
        padding: 10px 10px 50px 10px;
        box-shadow: 
            0 8px 24px rgba(0, 0, 0, 0.15),
            0 4px 8px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        transform: rotate(var(--rotation, 0deg));
        cursor: pointer;
    }

    .photo-frame:nth-child(odd) {
        --rotation: -2deg;
    }

    .photo-frame:nth-child(even) {
        --rotation: 2deg;
    }

    .photo-frame:nth-child(3n) {
        --rotation: 1deg;
    }

    .photo-frame:hover {
        transform: rotate(0deg) scale(1.05) translateY(-8px);
        box-shadow: 
            0 16px 40px rgba(0, 0, 0, 0.2),
            0 8px 16px rgba(0, 0, 0, 0.15);
        z-index: 10;
    }

    /* Decorative corners */
    .frame-corner {
        position: absolute;
        width: 20px;
        height: 20px;
        border: 3px solid var(--santa-red);
        opacity: 0.6;
    }

    .frame-corner.top-left {
        top: 4px;
        left: 4px;
        border-right: none;
        border-bottom: none;
        border-radius: 8px 0 0 0;
    }

    .frame-corner.top-right {
        top: 4px;
        right: 4px;
        border-left: none;
        border-bottom: none;
        border-radius: 0 8px 0 0;
    }

    .frame-corner.bottom-left {
        bottom: 44px;
        left: 4px;
        border-right: none;
        border-top: none;
        border-radius: 0 0 0 8px;
    }

    .frame-corner.bottom-right {
        bottom: 44px;
        right: 4px;
        border-left: none;
        border-top: none;
        border-radius: 0 0 8px 0;
    }

    .photo-frame img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 6px;
        display: block;
    }

    .photo-caption {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px;
        display: flex;
        justify-content: center;
    }

    .team-badge {
        font-weight: 700;
        font-size: 0.9rem;
        color: var(--tree-green-dark);
        text-transform: capitalize;
        background: linear-gradient(135deg, rgba(43, 122, 75, 0.1), rgba(69, 163, 102, 0.15));
        padding: 4px 12px;
        border-radius: 20px;
        border: 2px solid var(--tree-green-light);
    }

    /* Lightbox */
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.95);
        z-index: 1000;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px;
        cursor: pointer;
    }

    .lightbox img {
        max-width: 100%;
        max-height: 80vh;
        object-fit: contain;
        border-radius: 12px;
        box-shadow: 0 8px 40px rgba(0, 0, 0, 0.5);
    }

    .lightbox-caption {
        margin-top: 20px;
    }

    .lightbox-caption span {
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--snow-white);
        text-transform: capitalize;
        background: linear-gradient(180deg, var(--tree-green-light) 0%, var(--tree-green) 100%);
        padding: 8px 20px;
        border-radius: 30px;
        border: 3px solid var(--snow-white);
    }

    .lightbox-hint {
        position: absolute;
        bottom: 30px;
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
        margin: 0;
    }

    /* Mobile Responsive */
    @media (max-width: 768px) {
        .gallery-wrapper {
            padding: 12px;
        }

        .gallery-header {
            margin-bottom: 20px;
            padding: 28px 20px;
            border-radius: 24px;
            border-width: 4px;
        }

        .header-content {
            gap: 10px;
        }

        .header-content h1 {
            font-size: 1.8rem;
        }

        .header-content :global(svg) {
            width: 28px;
            height: 28px;
        }

        .header-subtitle {
            font-size: 1rem;
        }

        .gallery-grid {
            gap: 20px;
        }

        .challenge-gallery {
            padding: 20px;
            border-radius: 20px;
        }

        .challenge-header h2 {
            font-size: 1.3rem;
        }

        .photos-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 16px;
        }

        .photo-frame {
            padding: 8px 8px 44px 8px;
        }

        .team-badge {
            font-size: 0.8rem;
            padding: 3px 10px;
        }
    }

    @media (max-width: 480px) {
        .photos-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
        }

        .challenge-header {
            flex-wrap: wrap;
            gap: 8px;
        }

        .challenge-header h2 {
            flex: none;
            width: 100%;
            order: 1;
        }

        .challenge-icon {
            order: 0;
        }

        .photo-count {
            order: 0;
            margin-left: auto;
        }

        .photo-frame {
            padding: 6px 6px 40px 6px;
        }

        .frame-corner {
            width: 14px;
            height: 14px;
            border-width: 2px;
        }

        .frame-corner.bottom-left,
        .frame-corner.bottom-right {
            bottom: 36px;
        }

        .empty-gallery {
            padding: 40px 20px;
            border-radius: 20px;
        }

        .empty-icon {
            font-size: 48px;
        }

        .empty-gallery h2 {
            font-size: 1.5rem;
        }

        .empty-decorations span {
            font-size: 24px;
        }
    }
</style>
