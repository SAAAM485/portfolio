<script>
	import WarpSpeed from '$lib/WarpSpeed.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/icon/sabericon.png" />
</svelte:head>

<WarpSpeed numLines={130} speed={0.008} lineWidth={3} />

{@render children?.()}
