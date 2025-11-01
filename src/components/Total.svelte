<script lang="ts">
    import { CheckCircle2 } from 'lucide-svelte';

    export let total: number;
    export let completed: number;

    $: done = completed === total;
    $: percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
    $: circumference = 2 * Math.PI * 42; // radius = 42
    $: progressGradientId = done ? 'progressGradientDone' : 'progressGradient';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div id="complete-box" class="card-back" class:done>
    <div class="radial-progress-container">
        <div class="progress-header">
            {#if done}
                <CheckCircle2 size={16} color="var(--green-success)" />
            {/if}
            <span class="progress-label">Progress</span>
        </div>
        <div class="radial-progress-wrapper">
            <svg class="radial-progress" viewBox="0 0 100 100">
                <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="var(--orange-light)" />
                        <stop offset="100%" stop-color="var(--orange-primary)" />
                    </linearGradient>
                    <linearGradient id="progressGradientDone" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="var(--green-success)" />
                        <stop offset="100%" stop-color="#90D490" />
                    </linearGradient>
                </defs>
                <!-- Background circle -->
                <circle
                    class="progress-bg"
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke="rgba(255, 179, 102, 0.2)"
                    stroke-width="8"
                />
                <!-- Progress circle -->
                <circle
                    class="progress-circle"
                    class:done={done}
                    cx="50"
                    cy="50"
                    r="42"
                    fill="none"
                    stroke={`url(#${progressGradientId})`}
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-dasharray="{circumference}"
                    stroke-dashoffset="{circumference - (circumference * percentage) / 100}"
                    transform="rotate(-90 50 50)"
                />
            </svg>
            <div class="progress-numbers">
                <span class="completed-number">{completed}</span>
                <span class="divider">/</span>
                <span class="total-number">{total}</span>
            </div>
        </div>
    </div>
</div>

<style>
    #complete-box {
        position: fixed;
        top: 0;
        right: 0;
        margin: 16px;
        z-index: 99;
        max-width: calc(100% - 32px);
        padding: 16px 20px;
        min-width: 0;
    }

    .radial-progress-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
    }

    .progress-header {
        display: flex;
        align-items: center;
        gap: 6px;
        margin-bottom: 4px;
    }

    .progress-label {
        font-weight: 500;
        font-size: 0.95rem;
        color: var(--text-dark);
        opacity: 0.8;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .radial-progress-wrapper {
        position: relative;
        width: 100px;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .radial-progress {
        width: 100%;
        height: 100%;
    }

    .progress-bg {
        transition: stroke 0.3s ease;
    }

    .progress-circle {
        transition: stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            stroke 0.3s ease;
        filter: drop-shadow(0 2px 4px rgba(255, 179, 102, 0.3));
    }

    .progress-circle.done {
        filter: drop-shadow(0 2px 4px rgba(184, 230, 184, 0.4));
    }

    .progress-numbers {
        position: absolute;
        display: flex;
        align-items: baseline;
        justify-content: center;
        gap: 3px;
        font-weight: 700;
        pointer-events: none;
    }

    .completed-number {
        font-size: 1.7rem;
        color: var(--orange-primary);
        line-height: 1;
    }

    .divider {
        font-size: 1.3rem;
        color: var(--dark-purple);
        opacity: 0.5;
        line-height: 1;
    }

    .total-number {
        font-size: 1.2rem;
        color: var(--dark-purple);
        opacity: 0.7;
        line-height: 1;
    }

    .done {
        background: linear-gradient(135deg, rgba(184, 230, 184, 0.95), rgba(191, 255, 191, 0.98)) !important;
    }

    .done .progress-bg {
        stroke: rgba(184, 230, 184, 0.3);
    }

    .done .completed-number {
        color: #4A8A4A;
    }

    @media (max-width: 480px) {
        #complete-box {
            margin: 10px;
            padding: 12px 14px;
            max-width: calc(100% - 20px);
        }

        .radial-progress-container {
            gap: 6px;
        }

        .radial-progress-wrapper {
            width: 85px;
            height: 85px;
        }

        .completed-number {
            font-size: 1.2rem;
        }

        .total-number {
            font-size: 0.95rem;
        }

        .divider {
            font-size: 1rem;
        }

        .progress-label {
            font-size: 0.7rem;
        }

        .progress-header {
            margin-bottom: 2px;
        }

        .progress-header :global(svg) {
            width: 12px;
            height: 12px;
        }
    }

    @media (max-width: 375px) {
        #complete-box {
            margin: 8px;
            padding: 10px 12px;
            max-width: calc(100% - 16px);
        }

        .radial-progress-wrapper {
            width: 80px;
            height: 80px;
        }

        .completed-number {
            font-size: 1.1rem;
        }
    }
</style>
