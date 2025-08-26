<script>
	import { onMount } from 'svelte';

	// Props for customization
	export let numLines = 800;
	export let speed = 0.03;
	export let lineWidth = 1.5;

	/** @type {HTMLCanvasElement} */
	let canvas;

	/**
	 * @typedef {{ x: number; y: number; z: number; pz: number }} Star
	 */

	/** @type {Star[]} */
	let stars = [];

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		/** @type {number} */
		let animationFrameId;

		function setup() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			stars = [];
			for (let i = 0; i < numLines; i++) {
				stars.push({
					x: (Math.random() - 0.5) * 2,
					y: (Math.random() - 0.5) * 2,
					z: Math.random(),
					pz: Math.random() // previous z
				});
			}
		}

		function animate() {
			const centerX = canvas.width / 2;
			const centerY = canvas.height / 2;
			if (!ctx) return;

			ctx.fillStyle = 'rgba(0, 0, 0, 0.2)'; // Use a semi-transparent background for a trailing effect
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.strokeStyle = 'rgb(237,256,253)';
			ctx.lineWidth = lineWidth;

			for (const star of stars) {
				star.z -= speed;

				if (star.z <= 0) {
					star.x = (Math.random() - 0.5) * 2;
					star.y = (Math.random() - 0.5) * 2;
					star.z = 1;
					star.pz = 1;
				}

				// Current position
				const k = 135.0 / star.z;
				const x = star.x * k + centerX;
				const y = star.y * k + centerY;

				// Previous position
				const pk = 135.0 / star.pz;
				const px = star.x * pk + centerX;
				const py = star.y * pk + centerY;

				// Draw the line
				ctx.beginPath();
				ctx.moveTo(px, py);
				ctx.lineTo(x, y);
				ctx.stroke();

				// Update previous position for the next frame
				star.pz = star.z;
			}

			animationFrameId = requestAnimationFrame(animate);
		}

		function handleResize() {
			cancelAnimationFrame(animationFrameId);
			setup();
			animate();
		}

		window.addEventListener('resize', handleResize);

		setup();
		animate();

		return () => {
			window.removeEventListener('resize', handleResize);
			cancelAnimationFrame(animationFrameId);
		};
	});
</script>

<canvas bind:this={canvas}></canvas>

<style>
	canvas {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		z-index: -1; /* Ensure it's in the background */
		display: block;
	}
</style>
