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

    let selectedFile = null;

    async function sendDiscordNotification() {
        const webhookURL =
            'https://discord.com/api/webhooks/1299761910199091360/EOkwoBXqGSZDM1f5PgM1zXhxcyMrDFPAnerH9rIbbsAyK8jGqmkE1sUglH-iFjvBQiNt';
        const message = {
            content:
                'Team ' +
                name.charAt(0).toUpperCase() +
                name.slice(1) +
                ' has completed all challenges!',
        };

        try {
            await fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(message),
            });
        } catch (error) {
            console.error('Error sending Discord notification:', error);
        }
    }

    async function sendPictureToDiscord() {
        const webhookURL =
            'https://discord.com/api/webhooks/1299761910199091360/EOkwoBXqGSZDM1f5PgM1zXhxcyMrDFPAnerH9rIbbsAyK8jGqmkE1sUglH-iFjvBQiNt';
        const message = {
            content:
                'Team ' + name.charAt(0).toUpperCase() + name.slice(1) + ' has sent a picture!',
        };

        const formData = new FormData();
        formData.append('payload_json', JSON.stringify(message));
        if (selectedFile) {
            formData.append('file', selectedFile);
        }

        try {
            await fetch(webhookURL, {
                method: 'POST',
                body: formData,
            });
        } catch (error) {
            console.error('Error sending picture to Discord:', error);
        }
    }

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
            selectRandomChallenge();
        }
        if (completedChallenges === challengeList.length) {
            sendDiscordNotification();
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
                        selectRandomChallenge();
                    });
                } else {
                    toast.push('🚨 Unable to complete challenge, try again or refresh!');
                }
            } catch {
                toast.push('🚨 Unable to complete challenge, try again or refresh!');
            }
        }
    }

    function handleFileChange(event) {
        selectedFile = event.target.files[0];
        sendPictureToDiscord();
    }

    function handleButtonClick() {
        document.getElementById('fileInput').click();
    }
</script>

<Total total={challengeList.length} completed={completedChallenges} />
<Leaderboard {challengeList} />

<div class="container">
    <div class="heading card-back" class:green={randomChallenge.completed.includes(name)}>
        {#if completedChallenges == challengeList.length}
            <h1 class="no-margins">🎉 All challenges completed! 🎉</h1>
            <h2>Submit your best picture from the game below:</h2>
            <input
                type="file"
                id="fileInput"
                accept="image/*"
                on:change={handleFileChange}
                style="display: none;"
            />
            <button on:click={handleButtonClick}><span>📷</span></button>
        {:else if randomChallenge && randomChallenge.name && randomChallenge.completed}
            <div class="challenge-block">
                <h2>Take a photo of...</h2>
                <h1 class="challenge">{randomChallenge.name}</h1>
                <h2>Completed by:</h2>
                <h3 class:completers={randomChallenge.completed.length > 0}>
                    {randomChallenge.completed.length > 0
                        ? randomChallenge.completed.join(', ')
                        : 'Not completed by anyone yet!'}
                </h3>
            </div>
            <div class="buttons">
                <button on:click={selectRandomChallenge}><span>🔃</span></button>
                <button on:click={completeChallenge}><span>✅</span></button>
            </div>
        {/if}
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
        line-clamp: 3;
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

    .no-margins {
        margin-top: 24px;
        margin-bottom: 24px;
    }
</style>
