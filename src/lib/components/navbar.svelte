<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import UserMenu from "$lib/components/user-menu.svelte";

	interface Props {
		authenticated: boolean;
	}
	let { authenticated }: Props = $props();
</script>

<nav class="flex justify-center sticky top-0 p-4 h-[73px] bg-white w-full border-b z-10">
	<div class="flex items-center justify-between w-full max-w-6xl">
		<a href="/" class="font-logo text-xl font-bold text-primary">
			Logo
		</a>
		<ul class="flex items-center gap-4">
			<li>
				<a href="/" class="text-sm text-muted-foreground hover:text-primary">Home</a>
			</li>
			<li>
				<a href="/" class="text-sm text-muted-foreground hover:text-primary">Portfolio</a>
			</li>
			{#if authenticated}
				<div class="flex items-center gap-x-2">
					<Button href="/dashboard">
						Dashboard
					</Button>
					<UserMenu />
				</div>
			{:else}
				<Button href="/sign-up">
					Get Started
				</Button>
			{/if}
		</ul>
	</div>
</nav>
