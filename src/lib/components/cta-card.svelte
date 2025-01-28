<script lang="ts">
	import { Button } from "$lib/components/ui/button";
</script>

<div class="flex flex-col gap-y-12 items-center bg-secondary w-full rounded-xl p-12 relative">
	<h1 class="text-2xl md:text-3xl font-swiss tracking-tight leading-title max-w-xl text-center z-10">
		Take the Next Step Toward Your Dream Job Today!
	</h1>
	<Button href="/sign-up" size="lg" class="z-10">
		Get started for free now
	</Button>

	<div
		class="absolute inset-0 bg-white/30"
		style="clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 70% 100%, 30% 100%, 0% 40%)"
	></div>
</div>
