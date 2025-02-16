<script lang="ts">
	import { Bell, ChevronDown } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import UserMenu from "$lib/components/user-menu.svelte";
	import SearchBar from "$lib/components/search-bar.svelte";
</script>

<nav class="flex justify-center sticky top-0 p-4 h-[73px] bg-sidebar w-full border-b z-50">
	<div class="flex items-center justify-between w-full relative">
		<div class="flex items-center gap-x-2 z-10">
			<SearchBar class="w-96" placeholder="Search jobs, applications, or companies..." />
			<Button variant="outline" class="shadow-sm">
				Quick Actions
				<ChevronDown />
			</Button>
		</div>
		<div class="flex items-center gap-x-2 z-10">
			<Button
				variant="ghost"
				size="icon"
				class="rounded-lg"
			>
				<Bell />
				<span class="sr-only">Toggle user menu</span>
			</Button>
			<UserMenu />
		</div>
	</div>
</nav>
