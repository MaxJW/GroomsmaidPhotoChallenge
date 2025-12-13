<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { quintOut } from 'svelte/easing';
    import { clickOutside } from '../clickOutside.js';
    import { Trophy, X, Crown, Medal, Award } from 'lucide-svelte';

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

    function getRankIcon(rank: number) {
        if (rank === 0) return { icon: Crown, color: '#FFD700' }; // Gold
        if (rank === 1) return { icon: Medal, color: '#C0C0C0' }; // Silver
        if (rank === 2) return { icon: Award, color: '#CD7F32' }; // Bronze
        return null;
    }

    function getRankEmoji(rank: number) {
        if (rank === 0) return '🥇';
        if (rank === 1) return '🥈';
        if (rank === 2) return '🥉';
        return `${rank + 1}`;
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="leaderboard-toggle" on:click={toggleVisibility} bind:this={toggleIcon} class:active={visible}>
    <Trophy size={28} />
    <span class="toggle-label">Scores</span>
</div>

{#if visible}
    <div
        class="leaderboard-backdrop"
        transition:fade={{ duration: 200, easing: quintOut }}
        on:click={toggleVisibility}
    ></div>
    <div
        class="leaderboard-panel"
        transition:fly={{ y: 30, duration: 300, easing: quintOut }}
    >
        <div class="leaderboard-header">
            <div class="header-title">
                <h2>Leaderboard</h2>
            </div>
            <button class="close-btn" on:click={toggleVisibility} title="Close">
                <X size={20} />
            </button>
        </div>
        
        <div class="leaderboard-body">
            {#if totals.length === 0}
                <div class="empty-state">
                    <span class="empty-icon">🎄</span>
                    <p>No scores yet!</p>
                    <p class="empty-hint">Complete challenges to climb the ranks</p>
                </div>
            {:else}
                <div class="rankings-list">
                    {#each totals as item, index (item.name)}
                        <div
                            class="rank-item"
                            class:champion={index === 0}
                            class:top-three={index < 3}
                            transition:fly={{
                                y: 20,
                                duration: 300,
                                delay: index * 60,
                                easing: quintOut
                            }}
                        >
                            <div class="rank-badge" class:gold={index === 0} class:silver={index === 1} class:bronze={index === 2}>
                                {#if index < 3}
                                    <span class="rank-emoji">{getRankEmoji(index)}</span>
                                {:else}
                                    <span class="rank-number">{index + 1}</span>
                                {/if}
                            </div>
                            
                            <div class="player-details">
                                <span class="player-name">{item.name}</span>
                                {#if index === 0}
                                    <span class="champion-label">👑 Leader!</span>
                                {/if}
                            </div>
                            
                            <div class="score-badge">
                                <span class="score-num">{item.challenges_completed}</span>
                                <span class="score-text">pts</span>
                            </div>
                        </div>
                    {/each}
                </div>
            {/if}
        </div>
    </div>
{/if}

<style>
    .leaderboard-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 98;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        
        background: linear-gradient(160deg, 
            rgba(255, 255, 255, 0.98) 0%, 
            rgba(255, 248, 240, 0.95) 100%);
        backdrop-filter: blur(10px);
        
        padding: 14px 18px;
        border-radius: 20px;
        border: 4px solid var(--tree-green);
        
        box-shadow: 
            0 8px 24px rgba(43, 122, 75, 0.25),
            0 4px 8px rgba(0, 0, 0, 0.1);
        
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .leaderboard-toggle :global(svg) {
        color: var(--gold);
        filter: drop-shadow(0 2px 4px rgba(255, 215, 0, 0.4));
    }

    .toggle-label {
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--tree-green-dark);
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .leaderboard-toggle:hover {
        transform: translateY(-4px) scale(1.05);
        box-shadow: 
            0 12px 32px rgba(43, 122, 75, 0.3),
            0 6px 12px rgba(0, 0, 0, 0.15);
        border-color: var(--gold);
    }

    .leaderboard-toggle.active {
        background: linear-gradient(180deg, var(--tree-green-light) 0%, var(--tree-green) 50%, var(--tree-green-dark) 100%);
        border-color: var(--snow-white);
    }

    .leaderboard-toggle.active :global(svg) {
        color: var(--snow-white);
    }

    .leaderboard-toggle.active .toggle-label {
        color: var(--snow-white);
    }

    .leaderboard-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        z-index: 99;
    }

    .leaderboard-panel {
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 340px;
        max-height: 70vh;
        z-index: 100;
        
        background: linear-gradient(160deg, 
            rgba(255, 255, 255, 0.98) 0%, 
            rgba(255, 248, 240, 0.95) 30%,
            rgba(255, 255, 255, 0.98) 100%);
        backdrop-filter: blur(16px);
        
        border-radius: 24px;
        border: 5px solid var(--tree-green);
        
        box-shadow: 
            0 20px 50px rgba(43, 122, 75, 0.25),
            0 8px 24px rgba(0, 0, 0, 0.15);
        
        display: flex;
        flex-direction: column;
        overflow: hidden;
    }

    .leaderboard-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 24px 20px 16px;
        border-bottom: 3px solid var(--tree-green-light);
    }

    .header-title {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .header-title h2 {
        margin: 0;
        font-size: 1.6rem;
        font-weight: 700;
        color: var(--santa-red);
        text-shadow: 1px 1px 0 var(--snow-white);
    }

    .close-btn {
        width: 36px;
        height: 36px;
        min-width: 36px;
        padding: 0;
        margin: 0;
        background: rgba(199, 58, 56, 0.1);
        border: 2px solid var(--santa-red-light);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
    }

    .close-btn::before {
        display: none;
    }

    .close-btn :global(svg) {
        color: var(--santa-red);
    }

    .close-btn:hover {
        background: var(--santa-red);
        border-color: var(--santa-red-dark);
        transform: rotate(90deg);
    }

    .close-btn:hover :global(svg) {
        color: var(--snow-white);
    }

    .leaderboard-body {
        flex: 1;
        overflow-y: auto;
        padding: 16px;
        max-height: calc(70vh - 80px);
    }

    .leaderboard-body::-webkit-scrollbar {
        width: 8px;
    }

    .leaderboard-body::-webkit-scrollbar-track {
        background: rgba(43, 122, 75, 0.1);
        border-radius: 4px;
    }

    .leaderboard-body::-webkit-scrollbar-thumb {
        background: var(--tree-green);
        border-radius: 4px;
    }

    .rankings-list {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .rank-item {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 14px 16px;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 16px;
        border: 3px solid var(--tree-green-light);
        transition: all 0.3s ease;
    }

    .rank-item:hover {
        background: rgba(255, 255, 255, 0.95);
        transform: translateX(6px);
        box-shadow: 0 4px 16px rgba(43, 122, 75, 0.15);
    }

    .rank-item.champion {
        background: linear-gradient(135deg, 
            rgba(255, 215, 0, 0.2) 0%, 
            rgba(255, 235, 150, 0.25) 100%);
        border-color: var(--gold);
        border-width: 4px;
    }

    .rank-item.top-three:not(.champion) {
        background: linear-gradient(135deg, 
            rgba(43, 122, 75, 0.1) 0%, 
            rgba(69, 163, 102, 0.15) 100%);
        border-color: var(--tree-green);
    }

    .rank-badge {
        flex-shrink: 0;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.9);
        border: 3px solid var(--tree-green-light);
    }

    .rank-badge.gold {
        background: linear-gradient(135deg, #FFE55C 0%, #FFD700 50%, #D4A600 100%);
        border-color: var(--gold-dark);
        box-shadow: 0 4px 12px rgba(255, 215, 0, 0.4);
    }

    .rank-badge.silver {
        background: linear-gradient(135deg, #E8E8E8 0%, #C0C0C0 50%, #A0A0A0 100%);
        border-color: #909090;
        box-shadow: 0 4px 12px rgba(192, 192, 192, 0.4);
    }

    .rank-badge.bronze {
        background: linear-gradient(135deg, #E6A577 0%, #CD7F32 50%, #A66028 100%);
        border-color: #8B5A2B;
        box-shadow: 0 4px 12px rgba(205, 127, 50, 0.4);
    }

    .rank-emoji {
        font-size: 22px;
    }

    .rank-number {
        font-size: 1rem;
        font-weight: 700;
        color: var(--tree-green-dark);
    }

    .player-details {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .player-name {
        text-transform: capitalize;
        font-weight: 700;
        font-size: 1.15rem;
        color: var(--text-dark);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .champion .player-name {
        font-size: 1.25rem;
        color: var(--gingerbread-dark);
    }

    .champion-label {
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--gold-dark);
    }

    .score-badge {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: linear-gradient(180deg, var(--santa-red-light) 0%, var(--santa-red) 50%, var(--santa-red-dark) 100%);
        padding: 8px 14px;
        border-radius: 14px;
        border: 2px solid var(--snow-white);
        box-shadow: 0 4px 12px rgba(199, 58, 56, 0.3);
    }

    .score-num {
        font-weight: 700;
        font-size: 1.4rem;
        color: var(--snow-white);
        line-height: 1;
    }

    .score-text {
        font-size: 0.65rem;
        color: rgba(255, 255, 255, 0.8);
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .empty-state {
        text-align: center;
        padding: 40px 20px;
    }

    .empty-icon {
        font-size: 48px;
        display: block;
        margin-bottom: 16px;
        animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
    }

    .empty-state p {
        margin: 8px 0;
        font-weight: 700;
        font-size: 1.2rem;
        color: var(--tree-green-dark);
    }

    .empty-hint {
        font-size: 1rem !important;
        opacity: 0.7;
        font-weight: 400 !important;
        font-style: italic;
    }

    @media (max-width: 480px) {
        .leaderboard-toggle {
            bottom: 16px;
            right: 16px;
            padding: 12px 14px;
            border-radius: 16px;
            border-width: 3px;
        }

        .leaderboard-toggle :global(svg) {
            width: 24px;
            height: 24px;
        }

        .toggle-label {
            font-size: 0.65rem;
        }

        .leaderboard-panel {
            bottom: 90px;
            right: 12px;
            left: 12px;
            width: auto;
            max-height: 75vh;
            border-radius: 20px;
            border-width: 4px;
        }

        .leaderboard-header {
            padding: 20px 16px 12px;
        }

        .header-title h2 {
            font-size: 1.4rem;
        }

        .leaderboard-body {
            padding: 12px;
        }

        .rank-item {
            padding: 12px 14px;
            gap: 10px;
        }

        .rank-badge {
            width: 38px;
            height: 38px;
        }

        .rank-emoji {
            font-size: 18px;
        }

        .player-name {
            font-size: 1rem;
        }

        .champion .player-name {
            font-size: 1.1rem;
        }

        .score-badge {
            padding: 6px 12px;
        }

        .score-num {
            font-size: 1.2rem;
        }
    }
</style>
