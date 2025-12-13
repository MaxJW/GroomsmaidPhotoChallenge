<script lang="ts">
    import { onDestroy, onMount } from 'svelte';
    import Challenges from './components/Challenges.svelte';
    import Gallery from './components/Gallery.svelte';
    import User from './components/User.svelte';
    import { Image, Trophy, Timer, Play, RotateCcw } from 'lucide-svelte';
    import { SvelteToast } from '@zerodevx/svelte-toast';
    import { db } from './firebase.js';
    import { doc, onSnapshot, setDoc } from 'firebase/firestore';

    //Currently set name
    let nameVal = '';
    let showGallery = false;

    $: isAdmin = nameVal.toLowerCase() === 'max_admin';

    // Timer state
    const TIMER_DURATION = 15 * 60 * 1000; // 15 minutes in milliseconds
    let timerEndTime: number | null = null;
    let timeRemaining = TIMER_DURATION;
    let timerInterval: ReturnType<typeof setInterval> | null = null;

    // Firestore document references
    const galleryModeDoc = doc(db, 'appSettings', 'galleryMode');
    const timerDoc = doc(db, 'appSettings', 'timer');

    // Subscribe to gallery mode changes from Firestore
    let unsubscribeGallery: (() => void) | null = null;
    let unsubscribeTimer: (() => void) | null = null;

    // Set up real-time listener for gallery mode
    unsubscribeGallery = onSnapshot(galleryModeDoc,
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

    // Set up real-time listener for timer
    unsubscribeTimer = onSnapshot(timerDoc,
        (docSnap) => {
            if (docSnap.exists()) {
                const data = docSnap.data();
                timerEndTime = data.endTime || null;
                if (timerEndTime) {
                    updateTimer();
                    startTimerInterval();
                } else {
                    stopTimerInterval();
                    timeRemaining = TIMER_DURATION;
                }
            } else {
                timerEndTime = null;
                stopTimerInterval();
                timeRemaining = TIMER_DURATION;
            }
        },
        (error) => {
            console.error('Error listening to timer:', error);
            timerEndTime = null;
            stopTimerInterval();
            timeRemaining = TIMER_DURATION;
        }
    );

    function updateTimer() {
        if (!timerEndTime) {
            timeRemaining = TIMER_DURATION;
            return;
        }

        const now = Date.now();
        timeRemaining = Math.max(0, timerEndTime - now);

        // Keep updating even when expired to show 00:00
        // Only stop if timer was reset (timerEndTime becomes null)
    }

    function startTimerInterval() {
        stopTimerInterval(); // Clear any existing interval
        timerInterval = setInterval(() => {
            updateTimer();
        }, 100); // Update every 100ms for smooth countdown
    }

    function stopTimerInterval() {
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
    }

    function formatTime(ms: number): string {
        const totalSeconds = Math.floor(ms / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

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

    async function startTimer() {
        if (!isAdmin) return;

        try {
            const endTime = Date.now() + TIMER_DURATION;
            await setDoc(timerDoc, { endTime: endTime });
            // Timer will be updated automatically by the onSnapshot listener
        } catch (error) {
            console.error('Error starting timer:', error);
            alert('Failed to start timer. Please try again.');
        }
    }

    async function resetTimer() {
        if (!isAdmin) return;

        try {
            await setDoc(timerDoc, { endTime: null });
            // Timer will be updated automatically by the onSnapshot listener
        } catch (error) {
            console.error('Error resetting timer:', error);
            alert('Failed to reset timer. Please try again.');
        }
    }

    onMount(() => {
        if (timerEndTime) {
            updateTimer();
            startTimerInterval();
        }
    });

    onDestroy(() => {
        if (unsubscribeGallery) {
            unsubscribeGallery();
        }
        if (unsubscribeTimer) {
            unsubscribeTimer();
        }
        stopTimerInterval();
    });
</script>

<User bind:nameVal />
{#if nameVal != ''}
    <!-- Timer Display (visible to all users) -->
    {#if timerEndTime !== null}
        <div class="timer-display" class:warning={timeRemaining < 60000 && timeRemaining > 0} class:critical={timeRemaining < 30000 && timeRemaining > 0} class:expired={timeRemaining <= 0}>
            <div class="timer-icon">
                <Timer size={24} />
            </div>
            <div class="timer-content">
                <span class="timer-label">Time Left</span>
                <span class="timer-value">
                    {timeRemaining > 0 ? formatTime(timeRemaining) : '00:00'}
                </span>
            </div>
            {#if timeRemaining <= 0}
                <span class="timer-emoji">🔔</span>
            {/if}
        </div>
    {/if}

    <!-- Admin Controls -->
    {#if isAdmin}
        <div class="admin-controls">
            <button
                class="admin-btn toggle-btn"
                class:gallery-mode={showGallery}
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
            
            {#if timerEndTime === null}
                <button class="admin-btn start-timer-btn" on:click={startTimer} title="Start 15 Minute Timer">
                    <Play size={18} />
                    <span>Start Timer</span>
                </button>
            {:else}
                <button class="admin-btn reset-timer-btn" on:click={resetTimer} title="Reset Timer">
                    <RotateCcw size={18} />
                    <span>Reset</span>
                </button>
            {/if}
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
    .timer-display {
        position: fixed;
        top: 80px;
        left: 16px;
        z-index: 200;
        
        display: flex;
        align-items: center;
        gap: 10px;
        
        padding: 12px 18px;
        background: linear-gradient(160deg, 
            rgba(255, 255, 255, 0.98) 0%, 
            rgba(255, 248, 240, 0.95) 100%);
        backdrop-filter: blur(12px);
        
        border: 4px solid var(--tree-green);
        border-radius: 20px;
        
        box-shadow: 
            0 8px 24px rgba(43, 122, 75, 0.2),
            0 4px 8px rgba(0, 0, 0, 0.1);
        
        pointer-events: none;
        transition: all 0.3s ease;
    }

    .timer-display.warning {
        border-color: var(--gold);
        background: linear-gradient(160deg, 
            rgba(255, 248, 220, 0.98) 0%, 
            rgba(255, 240, 200, 0.95) 100%);
        animation: pulse 1s ease-in-out infinite;
    }

    .timer-display.critical {
        border-color: var(--santa-red);
        background: linear-gradient(160deg, 
            rgba(255, 235, 235, 0.98) 0%, 
            rgba(255, 220, 220, 0.95) 100%);
        animation: shake 0.5s ease-in-out infinite;
    }

    .timer-display.expired {
        border-color: var(--santa-red-dark);
        background: linear-gradient(160deg, 
            rgba(255, 200, 200, 0.98) 0%, 
            rgba(255, 180, 180, 0.95) 100%);
        animation: shake 0.3s ease-in-out infinite;
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-3px); }
        75% { transform: translateX(3px); }
    }

    .timer-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background: linear-gradient(180deg, var(--tree-green-light) 0%, var(--tree-green) 100%);
        border-radius: 50%;
        border: 2px solid var(--snow-white);
    }

    .timer-icon :global(svg) {
        color: var(--snow-white);
    }

    .warning .timer-icon {
        background: linear-gradient(180deg, var(--gold-light) 0%, var(--gold) 100%);
    }

    .critical .timer-icon,
    .expired .timer-icon {
        background: linear-gradient(180deg, var(--santa-red-light) 0%, var(--santa-red) 100%);
    }

    .timer-content {
        display: flex;
        flex-direction: column;
    }

    .timer-label {
        font-size: 0.65rem;
        font-weight: 700;
        color: var(--tree-green-dark);
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .timer-value {
        font-weight: 700;
        font-size: 1.6rem;
        color: var(--tree-green-dark);
        font-variant-numeric: tabular-nums;
        letter-spacing: 2px;
        line-height: 1;
    }

    .warning .timer-value {
        color: var(--gold-dark);
    }

    .critical .timer-value,
    .expired .timer-value {
        color: var(--santa-red-dark);
    }

    .timer-emoji {
        font-size: 24px;
        animation: ring 0.5s ease-in-out infinite;
    }

    @keyframes ring {
        0%, 100% { transform: rotate(-10deg); }
        50% { transform: rotate(10deg); }
    }

    /* Admin Controls */
    .admin-controls {
        position: fixed;
        bottom: 20px;
        left: 20px;
        z-index: 100;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .admin-btn {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px;
        border-radius: 50px;
        font-weight: 700;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
        border: 3px solid var(--snow-white);
        margin: 0;
    }

    .admin-btn::before {
        display: none;
    }

    .toggle-btn {
        background: linear-gradient(180deg, var(--tree-green-light) 0%, var(--tree-green) 50%, var(--tree-green-dark) 100%);
        color: var(--snow-white);
        box-shadow: 0 6px 16px rgba(43, 122, 75, 0.3);
    }

    .toggle-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(43, 122, 75, 0.4);
    }

    .toggle-btn.gallery-mode {
        background: linear-gradient(180deg, var(--santa-red-light) 0%, var(--santa-red) 50%, var(--santa-red-dark) 100%);
        box-shadow: 0 6px 16px rgba(199, 58, 56, 0.3);
    }

    .toggle-btn.gallery-mode:hover {
        box-shadow: 0 8px 24px rgba(199, 58, 56, 0.4);
    }

    .start-timer-btn {
        background: linear-gradient(180deg, var(--gold-light) 0%, var(--gold) 50%, var(--gold-dark) 100%);
        color: var(--text-dark);
        box-shadow: 0 6px 16px rgba(255, 215, 0, 0.3);
    }

    .start-timer-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(255, 215, 0, 0.5);
    }

    .reset-timer-btn {
        background: linear-gradient(180deg, var(--gingerbread-light) 0%, var(--gingerbread-brown) 50%, var(--gingerbread-dark) 100%);
        color: var(--snow-white);
        box-shadow: 0 6px 16px rgba(139, 94, 60, 0.3);
    }

    .reset-timer-btn:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(139, 94, 60, 0.4);
    }

    @media (max-width: 480px) {
        .timer-display {
            top: 80px;
            left: 10px;
            padding: 10px 14px;
            gap: 8px;
            border-width: 3px;
            border-radius: 16px;
        }

        .timer-icon {
            width: 30px;
            height: 30px;
        }

        .timer-icon :global(svg) {
            width: 18px;
            height: 18px;
        }

        .timer-label {
            font-size: 0.55rem;
        }

        .timer-value {
            font-size: 1.3rem;
            letter-spacing: 1px;
        }

        .timer-emoji {
            font-size: 18px;
        }

        .admin-controls {
            bottom: 16px;
            left: 12px;
            gap: 8px;
        }

        .admin-btn {
            padding: 8px 12px;
            font-size: 0.8rem;
            border-width: 2px;
        }

        .admin-btn :global(svg) {
            width: 16px;
            height: 16px;
        }
    }

    @media (max-width: 375px) {
        .timer-display {
            top: 65px;
            left: 8px;
            padding: 8px 12px;
        }

        .timer-value {
            font-size: 1.2rem;
        }

        .admin-controls {
            bottom: 14px;
            left: 8px;
        }

        .admin-btn {
            padding: 6px 10px;
            font-size: 0.75rem;
        }
    }
</style>
