<script lang="ts">
	import { Search } from "lucide-svelte";
	import { Input } from "$lib/components/ui/input";

	interface Props {
		class?: string;
		placeholder?: string;
	}

	let {
		class: className,
		placeholder,
	}: Props = $props();
</script>

<div class={[
	"flex items-center gap-x-2 border-input bg-background ring-offset-background focus-within:ring-ring flex h-10 rounded-md border px-3 py-2 text-base focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 md:text-sm shadow-sm",
	className
]}>
	<Search size={16} />
	<Input
		{placeholder}
		class="ring-0 border-none h-auto p-0 outline-none focus-visible:ring-0 rounded-none"
	/>
</div>
