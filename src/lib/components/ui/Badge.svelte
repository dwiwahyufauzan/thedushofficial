<script lang="ts">
	interface Props {
		text: string;
		variant?: 'default' | 'accent' | 'sold-out' | 'warning' | 'success';
		class?: string;
	}
	let { text, variant = 'default', class: className = '' }: Props = $props();

	const styles: Record<string, string> = {
		default:    'bg-stone-100 text-stone-600 border-stone-200',
		accent:     'bg-[#fff4f0] text-[#c1440e] border-[#f5cfc2]',
		'sold-out': 'bg-stone-100 text-stone-400 border-stone-200 line-through',
		warning:    'bg-amber-50 text-amber-700 border-amber-200',
		success:    'bg-green-50 text-green-700 border-green-200',
	};
</script>

<span class="inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-semibold font-display tracking-wide uppercase border rounded-md {styles[variant] ?? styles.default} {className}">
	{text}
</span>
