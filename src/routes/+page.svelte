<script>
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
</script>

<Fullpage>
	<FullpageSection title="Admin-Dashboard">
		<FullpageSlide title="Admin-Dashboard">
			<h1>Admin-Dashboard</h1>
			<p>A project to manage administrative tasks.</p>
		</FullpageSlide>
		<FullpageSlide title="Repo Example">
			<h2>Repo Example</h2>
			<p>Here you can show an image or a demo of the project.</p>
		</FullpageSlide>
	</FullpageSection>
	<FullpageSection title="Album-Inventory-Application">
		<FullpageSlide title="Album-Inventory-Application">
			<h1>Album-Inventory-Application</h1>
			<p>An application to manage an album inventory.</p>
		</FullpageSlide>
		<FullpageSlide title="Repo Example">
			<h2>Repo Example</h2>
			<p>Here you can show an image or a demo of the project.</p>
		</FullpageSlide>
	</FullpageSection>
	<FullpageSection title="Battleship">
		<FullpageSlide title="Battleship">
			<h1>Battleship</h1>
			<p>The classic game of Battleship.</p>
		</FullpageSlide>
		<FullpageSlide title="Repo Example">
			<h2>Repo Example</h2>
			<p>Here you can show an image or a demo of the project.</p>
		</FullpageSlide>
	</FullpageSection>
	<FullpageSection title="Blog-API">
		<FullpageSlide title="Blog-API">
			<h1>Blog-API</h1>
			<p>A RESTful API for a blog platform.</p>
		</FullpageSlide>
		<FullpageSlide title="Repo Example">
			<h2>Repo Example</h2>
			<p>Here you can show an image or a demo of the project.</p>
		</FullpageSlide>
	</FullpageSection>
	<FullpageSection title="Contact Me">
		<FullpageSlide title="Contact Me">
			<h1>Contact Me</h1>
			<p>Your contact information here.</p>
		</FullpageSlide>
	</FullpageSection>
</Fullpage>

<style>
	:global(html, body) {
		height: 100vh;
		width: 100%;
		overflow: visible;
	}

	:global(.svelte-fp-section-indicator),
	:global(.svelte-fp-slide-indicator) {
		overflow: visible !important;
	}

	:global(ul.svelte-fp-section-indicator > li > button),
	:global(ul.svelte-fp-slide-indicator > li > button) {
		position: relative;
	}

	:global(ul.svelte-fp-section-indicator > li > button > i),
	:global(ul.svelte-fp-slide-indicator > li > button > i) {
		background-color: red;
	}

	:global(ul.svelte-fp-section-indicator > li > button)::before,
	:global(ul.svelte-fp-slide-indicator > li > button)::before {
		content: attr(title);
		position: absolute;
		opacity: 0;
		transition:
			opacity 0.3s,
			font-size 0.3s;
		pointer-events: none;
		color: black;
		font-size: 0.5rem;
		white-space: nowrap;
	}

	:global(ul.svelte-fp-section-indicator > li > button)::before {
		right: 100%;
		margin-right: 0.2rem;
	}

	:global(ul.svelte-fp-slide-indicator > li > button)::before {
		bottom: 100%;
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: 0.2rem;
	}

	:global(ul.svelte-fp-section-indicator > li > button:hover)::before,
	:global(ul.svelte-fp-slide-indicator > li > button:hover)::before {
		opacity: 1;
		font-size: 0.8rem;
	}
</style>
