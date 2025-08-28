<script>
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
</script>

<Fullpage>
	<FullpageSection title="About Me">
		<h1>Lupin Hsu</h1>
		<p>
			Self-motivated learner with hands-on programming experience developed through online study and
			independent projects.<br />Strong interest in software development and continuous learning.
		</p>
	</FullpageSection>

	<FullpageSection title="Skills">
		<h1>Skills</h1>
		<p class="skills">
			<strong>Frontend:</strong> HTML, CSS, JavaScript, TypeScript, React, Svelte, Next.js<br />
			<strong>Backend:</strong> Node.js, Express, PostgreSQL, Prisma ORM, RESTful APIs<br />
			<strong>Strengths:</strong> Quick learner, adaptable to new technologies and frameworks
		</p>
	</FullpageSection>

	<FullpageSection title="Projects">
		<FullpageSlide title="Zen Flow">
			<h3>Projects</h3>
			<h1><a href="https://zen-flow0.vercel.app/" target="_blank">Zen Flow</a></h1>
			<p>A project to manage administrative tasks.</p>
		</FullpageSlide>

		<FullpageSlide title="IASAM">
			<h3>Projects</h3>
			<h1><a href="https://messagingapp0730.netlify.app/" target="_blank">IASAM</a></h1>
			<p>A project to manage administrative tasks.</p>
		</FullpageSlide>

		<FullpageSlide title="Album Inventory">
			<h3>Projects</h3>
			<h1>
				<a href="https://album-inventory-application.onrender.com/" target="_blank"
					>Album Inventory</a
				>
			</h1>
			<p>A project to manage administrative tasks.</p>
		</FullpageSlide>

		<FullpageSlide title="Battleship">
			<h3>Projects</h3>
			<h1><a href="https://saaam485.github.io/Battleship/" target="_blank">Battleship</a></h1>
			<p>A project to manage administrative tasks.</p>
		</FullpageSlide>

		<FullpageSlide title="Calculator">
			<h3>Projects</h3>
			<h1><a href="https://saaam485.github.io/Calculator/" target="_blank">Calculator</a></h1>
			<p>A project to manage administrative tasks.</p>
		</FullpageSlide>
	</FullpageSection>

	<FullpageSection title="Contact Me">
		<h1>CONTACT ME</h1>
		<p>Your contact information here.</p>
	</FullpageSection>
</Fullpage>

<style>
	@font-face {
		font-family: 'SFDistantGalaxy';
		src: url('/fonts/SFDistantGalaxy.ttf');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'SFDistantGalaxyOutline';
		src: url('/fonts/SFDistantGalaxyAltOutline.ttf');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'PressStart2P';
		src: url('/fonts/PressStart2P-Regular.ttf');
		font-weight: normal;
		font-style: normal;
	}

	:global(html, body) {
		height: 100vh;
		width: 100%;
		overflow: visible;
		background-color: transparent;
		color: white;
	}

	:global(.svelte-fp-section-indicator),
	:global(.svelte-fp-slide-indicator) {
		overflow: visible !important;
	}

	:global(ul.svelte-fp-section-indicator > li > button),
	:global(ul.svelte-fp-slide-indicator > li > button) {
		position: relative;
	}

	:global(ul.svelte-fp-section-indicator > li > button),
	:global(ul.svelte-fp-slide-indicator > li > button) {
		height: 0.6rem;
		width: 0.6rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 5px;
		background: transparent;
	}

	:global(ul.svelte-fp-section-indicator > li > button > i),
	:global(ul.svelte-fp-slide-indicator > li > button > i) {
		background-color: white;
		height: 40%;
		width: 40%;
		transition:
			height 0.3s,
			width 0.3s;
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
		color: white;
		font-family: 'SFDistantGalaxyOutline', sans-serif;
		font-weight: 800;
		font-size: 0.5rem;
		white-space: nowrap;
	}

	:global(ul.svelte-fp-section-indicator > li > button)::before {
		right: 120%;
		margin-right: 0.2rem;
	}

	:global(ul.svelte-fp-slide-indicator > li > button)::before {
		bottom: 280%;
		left: 50%;
		transform: translateX(-50%);
		margin-bottom: 0.2rem;
	}

	:global(ul.svelte-fp-section-indicator > li > button:hover)::before,
	:global(ul.svelte-fp-slide-indicator > li > button:hover)::before {
		opacity: 1;
		font-size: 0.8rem;
	}

	:global(div.svelte-fp-flexbox-center) {
		flex-direction: column;
	}
	h1 {
		font-family: 'SFDistantGalaxy', sans-serif;
		font-weight: 200;
		font-size: 3rem;
		text-align: center;
	}
	h3 {
		font-family: 'SFDistantGalaxyOutline', sans-serif;
		font-weight: 800;
		font-size: 1.5rem;
	}
	p {
		width: 80%;
		font-family: 'PressStart2P', cursive;
		font-size: 0.8rem;
		line-height: 1.6rem;
		text-align: center;
	}
	p.skills {
		width: 55%;
		text-align: start;
		line-height: 2rem;
	}
	a {
		color: white;
		text-decoration: none;
	}
</style>
