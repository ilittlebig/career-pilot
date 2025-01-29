<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import UserMenu from "$lib/components/user-menu.svelte";
	import NavigationRoute from "$lib/components/navigation-route.svelte";

	interface Props {
		authenticated: boolean;
	}
	let { authenticated }: Props = $props();
</script>

<nav class="flex justify-center sticky top-0 p-4 h-[73px] bg-white w-full border-b z-50">
	<div class="flex items-center justify-between w-full max-w-6xl relative">
		<a href="/" class="flex items-center gap-x-2 font-bold text-lg z-10">
			<img src="icons/rocket.svg" alt="Icon" class="w-4 h-4" />
			Career Pilot
		</a>
		<div class="absolute w-full pointer-events-none">
			<div class="flex justify-center items-center gap-x-6 pointer-events-auto">
				<NavigationRoute href="/features">Features</NavigationRoute>
				<NavigationRoute href="/pricing">Pricing</NavigationRoute>
				<NavigationRoute href="/about">About</NavigationRoute>
				<NavigationRoute href="/contact">Contact</NavigationRoute>
			</div>
		</div>
		{#if authenticated}
			<div class="flex items-center gap-x-2 z-10">
				<Button href="/dashboard">
					Dashboard
				</Button>
				<UserMenu />
			</div>
		{:else}
			<div class="flex items-center gap-x-2 z-10">
				<Button href="/login" variant="outline">
					Login
				</Button>
				<Button href="/sign-up">
					Get Started
				</Button>
			</div>
		{/if}
	</div>
</nav>
