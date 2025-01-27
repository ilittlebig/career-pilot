<script lang="ts">
	let { children } = $props();
</script>

<div class="flex items-center justify-center h-[calc(100vh-73px)] w-full relative">
	{@render children()}
</div>
