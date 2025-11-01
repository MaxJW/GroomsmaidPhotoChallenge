<script lang="ts">
    import { onDestroy } from 'svelte';
    import { db } from '../firebase.js';
    import { collection, doc, updateDoc, getDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
    import confetti from 'canvas-confetti';
    import Leaderboard from './Leaderboard.svelte';
    import Total from './Total.svelte';
    import { RefreshCw, CheckCircle2, AlertCircle, PartyPopper, Construction, Trophy } from 'lucide-svelte';

    export let name;

    let dbName = 'halloween';

    let randomChallenge = { id: '', name: 'Loading...', completed: [] };
    let challengeList = [];
    let completedChallenges = 0;

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
                };
                challengeList.push(challengeData);

                if (randomChallenge && randomChallenge.id && randomChallenge.id == doc.id) {
                    randomChallenge = challengeData;
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

    async function completeChallenge() {
        if (confirm('Mark this challenge as completed?')) {
            if (!randomChallenge || !randomChallenge.id) {
                alert('No challenge selected!');
                return;
            }

            // Check locally first to prevent unnecessary API calls
            if (randomChallenge.completed.includes(name)) {
                alert('Challenge already completed!');
                return;
            }

            try {
                const challengedoc = doc(db, dbName, randomChallenge.id);
                const docSnap = await getDoc(challengedoc);

                if (!docSnap.exists()) {
                    alert('Challenge not found in database. Please refresh and try again!');
                    return;
                }

                // Double-check the document hasn't been updated since we last checked
                const currentCompleted = docSnap.data().completed || [];
                if (currentCompleted.includes(name)) {
                    alert('Challenge already completed by you!');
                    // Update local state to reflect reality
                    randomChallenge = {
                        id: randomChallenge.id,
                        name: randomChallenge.name,
                        completed: currentCompleted,
                    };
                    return;
                }

                // Use arrayUnion which is atomic - prevents duplicates even with race conditions
                await updateDoc(challengedoc, {
                    completed: arrayUnion(name),
                });

                // Trigger confetti animation
                triggerConfetti();
                selectRandomChallenge();
            } catch (error) {
                console.error('Error completing challenge:', error);
                // Provide more specific error messages
                if (error.code === 'permission-denied') {
                    alert('Permission denied. Please check your access!');
                } else if (error.code === 'unavailable' || error.message?.includes('network')) {
                    alert('Network error. Please check your connection and try again!');
                } else {
                    alert('Unable to complete challenge. Please try again or refresh!');
                }
            }
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
                    <PartyPopper size={64} color="var(--orange-primary)" />
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
                <button class="action-btn complete-btn" on:click={completeChallenge} title="Complete Challenge">
                    <CheckCircle2 size={24} />
                </button>
            </div>
        {/if}
    </div>
</div>

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
        color: var(--orange-dark);
        font-size: 2.2rem;
        margin: 0;
        font-weight: 600;
    }

    .completion-celebration h2 {
        color: var(--dark-purple);
        font-weight: 400;
        font-size: 1.3rem;
        margin: 0;
    }

    .challenge-block {
        margin-bottom: 24px;
    }

    .prompt {
        font-weight: 400;
        font-size: 1.4rem;
        color: var(--dark-purple);
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
        color: var(--dark-purple);
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
        font-size: 1.1rem;
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
        border: 1px solid var(--orange-light);
    }

    .completers.has-completers {
        background: rgba(184, 230, 184, 0.3);
        border-color: var(--green-success);
    }

    .completer-list {
        text-transform: capitalize;
        font-weight: 500;
        color: var(--text-dark);
        text-align: center;
        line-height: 1.5;
        max-height: 120px;
        overflow-y: auto;
        word-break: break-word;
    }

    .no-completers {
        color: var(--dark-purple);
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
        border: 2px solid var(--orange-dark);
    }

    .refresh-btn {
        background: linear-gradient(135deg, var(--purple-light), var(--dark-purple));
        color: var(--white);
    }

    .refresh-btn:hover {
        background: linear-gradient(135deg, var(--dark-purple), var(--purple-light));
        transform: translateY(-2px) rotate(180deg);
    }

    .complete-btn {
        background: linear-gradient(135deg, var(--green-success), #90D490);
        color: var(--dark-purple);
        border-color: #90D490;
    }

    .complete-btn:hover {
        background: linear-gradient(135deg, #90D490, var(--green-success));
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
            font-size: 1.1rem;
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
            font-size: 0.95rem;
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
