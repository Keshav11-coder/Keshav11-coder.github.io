<script>
    export let gi;
    export let activator = false;
    export let activatorValue = 0;

    function changeActivator(newV){
        if(activator == true){
            activatorValue = newV
        }
    }
</script>

<div class="gi-div" id="border-ray-div">
    <input on:click={() => changeActivator(1)} type="text" class="ginput-1 {!activatorValue ? '' : 'ginput-2'}" placeholder={gi} id="i" />
</div>

<style>
    @media (prefers-color-scheme: light) {
        :root {
            --ginColor: transparent;
            --borderSize: 3px;
            --SdPurpleAlt: #5533ebde;
            --placeHC: black;
        }
    }

    @media (prefers-color-scheme: dark) {
        :root {
            --ginColor: transparent;
            --borderSize: 3px;
            --SdPurpleAlt: #5533ebde;
            --placeHC: white;
        }
    }

    .gi-div {
        transition: transform 1s ease-in-out;
        width: 75%;
        height: 15%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        align-self: center;
        border-radius: 6px;
    }

    .ginput-1 {
        transition: ease-in-out 0.4s;
        border-style: none;
        outline: none;
        width: 100%;
        height: 100%;
        font-family: "Trebuchet MS", sans-serif;
        font-size: 5vw;
        padding-left: 5%;
        padding-right: 5%;
        border-radius: 8px;

        margin-top: 2%;

        background-color: var(--ginColor);

        border: var(--borderSize) solid var(--SdPurpleAlt);

        color: var(--placeHC);
    }

    .ginput-2 {
        border-radius: 0px;

        border-style:none;
        outline: none;

        border-bottom: var(--borderSize) solid var(--SdPurpleAlt);
    }

    @media only screen and (min-width: 1000px) {
        /* For desktop: */
        .gi-div {
            transition: transform 1s ease-in-out;
            width: 30%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            align-self: center;
            border-radius: 6px;
        }

        .ginput-1 {
            transition: ease-in-out 0.4s;
            border-style: none;
            outline: none;
            width: 100%;
            height: 100%;
            font-family: "Trebuchet MS", sans-serif;
            font-size: .8vw;
            padding-left: 5%;
            padding-right: 5%;
            border-radius: 8px;

            margin-top: 2%;

            background-color: var(--ginColor);

            border: var(--borderSize) solid var(--SdPurpleAlt);

            color: var(--placeHC);
        }

        ::placeholder {
            font-size: 0.8vw;
            color: var(--placeHC);
            opacity: 0.7;
            display: flex
        }
    }
</style>
