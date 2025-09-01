<script>
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
	import inView from '../lib/inView.js';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	onMount(() => {
		if (navigator.pdfViewerEnabled === false) {
			const downloadLink = document.querySelector('a[href="/resume.pdf"]');
			if (downloadLink) {
				downloadLink.setAttribute('download', 'resume.pdf');
			}
		}
	});
</script>

<Fullpage>
	<FullpageSection title="About Me">
		<h1 class="lightsaber" use:inView>Lupin Hsu</h1>
		<p>
			Self-motivated learner with hands-on programming experience developed through online study and
			independent projects.<br />Strong interest in software development and continuous learning,
			currently based in Taipei, Taiwan.
		</p>
	</FullpageSection>

	<FullpageSection title="Skills">
		<h1 class="lightsaber" use:inView>Skills</h1>
		<p class="skills">
			<strong>Frontend</strong> <span class="tech">HTML</span> <span class="tech">CSS</span>
			<span class="tech">JavaScript</span> <span class="tech">TypeScript</span>
			<span class="tech">React</span> <span class="tech">Svelte</span>
			<span class="tech">Next.js</span><br />
			<strong>Backend</strong> <span class="tech">Node.js</span> <span class="tech">Express</span>
			<span class="tech">PostgreSQL</span> <span class="tech">Prisma</span>
			<span class="tech">Restful APIs</span><br />
			<strong>Strengths</strong> Quick learner, adaptable to new technologies and frameworks
		</p>
	</FullpageSection>

	<FullpageSection title="Projects">
		<FullpageSlide title="Zen Flow">
			<h3 use:inView>Projects</h3>
			<h1>
				<a href="https://zen-flow0.vercel.app/" target="_blank" class="lightsaber" use:inView>
					Zen Flow
				</a>
			</h1>
			<div class="techContainer">
				<span class="tech">Next.js</span>
				<span class="tech">PostgreSQL</span>
				<span class="tech">Prisma</span>
				<span class="tech">Jest</span>
			</div>
			<p class="description">
				A full-stack social platform built with Next.js—featuring guest mode and a time-sorted,
				algorithm-free feed for a clean, distraction-free experience.
			</p>
		</FullpageSlide>

		<FullpageSlide title="IASAM">
			<h3 use:inView>Projects</h3>
			<h1>
				<a
					href="https://messagingapp0730.netlify.app/"
					target="_blank"
					class="lightsaber"
					use:inView>IASAM</a
				>
			</h1>
			<div class="techContainer">
				<span class="tech">React</span>
				<span class="tech">TypeScript</span>
				<span class="tech">CSS Module</span>
				<span class="tech">Node.js</span>
				<span class="tech">Express</span>
				<span class="tech">PostgreSQL</span>
				<span class="tech">Prisma</span>
				<span class="tech">Jest</span>
			</div>
			<p class="description">
				A full-stack messaging app for group chats and image sharing—stay connected asynchronously.
			</p>
		</FullpageSlide>

		<FullpageSlide title="Album Inventory">
			<h3 use:inView>Projects</h3>
			<h1>
				<a href="https://album-inventory-application.onrender.com/" class="lightsaber" use:inView
					>Album Inventory</a
				>
			</h1>
			<div class="techContainer">
				<span class="tech">React</span>
				<span class="tech">JavaScript</span>
				<span class="tech">Node.js</span>
				<span class="tech">Express</span>
				<span class="tech">EJS</span>
				<span class="tech">PostgreSQL</span>
			</div>
			<p class="description">
				An Album inventory app with full-stack architecture and admin controls.
			</p>
		</FullpageSlide>

		<FullpageSlide title="Battleship">
			<h3 use:inView>Projects</h3>
			<h1>
				<a href="https://saaam485.github.io/Battleship/" class="lightsaber" use:inView>Battleship</a
				>
			</h1>
			<div class="techContainer">
				<span class="tech">JavaScript</span>
				<span class="tech">CSS</span>
				<span class="tech">Webpack</span>
			</div>
			<p class="description">
				A React-powered static site where you can challenge a clever AI or play with a friend.
			</p>
		</FullpageSlide>

		<FullpageSlide title="Calculator">
			<h3 use:inView>Projects</h3>
			<h1>
				<a href="https://saaam485.github.io/Calculator/" class="lightsaber" use:inView>Calculator</a
				>
			</h1>
			<div class="techContainer">
				<span class="tech">JavaScript</span>
				<span class="tech">CSS</span>
			</div>
			<p class="description">A simple calculator made with vanilla JS as a learning project.</p>
		</FullpageSlide>
	</FullpageSection>

	<FullpageSection title="Contact Me">
		<h1 class="lightsaber" use:inView>CONTACT ME</h1>
		<div class="contact-container">
			<a href="mailto:loopings1357@gmail.com" class="contact-link">
				<svg
					width="32"
					height="32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					><path
						d="M22 4H2v16h20V4zM4 18V6h16v12H4zM8 8H6v2h2v2h2v2h4v-2h2v-2h2V8h-2v2h-2v2h-4v-2H8V8z"
						fill="currentColor"
					/></svg
				>
				<span class="contact" use:inView>loopings1357@gmail.com</span>
			</a>
			<a
				href="https://github.com/SAAAM485"
				target="_blank"
				rel="noopener noreferrer"
				class="contact-link"
			>
				<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
					><path
						fill="currentColor"
						d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"
					/></svg
				>
				<span class="contact" use:inView>SAAAM485</span>
			</a>
			<a href="{base}/resume.pdf" target="_blank" rel="noopener noreferrer" class="contact-link">
				<svg
					width="32"
					height="32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					><path
						d="M5 3H3v18h18V3H5zm14 2v14H5V5h14zm-2 2H7v2h10V7zM7 11h10v2H7v-2zm7 4H7v2h7v-2z"
						fill="currentColor"
					/></svg
				>
				<span class="contact" use:inView>Download CV</span>
			</a>
		</div>
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

	:global(body) {
		cursor: url('/cursor/smallsaber.png'), auto;
	}
	:global(body:active) {
		cursor: url('/cursor/activesmallsaber.png'), auto;
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

	:global(ul.svelte-fp-section-indicator > li > button > i:hover),
	:global(ul.svelte-fp-slide-indicator > li > button > i:hover) {
		background-color: #ffe81f;
		height: 80%;
		width: 80%;
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
			font-size 0.3s,
			background-color 0.3s,
			padding 0.3s,
			border-radius 0.3s;
		pointer-events: none;
		color: white;
		font-family: 'SFDistantGalaxyOutline', sans-serif;
		font-weight: 800;
		font-size: 2.5rem;
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

	:global(ul.svelte-fp-section-indicator > li > button:hover),
	:global(ul.svelte-fp-slide-indicator > li > button:hover) {
		cursor: url('/cursor/hoversmallsaber.png'), auto;
	}
	:global(ul.svelte-fp-section-indicator > li > button:hover)::before,
	:global(ul.svelte-fp-slide-indicator > li > button:hover)::before {
		opacity: 1;
		font-size: 1.2rem;
		background-color: rgba(255, 255, 255, 0.1);
		padding: 0.3rem 0.6rem;
		border-radius: 0.5rem;
	}

	:global(div.svelte-fp-flexbox-center) {
		flex-direction: column;
	}

	:global(.lightsaber.in-view::after) {
		content: '';
		position: absolute;
		top: 50%;
		left: 0;
		width: 0;
		height: 20%;
		background-color: #ffe81f;
		mix-blend-mode: screen;
		border-radius: 2px;
		box-shadow:
			0 0 10px #ffe81f,
			0 0 20px #ffe81f,
			0 0 30px #ffe81f;
		animation: lightsaber-sweep 1.2s forwards;
		transform: translateY(-50%);
		z-index: 1;
	}
	@keyframes lightsaber-sweep {
		0% {
			left: 0;
			width: 0;
			box-shadow:
				0 0 0 #ffe81f,
				0 0 0 #ffe81f,
				0 0 0 #ffe81f;
		}
		50% {
			left: 0;
			width: 100%;
			box-shadow:
				0 0 10px #ffe81f,
				0 0 20px #ffe81f,
				0 0 30px #ffe81f;
		}
		100% {
			left: 100%;
			width: 0;
			box-shadow:
				0 0 0 #ffe81f,
				0 0 0 #ffe81f,
				0 0 0 #ffe81f;
		}
	}

	strong {
		font-weight: 1000;
	}

	.lightsaber:hover,
	h3:hover,
	a:hover,
	.contact:hover {
		background: linear-gradient(45deg, #ffe81f 25%, #ffffff 50%, #ffe81f 75%, #ffffff 75%);
		background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
		background-size: 500%, auto;
		animation: textShine 1s forwards ease-out;
		cursor: url('/cursor/hoversmallsaber.png'), auto;
	}
	@keyframes textShine {
		0% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	@keyframes textShineInView {
		0% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}

	:global(.shine) {
		background: linear-gradient(
			45deg,
			#ffffff 20%,
			#ffe81f 40%,
			#ffffff 60%,
			#ffe81f 80%,
			#ffffff 80%
		);
		background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
		background-size: 500%, auto;
		animation: textShineInView 1s forwards ease-out;
	}

	h1 {
		font-family: 'SFDistantGalaxy', sans-serif;
		font-weight: 200;
		font-size: 3rem;
		text-align: center;
		position: relative;
		display: inline-block;
		overflow: hidden;
	}
	h3 {
		font-family: 'SFDistantGalaxyOutline', sans-serif;
		font-weight: 800;
		font-size: 1.5rem;
	}
	p {
		font-family: 'PressStart2P', cursive;
		font-size: 0.8rem;
		line-height: 1.6rem;
		text-align: center;
	}
	p.skills {
		text-align: start;
		line-height: 2.5rem;
		margin: 0 auto;
	}
	a {
		color: white;
		text-decoration: none;
		display: inline-block;
		position: relative;
	}
	.techContainer {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: 1rem 0;
		gap: 0.5rem;
	}
	.tech {
		background-color: rgba(255, 255, 255, 0.1);
		padding: 0.3rem 0.6rem;
		border-radius: 0.5rem;
		font-family: 'PressStart2P', cursive;
		font-size: 0.6rem;
		text-wrap: nowrap;
	}
	.tech:hover {
		background-color: rgba(255, 255, 255, 0.3);
		color: #ffe81f;
		cursor: url('/cursor/hoversmallsaber.png'), auto;
	}
	.contact-container {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		align-items: flex-start;
		margin: 0 auto;
	}
	.contact-link {
		display: flex;
		align-items: center;
		gap: 0.8rem;
	}
	.contact-link:hover svg path {
		fill: #ffe81f;
	}
	.contact {
		font-family: 'PressStart2P', cursive;
		font-size: 0.8rem;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 3rem;
		}
		p {
			width: 80%;
			font-size: 0.7rem;
			line-height: 1.4rem;
		}
	}
	@media (max-width: 480px) {
		h1 {
			font-size: 2rem;
		}
		p {
			width: 80%;
			font-size: 0.6rem;
			line-height: 1.2rem;
		}
		.techContainer {
			width: 80%;
			text-wrap: nowrap;
		}
		h3 {
			font-size: 1rem;
		}
		span.tech {
			font-size: 0.5rem;
		}
		.contact {
			font-size: 0.6rem;
		}
		.contact-link {
			gap: 0.6rem;
		}
		p.description {
			font-size: 0.6rem;
			line-height: 1.2rem;
		}
	}
</style>
