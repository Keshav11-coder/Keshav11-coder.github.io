<script>
    export let wtext = "hello";
    export let Value;
</script>

<div class="hello {!Value ? '' : 'hello-da'}">
    <h3 class="--hello" id="ht">{wtext}</h3>
</div>

<style>
    @keyframes fade-in-out {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }

    @media (prefers-color-scheme: light) {
        :root {
            --htextColor: black;
        }
    }
    @media (prefers-color-scheme: dark) {
        :root {
            --htextColor: rgb(255, 255, 255);
        }
    }

    .hello {
        width: 100%;
        height: 20%;
        display: flex;
        align-self: center;
        justify-self: center;
        align-items: center;
        justify-content: center;
        color: var(--htextColor);
        position: relative;
        top: 0;
        left: 0;
        z-index: 2;

        transition: ease-in-out 0.4s;
    }

    .--hello {
        font-family: "Montserrat Alternates", sans-serif;
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 70px;
        font-size: 20vw;

        animation: fade-in-out ease-in-out 1s;
    }

    .hello-da {
        height: 1%;
        opacity: 0;
    }

    @media only screen and (min-width: 1000px) {
        /* For desktop: */

        .--hello {
            font-size: 8vw;
        }
    }
</style>
