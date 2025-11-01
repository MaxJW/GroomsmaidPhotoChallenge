<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { clickOutside } from '../clickOutside.js';
    import { Trophy, X } from 'lucide-svelte';

    export let challengeList = [];

    let completionCounts = {};

    $: {
        completionCounts = {};
        challengeList.forEach((challenge) => {
            challenge.completed.forEach((name) => {
                if (completionCounts[name]) {
                    completionCounts[name]++;
                } else {
                    completionCounts[name] = 1;
                }
            });
        });
    }

    $: totals = Object.keys(completionCounts)
        .map((name) => {
            return {
                name: name,
                challenges_completed: completionCounts[name],
            };
        })
        .sort((a, b) => {
            return b.challenges_completed - a.challenges_completed;
        });

    let visible = false;
    let toggleIcon;

    function toggleVisibility() {
        visible = !visible;
        if (visible) {
            toggleIcon.style['pointer-events'] = 'none';
        } else {
            toggleIcon.style['pointer-events'] = 'all';
        }
    }

    function getRankColor(rank: number) {
        if (rank === 0) return 'var(--orange-primary)'; // Gold/Orange for first
        if (rank === 1) return 'var(--purple-light)'; // Silver/Purple for second
        if (rank === 2) return 'var(--orange-dark)'; // Bronze/Dark orange for third
        return 'var(--text-dark)'; // Default
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="icon" on:click={toggleVisibility} bind:this={toggleIcon} class:active={visible}>
    <Trophy size={24} />
</div>

{#if visible}
    <div
        class="leaderboard-overlay"
        transition:fade={{ duration: 200, easing: quintOut }}
        on:click={toggleVisibility}
    ></div>
    <div
        class="leaderboard-container"
        transition:fly={{ y: 20, duration: 300, easing: quintOut }}
    >
        <div class="leaderboard-header">
            <div class="header-content">
                <Trophy size={28} color="var(--orange-primary)" />
                <h2>Leaderboard</h2>
            </div>
            <button class="close-btn" on:click={toggleVisibility} title="Close">
                <X size={20} />
            </button>
        </div>
        <div class="leaderboard-content">
            {#if totals.length === 0}
                <div class="empty-state">
                    <p>No completions yet!</p>
                    <p class="subtext">Complete challenges to appear on the leaderboard</p>
                </div>
            {:else}
                <div class="leaderboard-list">
                    {#each totals as item, index (item.name)}
                        <div
                            class="leaderboard-item"
                            class:top-three={index < 3}
                            transition:fly={{
                                y: 20,
                                duration: 300,
                                delay: index * 50,
                                easing: quintOut
                            }}
                        >
                            <div class="rank" style="color: {getRankColor(index)}">
                                {#if index === 0}
                                    <Trophy size={24} color="var(--orange-primary)" />
                                {:else if index === 1}
                                    <Trophy size={24} color="var(--purple-light)" />
                                {:else if index === 2}
                                    <Trophy size={24} color="var(--orange-dark)" />
                                {:else}
                                    <span class="rank-number">{index + 1}</span>
                                {/if}
                            </div>
                            <div class="player-info">
                                <span class="player-name">{item.name}</span>
                            </div>
                            <div class="score">
                                <span class="score-value">{item.challenges_completed}</span>
                                <span class="score-label">challenges</span>
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
{/if}

<style>
    .icon {
        width: 72px;
        height: 72px;
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 252, 249, 0.98));
        backdrop-filter: blur(10px);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 98;
        box-shadow: 0 6px 20px rgba(74, 74, 122, 0.4),
            0 2px 8px rgba(74, 74, 122, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        cursor: pointer;
        border: 3px solid var(--dark-purple);
    }

    .icon:hover {
        transform: translateY(-4px) scale(1.05);
        box-shadow: 0 8px 24px rgba(74, 74, 122, 0.5),
            0 4px 10px rgba(74, 74, 122, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 1);
        border-color: var(--purple-light);
    }

    .icon.active {
        background: linear-gradient(135deg, var(--purple-light), var(--dark-purple));
        border-color: var(--dark-purple);
        box-shadow: 0 6px 20px rgba(107, 107, 158, 0.5),
            0 2px 8px rgba(74, 74, 122, 0.4);
    }

    .icon.active :global(svg) {
        color: var(--white);
    }

    .icon :global(svg) {
        color: var(--dark-purple);
        filter: drop-shadow(0 1px 2px rgba(74, 74, 122, 0.3));
    }

    .leaderboard-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.4);
        backdrop-filter: blur(4px);
        z-index: 99;
    }

    .leaderboard-container {
        position: fixed;
        bottom: 90px;
        right: 20px;
        width: 320px;
        max-height: 70vh;
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.98), rgba(255, 252, 249, 0.98));
        backdrop-filter: blur(20px);
        border-radius: 20px;
        box-shadow: 0 12px 32px rgba(74, 74, 122, 0.25),
            0 4px 12px rgba(74, 74, 122, 0.15);
        z-index: 100;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.5);
    }

    .leaderboard-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        border-bottom: 2px solid var(--orange-light);
        background: linear-gradient(135deg, var(--orange-light), var(--orange-primary));
    }

    .header-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .header-content h2 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--dark-purple);
    }

    .close-btn {
        width: 36px;
        height: 36px;
        min-width: 36px;
        padding: 0;
        margin: 0;
        background: rgba(255, 255, 255, 0.3);
        border: none;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .close-btn:hover {
        background: rgba(255, 255, 255, 0.5);
        transform: rotate(90deg);
    }

    .close-btn :global(svg) {
        color: var(--dark-purple);
    }

    .leaderboard-content {
        flex: 1;
        overflow-y: auto;
        padding: 8px;
        max-height: calc(70vh - 80px);
    }

    .leaderboard-content::-webkit-scrollbar {
        width: 8px;
    }

    .leaderboard-content::-webkit-scrollbar-track {
        background: rgba(255, 179, 102, 0.1);
        border-radius: 4px;
    }

    .leaderboard-content::-webkit-scrollbar-thumb {
        background: var(--orange-primary);
        border-radius: 4px;
    }

    .leaderboard-content::-webkit-scrollbar-thumb:hover {
        background: var(--orange-dark);
    }

    .leaderboard-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .leaderboard-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 12px 16px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 12px;
        border: 1px solid var(--orange-light);
        transition: all 0.3s ease;
    }

    .leaderboard-item:hover {
        background: rgba(255, 255, 255, 0.9);
        transform: translateX(4px);
        box-shadow: 0 2px 8px rgba(74, 74, 122, 0.1);
    }

    .leaderboard-item.top-three {
        background: linear-gradient(135deg, rgba(255, 179, 102, 0.2), rgba(255, 212, 166, 0.3));
        border-color: var(--orange-primary);
        border-width: 2px;
        font-weight: 600;
    }

    .rank {
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.2rem;
    }

    .rank-number {
        font-size: 1.1rem;
        opacity: 0.7;
    }

    .player-info {
        flex: 1;
        min-width: 0;
    }

    .player-name {
        text-transform: capitalize;
        font-weight: 500;
        font-size: 1.1rem;
        color: var(--text-dark);
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .top-three .player-name {
        font-weight: 600;
        font-size: 1.15rem;
    }

    .score {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 2px;
        flex-shrink: 0;
    }

    .score-value {
        font-weight: 700;
        font-size: 1.3rem;
        color: var(--orange-primary);
    }

    .top-three .score-value {
        font-size: 1.4rem;
        color: var(--orange-dark);
    }

    .score-label {
        font-size: 0.7rem;
        color: var(--dark-purple);
        opacity: 0.7;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .empty-state {
        text-align: center;
        padding: 40px 20px;
        color: var(--dark-purple);
    }

    .empty-state p {
        margin: 8px 0;
        font-weight: 500;
        font-size: 1.1rem;
    }

    .empty-state .subtext {
        font-size: 0.9rem;
        opacity: 0.7;
        font-weight: 400;
        font-style: italic;
    }

    @media (max-width: 480px) {
        .leaderboard-container {
            bottom: 80px;
            right: 12px;
            left: 12px;
            width: auto;
            max-height: 75vh;
        }

        .icon {
            bottom: 16px;
            right: 16px;
            width: 64px;
            height: 64px;
        }

        .icon :global(svg) {
            width: 30px;
            height: 30px;
        }

        .header-content h2 {
            font-size: 1.3rem;
        }

        .leaderboard-item {
            padding: 10px 12px;
        }

        .player-name {
            font-size: 1rem;
        }

        .top-three .player-name {
            font-size: 1.05rem;
        }

        .score-value {
            font-size: 1.2rem;
        }

        .rank {
            width: 36px;
            height: 36px;
        }

        .rank :global(svg) {
            width: 20px;
            height: 20px;
        }
    }
</style>
