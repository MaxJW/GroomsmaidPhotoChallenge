<script lang="ts">
    import { name } from '../stores.js';
    import { Gift, Sparkles } from 'lucide-svelte';

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
    <div id="logged-in">
        <div class="ribbon-hole"></div>
        <div class="tag-content">
            <span class="tag-label">Team</span>
            <span class="username">{nameVal}</span>
        </div>
        <button class="change-btn" on:click={resetName}>
            <span>Change</span>
        </button>
    </div>
{:else}
    <div id="name-container">
        <div class="welcome-card">
            <div class="icon-wrapper">
                <Gift size={56} color="var(--santa-red)" strokeWidth={2} />
            </div>
            
            <h1 class="welcome-title">
                Photo Challenge!
            </h1>
            
            <label for="name-input">
                What's your team name?
            </label>
            <p class="subtitle">Pick something fun & memorable!</p>
            
            <input
                id="name-input"
                bind:value={newName}
                on:keydown={handleKeydown}
                placeholder="e.g. The Elves 🧝"
                type="text"
                autocomplete="off"
            />
            
            <button on:click={setName} disabled={!newName.trim()}>
                <Sparkles size={20} />
                <span>Let's Go!</span>
            </button>
        </div>
    </div>
{/if}

<style>
    #name-container {
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
        z-index: 10;
        text-align: center;
        padding: 16px;
    }

    .welcome-card {
        background: linear-gradient(160deg, 
            rgba(255, 255, 255, 0.98) 0%, 
            rgba(255, 248, 240, 0.95) 30%,
            rgba(255, 255, 255, 0.98) 100%);
        backdrop-filter: blur(16px);
        padding: 40px 32px;
        border-radius: 32px;
        box-shadow: 
            0 20px 60px rgba(43, 122, 75, 0.25),
            0 8px 24px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.8);
        border: 5px solid var(--tree-green);
        max-width: 420px;
        width: 100%;
        position: relative;
        overflow: visible;
    }

    .icon-wrapper {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        margin-top: 20px;
    }

    .icon-wrapper :global(svg) {
        filter: drop-shadow(0 4px 8px rgba(199, 58, 56, 0.3));
        animation: jingle 2s ease-in-out infinite;
    }

    .welcome-title {
        font-size: 2.4rem;
        margin: 0 0 24px 0;
        background: linear-gradient(135deg, var(--santa-red) 0%, var(--santa-red-dark) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-shadow: none;
    }

    #name-container label {
        font-size: 1.8rem;
        font-weight: 700;
        margin: 16px 0 8px 0;
        cursor: default;
        display: block;
        color: var(--tree-green-dark);
        line-height: 1.3;
    }

    .subtitle {
        font-size: 1.1rem;
        font-weight: 400;
        color: var(--gingerbread-brown);
        margin: 0 0 20px 0;
        font-style: italic;
    }

    #name-input {
        margin: 0 auto;
        width: 100%;
        max-width: 100%;
        font-weight: 700;
        text-align: center;
    }

    .welcome-card button {
        width: 100%;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    /* Logged in - Gift Tag Style */
    #logged-in {
        position: fixed;
        top: 16px;
        left: 16px;
        z-index: 99;
        background: linear-gradient(145deg, var(--cream) 0%, var(--snow-white) 100%);
        border: 4px solid var(--tree-green);
        border-radius: 16px 16px 16px 16px;
        padding: 12px 16px 12px 40px;
        display: flex;
        align-items: center;
        gap: 12px;
        box-shadow: 
            0 8px 24px rgba(43, 122, 75, 0.2),
            0 4px 8px rgba(0, 0, 0, 0.1);
        max-width: calc(100% - 140px);
    }

    /* Ribbon hole decoration */
    .ribbon-hole {
        position: absolute;
        left: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 16px;
        height: 16px;
        background: var(--tree-green-dark);
        border-radius: 50%;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .ribbon-hole::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        background: var(--sky-blue);
        border-radius: 50%;
    }

    .tag-content {
        display: flex;
        flex-direction: column;
        min-width: 0;
        flex: 1;
    }

    .tag-label {
        font-size: 0.7rem;
        font-weight: 700;
        color: var(--tree-green-dark);
        text-transform: uppercase;
        letter-spacing: 1px;
    }

    .username {
        font-weight: 700;
        font-size: 1.1rem;
        text-transform: capitalize;
        color: var(--santa-red);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .change-btn {
        flex-shrink: 0;
        margin-top: 0;
        padding: 8px 14px;
        font-size: 0.85rem;
        min-width: auto;
        background: linear-gradient(180deg, var(--tree-green-light) 0%, var(--tree-green) 50%, var(--tree-green-dark) 100%);
        border: 2px solid var(--snow-white);
    }

    .change-btn::before {
        display: none;
    }

    .change-btn:hover {
        background: linear-gradient(180deg, var(--tree-green) 0%, var(--tree-green-dark) 100%);
    }

    @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-8px); }
    }

    @keyframes jingle {
        0%, 100% { transform: rotate(-5deg); }
        50% { transform: rotate(5deg); }
    }

    @media (max-width: 480px) {
        #name-container {
            padding: 12px;
        }

        .welcome-card {
            padding: 36px 24px;
            border-radius: 24px;
            border-width: 4px;
        }

        .welcome-title {
            font-size: 1.9rem;
        }

        #name-container label {
            font-size: 1.5rem;
            margin: 12px 0 6px;
        }

        .subtitle {
            font-size: 1rem;
            margin-bottom: 16px;
        }

        .icon-wrapper {
            margin-bottom: 16px;
            margin-top: 16px;
        }

        .icon-wrapper :global(svg) {
            width: 44px;
            height: 44px;
        }

        #logged-in {
            top: 10px;
            left: 10px;
            padding: 10px 12px 10px 36px;
            gap: 10px;
            border-width: 3px;
            max-width: calc(100% - 120px);
        }

        .ribbon-hole {
            left: 10px;
            width: 14px;
            height: 14px;
        }

        .ribbon-hole::after {
            width: 6px;
            height: 6px;
        }

        .username {
            font-size: 0.95rem;
        }

        .tag-label {
            font-size: 0.6rem;
        }

        .change-btn {
            padding: 6px 10px;
            font-size: 0.75rem;
        }
    }

    @media (max-width: 375px) {
        .welcome-title {
            font-size: 1.7rem;
        }

        #name-container label {
            font-size: 1.3rem;
        }

        #logged-in {
            top: 8px;
            left: 8px;
            padding: 8px 10px 8px 32px;
            max-width: calc(100% - 100px);
        }
    }
</style>
