<script lang="ts">
    import Challenges from './components/Challenges.svelte';
    import { SvelteToast } from '@zerodevx/svelte-toast';
    import User from './components/User.svelte';

    //Currently set name
    let nameVal = '';

    //Populate firestore
    import { db } from './firebase.js';
    import { collection, addDoc } from 'firebase/firestore';
    const halloweenList = [
        'The person with the best costume',
        'Your team with the person with the best costume',
        'The person with the scariest costume',
        'Your team with the scariest costume',
        'The person with the funniest costume',
        'Your team with the funniest costume',
        'A pumpkin',
        'Your team reenacting a film scene',
        'Halloween decorations',
        'Something orange',
        'A cat',
        'Sweets',
        'Your team with one or both of the hosts',
        'A selfie',
        'Pretending to trick or treat',
        'The best makeup',
        'A photo with someone you didn’t come with',
        'A hug',
        'In the lounge',
        'In the kitchen',
        'Outside',
        'Upstairs',
        'Your team with a pumpkin',
        'Your team with the venom',
        'A photo posing as your costume',
        'Bobbing for apples',
        'Playing the piano',
        'Drinking one of the cocktails',
        'Eating from the charspookerie',
        'Your team with a ghost',
        'Your team with a spooky backdrop',
        'Another team',
        'A close up of costume details',
        'Best nails',
        'A shadow',
        'A silhouette',
        'Tarot cards',
        'Your team with part of someone else’s costume',
        'Something spooky',
    ];
</script>

<User bind:nameVal />
{#if nameVal != ''}
    <Challenges name={nameVal} />
{/if}

<SvelteToast />

<style>
</style>
