<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href?: string;
		variant?: 'primary' | 'outline' | 'ghost' | 'subtle';
		size?: 'xs' | 'sm' | 'md' | 'lg';
		type?: 'button' | 'submit' | 'reset';
		target?: string;
		rel?: string;
		disabled?: boolean;
		class?: string;
		onclick?: (e: MouseEvent) => void;
		children?: Snippet;
	}

	let {
		href,
		variant = 'primary',
		size = 'md',
		type = 'button',
		target,
		rel,
		disabled = false,
		class: className = '',
		onclick,
		children
	}: Props = $props();

	const v: Record<string, string> = {
		primary: 'bg-stone-900 text-white hover:bg-[#c1440e] shadow-sm hover:shadow-md',
		outline: 'bg-transparent text-stone-800 border border-stone-300 hover:border-stone-900 hover:bg-stone-50',
		ghost:   'bg-transparent text-stone-600 hover:text-stone-900 hover:bg-stone-100',
		subtle:  'bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900',
	};

	const s: Record<string, string> = {
		xs: 'px-2.5 py-1   text-xs  font-medium  tracking-wide',
		sm: 'px-3.5 py-1.5 text-sm  font-medium  tracking-wide',
		md: 'px-5   py-2.5 text-sm  font-semibold tracking-wide',
		lg: 'px-6   py-3   text-base font-semibold tracking-wide',
	};

	const base = 'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c1440e] disabled:opacity-40 disabled:pointer-events-none whitespace-nowrap font-display';
</script>

{#if href}
	<a
		{href} {target} {onclick}
		rel={target === '_blank' ? 'noopener noreferrer' : rel}
		class="{base} {v[variant]} {s[size]} {className}"
	>
		{#if children}{@render children()}{/if}
	</a>
{:else}
	<button
		{type} {disabled} {onclick}
		class="{base} {v[variant]} {s[size]} {className}"
	>
		{#if children}{@render children()}{/if}
	</button>
{/if}
