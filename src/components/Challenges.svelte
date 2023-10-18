<script lang="ts">
    import { db } from '../firebase.js';
    import { collection, doc, updateDoc, getDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
    import { toast } from '@zerodevx/svelte-toast';
    import Leaderboard from './Leaderboard.svelte';
    import Total from './Total.svelte';

    export let name;

    let dbName = 'halloween';

    let randomChallenge = { id: '', name: 'Loading...', completed: [] };
    let challengeList = [];
    let completedChallenges = 0;

    let recentlySelected = []; // Array to keep track of recently selected challenges
    let recentThreshold = 6; // Number of previous selections to consider as "recent"

    const collRef = collection(db, dbName);
    const unsub = onSnapshot(collRef, (coll) => {
        completedChallenges = 0;
        challengeList = [];
        coll.forEach((doc) => {
            challengeList.push({
                id: doc.id,
                name: doc.data().name,
                completed: doc.data().completed,
            });
            if (randomChallenge && randomChallenge.id && randomChallenge.id == doc.id) {
                randomChallenge = {
                    id: doc.id,
                    name: doc.data().name,
                    completed: doc.data().completed,
                };
            }
            if (doc.data().completed.includes(name)) {
                completedChallenges += 1;
            }
        });
        if (!randomChallenge || randomChallenge.name == 'Loading...') {
            selectRandomString();
        }
        if (recentThreshold >= challengeList.length) {
            recentThreshold = challengeList.length - 1;
        }
    });

    function selectRandomString() {
        let oldChallenge = randomChallenge;
        while (
            randomChallenge.id == oldChallenge.id ||
            recentlySelected.includes(randomChallenge.id)
        ) {
            randomChallenge = challengeList[Math.floor(Math.random() * challengeList.length)];
        }
        recentlySelected.push(randomChallenge.id);
        if (recentlySelected.length > recentThreshold) {
            recentlySelected.shift(); // Remove the oldest item from the array if it exceeds the threshold
        }
    }

    async function completeChallenge() {
        if (confirm('Mark this challenge as completed?')) {
            if (randomChallenge.completed.includes(name)) {
                toast.push('🚧 Challenge already completed!');
                return;
            }
            try {
                const challengedoc = doc(db, dbName, randomChallenge.id);
                const docSnap = await getDoc(challengedoc);

                if (docSnap.exists()) {
                    await updateDoc(challengedoc, {
                        completed: arrayUnion(name),
                    }).then(() => {
                        toast.push('✅ Challenge completed!');
                        selectRandomString();
                    });
                } else {
                    toast.push('🚨 Unable to complete challenge, try again or refresh!');
                }
            } catch {
                toast.push('🚨 Unable to complete challenge, try again or refresh!');
            }
        }
    }
</script>

<Total total={challengeList.length} completed={completedChallenges} />
<Leaderboard {challengeList} />

<div class="container">
    <div class="heading card-back" class:green={randomChallenge.completed.includes(name)}>
        {#if randomChallenge && randomChallenge.name && randomChallenge.completed}
            <div class="challenge-block">
                <h2>Take a photo...</h2>
                <h1 class="challenge">{randomChallenge.name}</h1>
                <h2>Completed by:</h2>
                <h3 class:completers={randomChallenge.completed.length > 0}>
                    {randomChallenge.completed.length > 0
                        ? randomChallenge.completed.join(', ')
                        : 'Not completed by anyone yet!'}
                </h3>
            </div>
        {/if}
        <div class="buttons">
            <button on:click={selectRandomString}><span>🔃</span></button>
            <button on:click={completeChallenge}><span>✅</span></button>
        </div>
    </div>
</div>

<style>
    h1 {
        min-height: 56px;
    }

    .green {
        background-color: rgb(191, 255, 191) !important;
    }

    .container {
        position: fixed;
        display: flex;
        flex-direction: column;
        max-width: fit-content;
        justify-content: center;
        margin: 0 auto;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        min-width: 80%;
        max-width: 95%;
    }

    .heading {
        text-align: center;
        pointer-events: all;
    }

    .completers {
        text-transform: capitalize;
        max-height: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }

    .challenge-block {
        margin-bottom: 2rem;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        max-width: 100%;
        align-items: center;
        justify-content: space-evenly;
    }

    button {
        border-radius: 50%;
        aspect-ratio: 1 / 1;
        min-width: 50px;
    }
</style>
