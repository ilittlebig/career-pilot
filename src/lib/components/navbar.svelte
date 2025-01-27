<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import UserMenu from "$lib/components/user-menu.svelte";

	interface Props {
		authenticated: boolean;
	}
	let { authenticated }: Props = $props();
</script>

<nav class="flex justify-center sticky top-0 p-4 h-[73px] bg-white w-full border-b z-10">
	<div class="flex items-center justify-between w-full max-w-6xl relative">
		<a href="/" class="font-logo text-xl font-bold text-primary z-10">
			Logo
		</a>
		<ul class="absolute w-full pointer-events-none">
			<div class="flex justify-center items-center gap-x-4 pointer-events-auto">
				<li>
					<a href="/" class="text-sm text-muted-foreground hover:text-primary">Home</a>
				</li>
				<li>
					<a href="/" class="text-sm text-muted-foreground hover:text-primary">Portfolio</a>
				</li>
			</div>
		</ul>
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
