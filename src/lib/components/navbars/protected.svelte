<script lang="ts">
	import QuickActions from "$lib/components/dashboard/sections/quick-actions.svelte";
	import UserMenu from "$lib/components/user-menu.svelte";
	import SearchBar from "$lib/components/search-bar.svelte";
</script>

<nav class="flex justify-center sticky top-0 p-4 h-[73px] bg-sidebar w-full z-50 border-b">
	<div class="flex items-center justify-between w-full relative">
		<div class="flex items-center gap-x-4 z-10">
			<SearchBar class="w-96" placeholder="Search jobs, applications, or companies..." />
			<div class="flex items-center gap-x-2">
				<QuickActions />
			</div>
		</div>
		<div class="flex items-center gap-x-2 z-10">
			<UserMenu />
		</div>
	</div>
</nav>
