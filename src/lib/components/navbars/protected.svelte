<script lang="ts">
	import { Bell, Search, ChevronDown } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import UserMenu from "$lib/components/user-menu.svelte";
</script>

<nav class="flex justify-center sticky top-0 p-4 h-[73px] bg-sidebar w-full border-b z-50">
	<div class="flex items-center justify-between w-full relative">
		<div class="flex items-center gap-x-2 z-10">
			<div class="flex items-center gap-x-2 border-input bg-background ring-offset-background focus-within:ring-ring flex h-10 w-96 rounded-md border px-3 py-2 text-base focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 md:text-sm shadow-sm">
				<Search size={16} />
				<Input
					placeholder="Search jobs, applications, or companies..."
					class="ring-0 border-none h-auto p-0 outline-none focus-visible:ring-0 rounded-none"
				/>
			</div>
			<Button variant="outline">
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
