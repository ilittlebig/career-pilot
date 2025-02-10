<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar";
	import ProtectedNavbar from "$lib/components/navbars/protected.svelte";
	import DashboardSidebar from "$lib/components/dashboard-sidebar.svelte";
	let { children } = $props();
</script>

<Sidebar.Provider>
	<DashboardSidebar />
	<div class="flex flex-col items-center min-h-screen w-full">
		<ProtectedNavbar />
		{@render children()}
	</div>
</Sidebar.Provider>
