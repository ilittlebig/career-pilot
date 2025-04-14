<script lang="ts">
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import * as Sidebar from "$lib/components/ui/sidebar";
	import ProtectedNavbar from "$lib/components/navbars/protected.svelte";
	import DashboardSidebar from "$lib/components/dashboard-sidebar.svelte";

	let { children } = $props();
</script>

<Sidebar.Provider>
	<DashboardSidebar />
	<div class="flex flex-col h-screen w-full">
		<ProtectedNavbar />
		<ScrollArea class="flex flex-col px-6 bg-muted/50 h-full">
			<div class="px-1 py-6">
				{@render children()}
			</div>
		</ScrollArea>
	</div>
</Sidebar.Provider>
