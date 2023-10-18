<script lang="ts">
    import { name } from '../stores.js';

    //Currently set name
    export let nameVal;
    name.subscribe((value) => {
        nameVal = value;
    });

    let newName = '';

    function setName() {
        newName = newName.toLowerCase();
        name.set(newName);
    }

    function resetName() {
        newName = '';
        setName();
    }
</script>

{#if nameVal != ''}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p id="logged-in" class="card-back">{nameVal} <span on:click={resetName}>Change</span></p>
{:else}
    <div id="name-container">
        <div class="card-back">
            <label for="name-input"
                >What's your team name? <span class="subtitle"><br />Make sure it's unique!</span
                ></label
            >
            <input
                id="name-input"
                bind:value={newName}
                placeholder="Type your team name here!"
                type="text"
            />
            <button on:click={setName}>Let's go!</button>
        </div>
    </div>
{/if}

<style>
    #name-container {
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
        text-align: center;
    }

    #name-container label {
        font-size: 2.5rem;
        font-weight: 500;
        margin-top: 5px;
        margin-bottom: 10px;
        cursor: default;
    }

    #name-input {
        margin: 0 auto;
        margin-top: 10px;
        width: 500px;
        max-width: 70vw;
        font-weight: bold;
    }

    .subtitle {
        font-size: 1.5rem;
    }

    button {
        border-radius: 24px;
        margin-top: 1rem;
    }

    #logged-in {
        position: absolute;
        top: 0;
        left: 0;
        margin-top: 40px;
        margin-left: 45px;
        z-index: 99;

        max-width: 50vw;

        font-weight: bold;
        font-size: 1rem;
        text-transform: capitalize;

        margin: 20px;
        padding: 20px;
    }

    #logged-in span {
        cursor: pointer;
        font-weight: normal;
        text-decoration: underline;
        font-size: 1rem;
    }
</style>
