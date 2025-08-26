<script>
	import favicon from '$lib/assets/favicon.svg';
	import WarpSpeed from '$lib/WarpSpeed.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<WarpSpeed numLines={130} speed={0.008} lineWidth={3} />

{@render children?.()}
