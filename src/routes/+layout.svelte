<script lang="ts">
	import "../app.css";
	import SignOutDialog from "$lib/components/dialogs/auth/sign-out-dialog.svelte";
	let { children } = $props();
</script>

<SignOutDialog />

{@render children()}
