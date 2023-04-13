<script>
    export let gi1;
    export let gi2;
</script>

<div class="gi2-div" id="border-ray-div">
    <input type="text" class="ginput-1" placeholder={gi1} id="i" />
    <input type="text" class="ginput-1" placeholder={gi2} id="i" />
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

    .gi2-div {
        transition: transform 1s ease-in-out;
        width: 75%;
        height: 30%;
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

    ::placeholder {
        font-size: 4.8vw;
        color: var(--placeHC);
        opacity: 0.7;
    }

    @media only screen and (min-width: 1000px) {
        /* For desktop: */
        .gi2-div {
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
