<script>
	import WarpSpeed from '$lib/WarpSpeed.svelte';
	import { base } from '$app/paths';

	export const prerender = true;

	let { children } = $props();
</script>

<svelte:head>
	<title>Lupin Hsu</title>
	<link rel="icon" href="{base}/icon/sabericon.png" />
</svelte:head>

<WarpSpeed numLines={130} speed={0.008} lineWidth={3} />

{@render children?.()}
