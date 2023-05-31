<script lang="ts">
    import Challenges from './components/Challenges.svelte';
    import { SvelteToast } from '@zerodevx/svelte-toast';
    import User from './components/User.svelte';

    //Currently set name
    let nameVal = '';
</script>

<User bind:nameVal />
{#if nameVal != ''}
    <Challenges name={nameVal} />
{/if}

<SvelteToast />

<style>
</style>
