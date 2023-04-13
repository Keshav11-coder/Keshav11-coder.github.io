<script>
	import Close from "./Close.svelte";
	import Hello from "./Hello.svelte";
	import Gi2Div from "./Gi2-div.svelte";
	import Gi1Div from "./Gi1-div.svelte";
	import Suggested from "./Suggested.svelte";
	import Sfi from "./Suggested-fillIn.svelte";
	let includeSkip = false;
	let index = 0;
	let activatorValue = 0;

	//keyboard accessibility

	function handleKeyDown(event) {
		if (event.key === "Enter" || event.key === " ") {
			index = 1;
		}
	}

	const deviceWidth = window.innerWidth;
</script>

<div class="document" id="doc">
	<Close Value={!activatorValue} bind:activatorValue />
	<Hello Value={activatorValue} wtext={"hello"} />
	<div class="container-1 {!activatorValue ? '' : 'container-2'}" id="c1">
		<div class="wrapper" id="wf">
			{#if index == 0}
				<div class="a" id="af">
					<Gi2Div gi1="first name" gi2="last name" />
					<Sfi Value={activatorValue} />
				</div>
			{:else if index == 1}
				<div class="a1" id="af">
					<Gi1Div gi="skills" activator={true} bind:activatorValue />
					{#if deviceWidth < 1000}
						<Suggested Value={activatorValue} />
					{:else if deviceWidth > 1000}
						<Sfi Value={activatorValue} />
					{/if}
				</div>
			{/if}
			{#if includeSkip == false}
				<div class="t-forw" id="tf">
					<div
						class="forw btn"
						on:click={() => (index = 1)}
						on:keydown={handleKeyDown}
					>
						{#if index == 0}
							<h3 class="bl">next</h3>
						{:else if index == 1}
							<h3 class="bl">finish</h3>
						{/if}
					</div>
				</div>
			{:else if includeSkip == true}
				<div class="t-forw2" id="tf">
					<div class="forw btn">
						<h3 class="bl">next</h3>
					</div>
					<div class="skip btn">
						<h3 class="ppl">skip</h3>
					</div>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	:root {
		--forwC: #5533ebde;
	}

	.btn {
		width: 98%;
		height: 60%;
		border-radius: 6px;
		user-select: none;
	}
	.t-forw {
		width: 75%;
		height: 18%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		align-self: center;
		position: relative;
	}

	.t-forw2 {
		width: 75%;
		height: 30%;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		flex-direction: column;
		align-self: center;
		z-index: 99;
	}
	.skip {
		display: flex;
		align-items: center;
		justify-content: center;
		justify-self: flex-end;
		margin-top: 3%;
	}

	.forw {
		border: 3px solid var(--forwC);
		display: flex;
		justify-content: center;
		align-items: center;
		justify-self: flex-end;
		margin-top: 3%;
		z-index: 3;
	}

	.document {
		background-color: transparent;
		width: 100%;
		height: 100%;
		position: absolute;
		z-index: 1;
	}

	.container-1 {
		width: 100%;
		height: 70%;
		display: flex;
		margin-top: 18%;
		flex-direction: column;
		position: relative;
		top: 0;
		z-index: 2;

		transition: ease-in-out 0.6s;
	}

	.container-2 {
		height: 70%;
		margin-top: 15%;

		transition: ease-in-out 0.6s;
	}

	.wrapper {
		height: 100%;
		width: 100%;
		display: flex;
		justify-content: flex-start;
		align-self: center;
		justify-self: center;
		flex-direction: column;
	}

	.a {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
		transition: ease 1s;
	}

	.a1 {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
		transition: ease 1s;
	}

	::placeholder {
		font-size: 4.8vw;
		color: var(--placeHC);
		opacity: 0.7;
	}

	.ppl {
		font-family: "Montserrat Alternates", sans-serif;
		font-size: 5.4vw;
		color: var(--skipC);
	}

	.bl {
		font-family: "Montserrat Alternates", sans-serif;
		font-size: 5.4vw;
		color: var(--forwC);
	}

	@media only screen and (min-width: 1000px) {
		/* For desktop: */
		.container-1 {
			width: 50%;
			margin-top: 5%;
			display: flex;
			align-self: center;
			height: 50%;
			justify-self: center;
		}

		.document {
			background-color: transparent;
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: 1;
			display: flex;
			align-items: flex-start;
			justify-content: flex-start;
			flex-direction: column;
		}

		.btn {
			width: 100%;
			height: 40%;
			border-radius: 6px;
			user-select: none;
		}
		.t-forw {
			width: 15%;
			height: 18%;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex-direction: column;
			position: relative;
		}

		.forw {
			border: 3px solid var(--forwC);
			display: flex;
			justify-content: center;
			align-items: center;
			justify-self: center;
			z-index: 3;
		}

		.bl {
			font-family: "Montserrat Alternates", sans-serif;
			font-size: 0.8vw;
			color: var(--forwC);
		}

		.a {
			width: 100%;
			height: 55%;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex-direction: column;
			transition: ease 1s;
		}

		.a1 {
			width: 100%;
			height: 45%;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex-direction: column;
			transition: ease 1s;
		}
	}
</style>
