<script>
	import { Fullpage, FullpageSection, FullpageSlide } from 'svelte-fullpage';
	import inView from '../lib/inView.js';
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	onMount(() => {
		const link = document.getElementById('resume-link');
		if (!link) return;
		link.addEventListener('click', (e) => {
			e.preventDefault();

			const url = link.getAttribute('href');
			if (!url) return;
			const newWindow = window.open(url, '_blank');

			if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
				const a = document.createElement('a');
				a.href = url;
				a.download = 'lupin_hsu_resume.pdf';
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			}
		});
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
		<div class="skillcontainer">
			<p class="skills">
				<strong>Frontend</strong> <span class="tech">HTML</span> <span class="tech">CSS</span>
				<span class="tech">Tailwind CSS</span>
				<span class="tech">JavaScript</span> <span class="tech">TypeScript</span>
				<span class="tech">React</span> <span class="tech">Svelte</span>
				<span class="tech">Next.js</span> <span class="tech">Webpack</span>
				<span class="tech">Vite</span>
			</p>
			<p class="skills">
				<strong>Backend</strong> <span class="tech">Node.js</span> <span class="tech">Express</span>
				<span class="tech">PostgreSQL</span> <span class="tech">Prisma</span>
				<span class="tech">JWT</span> <span class="tech">Jest</span>
				<span class="tech">Restful APIs</span>
			</p>
			<p class="skills">
				<strong>Strengths</strong> Quick learner, adaptable to new technologies and frameworks.
			</p>
		</div>
		<p class="power">
			This site is powered by <span class="tech">Svelte</span> and <span class="tech">Vite</span>.
		</p>
		<a
			class="link"
			href="https://github.com/SAAAM485/portfolio"
			target="_blank"
			rel="noopener noreferrer">View on GitHub</a
		>
	</FullpageSection>

	<FullpageSection title="Projects">
		<FullpageSlide title="Interior Design Web">
			<h3 use:inView>Projects</h3>
			<h1 class="demo">
				<a
					href="https://din-interior-design.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
					class="lightsaber"
					use:inView
				>
					Interior Design Web
				</a>
			</h1>
			<div class="techContainer">
				<span class="tech">Svelte</span>
				<span class="tech">Tailwind CSS</span>
				<span class="tech">Netlify Form</span>
				<span class="tech">Google Sheets</span>
			</div>
			<p class="description">
				A sleek, responsive SvelteKit site with light/dark mode toggle and a backend-less contact
				form powered by Netlify Forms—submissions are auto-synced to Google Sheets for effortless
				management. <br />*Site under construction — awaiting client project data.*
			</p>
			<a
				class="link"
				href="https://github.com/SAAAM485/Interior-Design-Web"
				target="_blank"
				rel="noopener noreferrer">View on GitHub</a
			>
		</FullpageSlide>
		<FullpageSlide title="Zen Flow">
			<h3 use:inView>Projects</h3>
			<h1 class="demo">
				<a
					href="https://zen-flow0.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
					class="lightsaber"
					use:inView
				>
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
			<a
				class="link"
				href="https://github.com/SAAAM485/zen-flow"
				target="_blank"
				rel="noopener noreferrer">View on GitHub</a
			>
		</FullpageSlide>

		<FullpageSlide title="IASAM">
			<h3 use:inView>Projects</h3>
			<h1 class="demo">
				<a
					href="https://messagingapp0730.netlify.app/"
					target="_blank"
					rel="noopener noreferrer"
					class="lightsaber"
					use:inView>IASAM</a
				>
			</h1>
			<div class="techContainer">
				<span class="tech">React</span>
				<span class="tech">TypeScript</span>
				<span class="tech">CSS Module</span>
				<span class="tech">Vite</span>
				<span class="tech">Node.js</span>
				<span class="tech">Express</span>
				<span class="tech">PostgreSQL</span>
				<span class="tech">Prisma</span>
				<span class="tech">Jest</span>
			</div>
			<p class="description">
				A full-stack messaging app for group chats and image sharing on desktop and laptop
				platforms, stay connected asynchronously.
			</p>
			<a
				class="link"
				href="https://github.com/SAAAM485/Messaging-App"
				target="_blank"
				rel="noopener noreferrer">View on GitHub</a
			>
		</FullpageSlide>

		<FullpageSlide title="Album Inventory">
			<h3 use:inView>Projects</h3>
			<h1 class="demo">
				<a
					href="https://album-inventory-application.onrender.com/"
					target="_blank"
					rel="noopener noreferrer"
					class="lightsaber"
					use:inView>Album Inventory</a
				>
			</h1>
			<div class="techContainer">
				<span class="tech">JavaScript</span>
				<span class="tech">Node.js</span>
				<span class="tech">Express</span>
				<span class="tech">EJS</span>
				<span class="tech">PostgreSQL</span>
			</div>
			<p class="description">
				An Album inventory app with full-stack architecture and admin controls.
			</p>
			<a
				class="link"
				href="https://github.com/SAAAM485/Album-Inventory-Application"
				target="_blank"
				rel="noopener noreferrer">View on GitHub</a
			>
		</FullpageSlide>

		<FullpageSlide title="Battleship">
			<h3 use:inView>Projects</h3>
			<h1 class="demo">
				<a
					href="https://saaam485.github.io/Battleship/"
					target="_blank"
					rel="noopener noreferrer"
					class="lightsaber"
					use:inView>Battleship</a
				>
			</h1>
			<div class="techContainer">
				<span class="tech">JavaScript</span>
				<span class="tech">CSS</span>
				<span class="tech">Webpack</span>
				<span class="tech">Jest</span>
			</div>
			<p class="description">
				A React-powered static site on desktop and laptop platforms where you can challenge a clever
				AI or play with a friend.
			</p>
			<a
				class="link"
				href="https://github.com/SAAAM485/Battleship"
				target="_blank"
				rel="noopener noreferrer">View on GitHub</a
			>
		</FullpageSlide>

		<FullpageSlide title="Calculator">
			<h3 use:inView>Projects</h3>
			<h1 class="demo">
				<a
					href="https://saaam485.github.io/Calculator/"
					target="_blank"
					rel="noopener noreferrer"
					class="lightsaber"
					use:inView>Calculator</a
				>
			</h1>
			<div class="techContainer">
				<span class="tech">JavaScript</span>
				<span class="tech">CSS</span>
			</div>
			<p class="description">A simple calculator made with vanilla JS as a learning project.</p>
			<a
				class="link"
				href="https://github.com/SAAAM485/Calculator"
				target="_blank"
				rel="noopener noreferrer">View on GitHub</a
			>
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
			<a
				href="{base}/lupin_hsu_resume.pdf"
				target="_blank"
				rel="noopener noreferrer"
				class="contact-link"
			>
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
				<span class="contact" use:inView>Download Resume</span>
			</a>
		</div>
	</FullpageSection>
</Fullpage>

<style>
	/* Font Faces */
	@font-face {
		font-family: 'SFDistantGalaxy';
		src: url('/fonts/SFDistantGalaxy.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'SFDistantGalaxyOutline';
		src: url('/fonts/SFDistantGalaxyAltOutline.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'PressStart2P';
		src: url('/fonts/PressStart2P-Regular.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	/* Animations */
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
	@keyframes textShine {
		0% {
			background-position: 100% 50%;
		}
		100% {
			background-position: 0% 50%;
		}
	}
	@keyframes bounce {
		0%,
		100% {
			transform: translateY(0);
			color: white;
		}
		50% {
			transform: translateY(-0.4rem);
			color: #ffe81f;
		}
	}
	@keyframes underline-grow {
		0% {
			transform: scaleX(0);
		}
		100% {
			transform: scaleX(1);
		}
	}

	/* Global Styles (for 3rd Party Library & JS Classes) */
	:global(body) {
		cursor:
			url('/cursor/smallsaber.png') 12 12,
			crosshair;
	}
	:global(body:active) {
		cursor:
			url('/cursor/activesmallsaber.png') 12 12,
			crosshair;
	}
	:global(ul.svelte-fp-section-indicator > li > button:hover),
	:global(ul.svelte-fp-slide-indicator > li > button:hover) {
		cursor:
			url('/cursor/hoversmallsaber.png') 12 12,
			crosshair;
	}
	:global(ul.svelte-fp-section-indicator > li > button:hover:active),
	:global(ul.svelte-fp-slide-indicator > li > button:hover:active) {
		cursor:
			url('/cursor/hoveractivesmallsaber.png') 12 12,
			crosshair;
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
		-webkit-background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
		background-size: 500%, auto;
		animation: textShine 1s ease-out;
		animation-iteration-count: 2;
		animation-direction: alternate;
	}
	:global(h1:has(a.lightsaber.in-view)::before) {
		content: '';
		position: absolute;
		left: 0;
		bottom: -0.2rem;
		width: 100%;
		height: 0.1rem;
		background: linear-gradient(90deg, #ffe81f, #ffffff, #ffe81f);
		transform: scaleX(0);
		transform-origin: left;
		animation: underline-grow 2s forwards; /* 自動播放動畫 */
	}

	/* Component Styles */
	strong {
		font-weight: 1000;
		background: linear-gradient(45deg, #ffe81f 25%, #ffffff 50%, #ffe81f 75%, #ffffff 75%);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
		background-size: 500%, auto;
		animation: textShine 4s forwards ease-out;
		animation-direction: alternate;
		animation-iteration-count: infinite;
	}

	h1 {
		font-family: 'SFDistantGalaxy', sans-serif;
		font-weight: 200;
		font-size: 3rem;
		text-align: center;
		position: relative;
		display: inline-block;
		overflow: visible;
		max-width: 85%;
	}
	h1.demo::after {
		content: 'live demo';
		line-height: 0.6rem;
		font-family: 'PressStart2P', cursive;
		position: absolute;
		bottom: 110%;
		left: 98%;
		font-size: 0.5rem;
		animation: bounce 1.3s ease-in-out infinite;
	}

	h3 {
		font-family: 'SFDistantGalaxyOutline', sans-serif;
		font-weight: 800;
		font-size: 1.5rem;
	}

	div.skillcontainer {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		max-width: 85%;
	}
	p {
		font-family: 'PressStart2P', cursive;
		font-size: 0.8rem;
		line-height: 1.6rem;
		text-align: center;
		max-width: 85%;
	}
	p.skills {
		text-wrap: wrap;
		text-align: left;
		max-width: 100%;
		line-height: 1.4rem;
	}
	p.power {
		justify-self: flex-end;
		font-size: 0.5rem;
	}

	a {
		color: white;
		display: inline-block;
		position: relative;
		text-decoration: none;
	}
	a.link {
		font-family: 'PressStart2P', cursive;
		font-size: 0.5rem;
		text-decoration: underline;
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
		cursor:
			url('/cursor/hoversmallsaber.png') 12 12,
			auto;
	}
	.tech:hover:active {
		cursor:
			url('/cursor/hoveractivesmallsaber.png') 12 12,
			auto;
	}

	.lightsaber:hover,
	h3:hover,
	a:hover,
	.contact:hover {
		background: linear-gradient(45deg, #ffe81f 25%, #ffffff 50%, #ffe81f 75%, #ffffff 75%);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
		background-size: 500%, auto;
		animation: textShine 1s forwards ease-out;
		cursor:
			url('/cursor/hoversmallsaber.png') 12 12,
			auto;
	}
	.lightsaber:hover:active,
	h3:hover:active,
	a:hover:active,
	.contact:hover:active {
		cursor:
			url('/cursor/hoveractivesmallsaber.png') 12 12,
			auto;
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
		background: linear-gradient(45deg, #ffe81f 25%, #ffffff 50%, #ffe81f 75%, #ffffff 75%);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		-webkit-text-fill-color: transparent;
		background-size: 500%, auto;
		animation: textShine 4s ease-out;
		animation-direction: alternate;
		animation-iteration-count: infinite;
	}

	/* Responsive Styles */
	@media (max-width: 768px) {
		p {
			width: 80%;
			font-size: 0.7rem;
			line-height: 1.4rem;
		}
		p.power {
			font-size: 0.4rem;
		}
		a.link {
			font-size: 0.4rem;
		}
		div.skillcontainer {
			align-items: center;
		}
	}
	@media (max-width: 480px) {
		h1 {
			font-size: 1.5rem;
		}
		h3 {
			font-size: 0.8rem;
		}
		p {
			width: 80%;
			font-size: 0.45rem;
			line-height: 1.2rem;
		}
		h1.demo::after {
			font-size: 0.3rem;
		}
		p.power {
			font-size: 0.35rem;
		}
		a.link {
			font-size: 0.35rem;
		}
		.techContainer {
			width: 80%;
			text-wrap: nowrap;
		}
		div.skillcontainer {
			align-items: center;
		}
		span.tech {
			font-size: 0.4rem;
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

	@media (max-height: 500px) {
		h1 {
			font-size: 1.5rem;
			margin-bottom: 0.5rem;
		}
		h3 {
			font-size: 0.8rem;
			margin-bottom: 0;
		}
		p {
			width: 80%;
			font-size: 0.4rem;
			line-height: 1rem;
		}
		h1.demo::after {
			font-size: 0.3rem;
		}
		p.power {
			font-size: 0.35rem;
		}
		a.link {
			font-size: 0.35rem;
			z-index: 1;
		}
		.techContainer {
			width: 80%;
			text-wrap: nowrap;
			margin-bottom: 0.3rem;
		}
		div.skillcontainer {
			align-items: center;
		}
		span.tech {
			font-size: 0.4rem;
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
