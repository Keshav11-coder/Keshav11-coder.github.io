<script>
    export let Value;
    export let activatorValue = 0;

    //keyboard accessibility

    function handleKeyDown(event) {
        if (event.key === "Enter" || event.key === " ") {
            activatorValue = 0;
        }
    }
</script>

<i
    class="fa-solid fa-xmark fa-2x {!Value ? '' : 'closed'}"
    on:click={() => (activatorValue = 0)}
    on:keydown={handleKeyDown}
/>

<style>
    .fa-xmark {
        text-align: center;
        text-decoration: none;
        transition: ease-in-out 0.4s;
        position: absolute;
        top: 0;
        left: 0;
        margin: 3%;
        color: rgb(255, 0, 0);
        opacity: 1;
    }

    .closed {
        opacity: 0;
    }
</style>
