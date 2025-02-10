<script lang="ts">
	import type { Snippet } from "svelte";
	import UnprotectedNavbar from "$lib/components/navbars/unprotected.svelte";
	import Footer from "$lib/components/footer.svelte";

	interface Props {
		children: Snippet;
		data: {
			authenticated: boolean;
		};
	}

	let {
		children,
		data
	}: Props = $props();
</script>

<div class="flex flex-col items-center min-h-screen">
	<UnprotectedNavbar authenticated={data.authenticated} />
	{@render children()}
	<Footer />
</div>
