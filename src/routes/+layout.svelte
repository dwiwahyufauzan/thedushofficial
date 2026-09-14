<script lang="ts">
	import './layout.css';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<div class="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-[#c1440e] selection:text-white">
	<Navbar />
	<main class="flex-grow">
		{#if children}
			{@render children()}
		{/if}
	</main>
	<Footer />
</div>
