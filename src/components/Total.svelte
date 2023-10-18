<script lang="ts">
    export let total: number;
    export let completed: number;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<p id="complete-box" class="card-back">{completed}/{total}</p>

<style>
    #complete-box {
        position: absolute;
        top: 0;
        right: 0;
        margin-top: 40px;
        margin-right: 45px;
        z-index: 99;

        max-width: 40vw;

        font-weight: bold;
        font-size: 1.5rem;
        text-transform: capitalize;

        margin: 20px;
        padding: 20px;
    }
</style>
