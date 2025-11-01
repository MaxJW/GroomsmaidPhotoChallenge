<script lang="ts">
    import { name } from '../stores.js';
    import { Ghost, Users } from 'lucide-svelte';

    //Currently set name
    export let nameVal;
    name.subscribe((value) => {
        nameVal = value;
    });

    let newName = '';

    function setName() {
        newName = newName.toLowerCase().trim();
        if (newName) {
            name.set(newName);
        }
    }

    function resetName() {
        newName = '';
        name.set('');
    }

    function handleKeydown(e: KeyboardEvent) {
        if (e.key === 'Enter') {
            setName();
        }
    }
</script>

{#if nameVal != ''}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div id="logged-in" class="card-back">
        <div class="user-info">
            <Users size={20} color="var(--dark-purple)" />
            <span class="username">{nameVal}</span>
        </div>
        <button class="change-btn" on:click={resetName}>Change</button>
    </div>
{:else}
    <div id="name-container">
        <div class="card-back">
            <div class="icon-wrapper">
                <Ghost size={48} color="var(--orange-primary)" />
            </div>
            <label for="name-input">
                What's your team name?
                <span class="subtitle">Make sure it's unique!</span>
            </label>
            <input
                id="name-input"
                bind:value={newName}
                on:keydown={handleKeydown}
                placeholder="Type your team name here..."
                type="text"
                autocomplete="off"
            />
            <button on:click={setName} disabled={!newName.trim()}>
                Let's go!
            </button>
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
        align-items: center;
        margin: 0 auto;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        text-align: center;
        padding: 16px;
    }

    #name-container .card-back {
        max-width: 90%;
        width: 100%;
        max-width: 450px;
    }

    .icon-wrapper {
        display: flex;
        justify-content: center;
        margin-bottom: 16px;
        animation: float 3s ease-in-out infinite;
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }

    #name-container label {
        font-size: 2rem;
        font-weight: 500;
        margin: 16px 0;
        cursor: default;
        display: block;
        color: var(--text-dark);
        line-height: 1.3;
    }

    .subtitle {
        display: block;
        font-size: 1.1rem;
        font-weight: 400;
        color: var(--dark-purple);
        opacity: 0.8;
        margin-top: 8px;
        font-style: italic;
    }

    #name-input {
        margin: 20px auto 0;
        width: 100%;
        max-width: 100%;
        font-weight: 400;
        margin-bottom: 8px;
    }

    #name-container button {
        width: 100%;
        margin-top: 16px;
    }

    #logged-in {
        position: fixed;
        top: 0;
        left: 0;
        margin: 16px;
        z-index: 99;
        max-width: calc(100% - 32px);
        padding: 12px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        min-width: 0;
    }

    .user-info {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
        min-width: 0;
    }

    .username {
        font-weight: 500;
        font-size: 1.1rem;
        text-transform: capitalize;
        color: var(--text-dark);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .change-btn {
        flex-shrink: 0;
        margin-top: 0;
        padding: 8px 16px;
        font-size: 0.9rem;
        min-width: auto;
        background: linear-gradient(135deg, var(--purple-light), var(--dark-purple));
        color: var(--white);
        border: none;
    }

    .change-btn:hover {
        background: linear-gradient(135deg, var(--dark-purple), var(--purple-light));
    }

    @media (max-width: 480px) {
        #name-container {
            padding: 12px;
        }

        #name-container .card-back {
            padding: 24px 20px;
        }

        #name-container label {
            font-size: 1.6rem;
            margin: 12px 0;
        }

        .subtitle {
            font-size: 0.95rem;
        }

        #logged-in {
            margin: 10px;
            padding: 10px 14px;
            max-width: calc(100% - 20px);
        }

        .username {
            font-size: 0.95rem;
        }

        .change-btn {
            padding: 6px 12px;
            font-size: 0.8rem;
        }

        .icon-wrapper {
            margin-bottom: 10px;
        }

        .icon-wrapper :global(svg) {
            width: 36px;
            height: 36px;
        }
    }

    @media (max-width: 375px) {
        #name-container label {
            font-size: 1.5rem;
        }

        #logged-in {
            margin: 8px;
            padding: 8px 12px;
            max-width: calc(100% - 16px);
        }
    }
</style>
