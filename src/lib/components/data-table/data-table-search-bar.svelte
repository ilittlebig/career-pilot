<script lang="ts">
	import SearchBar from "$lib/components/search-bar.svelte";

	interface Props {
		placeholder: string;
	}
	let { placeholder }: Props = $props();
</script>

<SearchBar
	class="w-[500px]"
	{placeholder}
/>
