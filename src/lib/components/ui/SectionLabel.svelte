<script lang="ts">
	interface Props {
		number: string;
		title: string;
		class?: string;
		numberColor?: string;
	}
	let { number, title, class: className = '', numberColor = 'text-[#c1440e]' }: Props = $props();
</script>

<div class="inline-flex items-center gap-2.5 {className}">
	<span class="font-mono text-xs font-medium {numberColor} tracking-widest select-none">{number}</span>
	<span class="w-5 h-px bg-stone-300"></span>
	<span class="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500 font-display">{title}</span>
</div>
