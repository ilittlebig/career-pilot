<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar";
	import ProtectedNavbar from "$lib/components/navbars/protected.svelte";
	import DashboardSidebar from "$lib/components/dashboard-sidebar.svelte";
	let { children } = $props();
</script>

<Sidebar.Provider>
	<DashboardSidebar />
	<div class="flex flex-col h-screen w-full">
		<ProtectedNavbar />
		<div class="flex flex-col p-6 overflow-scroll">
			{@render children()}
		</div>
	</div>
</Sidebar.Provider>
