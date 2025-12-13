<script lang="ts">
    import { Star } from 'lucide-svelte';

    export let total: number;
    export let completed: number;

    $: done = completed === total;
    $: percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    $: circumference = 2 * Math.PI * 40; // radius = 40
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="complete-box" class:done>
    <!-- Ornament hanger -->
    <div class="ornament-hanger">
        <div class="hanger-hook"></div>
        <div class="hanger-cap"></div>
    </div>
    
    <div class="ornament-body">
        <svg class="progress-ring" viewBox="0 0 100 100">
            <defs>
                <linearGradient id="progressRed" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="var(--santa-red-light)" />
                    <stop offset="100%" stop-color="var(--santa-red-dark)" />
                </linearGradient>
                <linearGradient id="progressGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="var(--tree-green-light)" />
                    <stop offset="100%" stop-color="var(--tree-green-dark)" />
                </linearGradient>
                <radialGradient id="ornamentShine" cx="30%" cy="30%" r="50%">
                    <stop offset="0%" stop-color="rgba(255,255,255,0.8)" />
                    <stop offset="100%" stop-color="rgba(255,255,255,0)" />
                </radialGradient>
            </defs>
            
            <!-- Background circle (ornament body) -->
            <circle
                cx="50"
                cy="50"
                r="40"
                fill="rgba(255, 248, 240, 0.95)"
                stroke="var(--tree-green)"
                stroke-width="4"
            />
            
            <!-- Progress arc -->
            <circle
                class="progress-arc"
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke={done ? "url(#progressGreen)" : "url(#progressRed)"}
                stroke-width="8"
                stroke-linecap="round"
                stroke-dasharray="{circumference}"
                stroke-dashoffset="{circumference - (circumference * percentage) / 100}"
                transform="rotate(-90 50 50)"
            />
            
            <!-- Shine effect -->
            <circle
                cx="50"
                cy="50"
                r="36"
                fill="url(#ornamentShine)"
            />
        </svg>
        
        <div class="progress-content">
            {#if done}
                <div class="star-icon">
                    <Star size={24} fill="var(--gold)" color="var(--gold-dark)" />
                </div>
            {:else}
                <span class="completed-num">{completed}</span>
                <span class="divider">/</span>
                <span class="total-num">{total}</span>
            {/if}
        </div>
    </div>
    
    <span class="ornament-label">{done ? 'Complete!' : 'Progress'}</span>
</div>

<style>
    #complete-box {
        position: fixed;
        top: 0;
        right: 0;
        margin: 16px;
        z-index: 99;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
        background: none;
        border: none;
        box-shadow: none;
    }

    .ornament-hanger {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: -8px;
        z-index: 2;
    }

    .hanger-hook {
        width: 20px;
        height: 16px;
        border: 4px solid var(--gold);
        border-bottom: none;
        border-radius: 10px 10px 0 0;
        background: transparent;
    }

    .hanger-cap {
        width: 32px;
        height: 14px;
        background: linear-gradient(180deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%);
        border-radius: 4px 4px 8px 8px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .ornament-body {
        position: relative;
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        filter: drop-shadow(0 8px 16px rgba(199, 58, 56, 0.25));
        animation: swing 4s ease-in-out infinite;
        transform-origin: top center;
    }

    @keyframes swing {
        0%, 100% { transform: rotate(-2deg); }
        50% { transform: rotate(2deg); }
    }

    .progress-ring {
        width: 100%;
        height: 100%;
        position: absolute;
    }

    .progress-arc {
        transition: stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .progress-content {
        position: relative;
        z-index: 2;
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: 2px;
    }

    .completed-num {
        font-size: 1.8rem;
        font-weight: 700;
        color: var(--santa-red);
        line-height: 1;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    .divider {
        font-size: 1.2rem;
        color: var(--tree-green-dark);
        opacity: 0.6;
        margin: 0 1px;
    }

    .total-num {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--tree-green-dark);
        opacity: 0.8;
        line-height: 1;
    }

    .star-icon {
        animation: twinkle 1.5s ease-in-out infinite;
    }

    @keyframes twinkle {
        0%, 100% { transform: scale(1) rotate(0deg); }
        50% { transform: scale(1.1) rotate(10deg); }
    }

    .ornament-label {
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--tree-green-dark);
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-top: 8px;
        background: var(--snow-white);
        padding: 4px 10px;
        border-radius: 20px;
        border: 2px solid var(--tree-green);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .done .ornament-label {
        background: linear-gradient(135deg, var(--tree-green-light), var(--tree-green));
        color: var(--snow-white);
        border-color: var(--tree-green-dark);
    }

    .done .ornament-body {
        filter: drop-shadow(0 8px 16px rgba(43, 122, 75, 0.3));
        animation: swing 4s ease-in-out infinite, glow 2s ease-in-out infinite;
    }

    @keyframes glow {
        0%, 100% { filter: drop-shadow(0 8px 16px rgba(43, 122, 75, 0.3)); }
        50% { filter: drop-shadow(0 8px 24px rgba(255, 215, 0, 0.5)); }
    }

    @media (max-width: 480px) {
        #complete-box {
            margin: 10px;
        }

        .ornament-body {
            width: 85px;
            height: 85px;
        }

        .hanger-hook {
            width: 16px;
            height: 12px;
            border-width: 3px;
        }

        .hanger-cap {
            width: 26px;
            height: 12px;
        }

        .completed-num {
            font-size: 1.5rem;
        }

        .total-num {
            font-size: 0.95rem;
        }

        .divider {
            font-size: 1rem;
        }

        .ornament-label {
            font-size: 0.65rem;
            padding: 3px 8px;
            margin-top: 6px;
        }

        .star-icon :global(svg) {
            width: 20px;
            height: 20px;
        }
    }

    @media (max-width: 375px) {
        #complete-box {
            margin: 8px;
        }

        .ornament-body {
            width: 75px;
            height: 75px;
        }

        .completed-num {
            font-size: 1.3rem;
        }

        .total-num {
            font-size: 0.85rem;
        }
    }
</style>
