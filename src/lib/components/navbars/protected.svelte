<script lang="ts">
	import UserMenu from "$lib/components/user-menu.svelte";
</script>

<nav class="flex justify-center sticky top-0 p-4 h-[73px] bg-sidebar w-full border-b z-50">
	<div class="flex items-center justify-end w-full relative">
		<div class="flex items-center gap-x-2 z-10">
			<UserMenu />
		</div>
	</div>
</nav>
