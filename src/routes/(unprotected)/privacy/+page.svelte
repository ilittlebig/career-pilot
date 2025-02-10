<script lang="ts">
	import { ArrowUp } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
</script>

<section class="py-36 px-4 lg:px-0 w-full max-w-6xl">
	<h2 class="flex text-3xl md:text-4xl font-swiss max-w-2xl leading-title text-center">
		Privacy Policy
	</h2>
	<div class="flex gap-32 mt-[72px]">
		<div class="flex flex-col gap-y-2">
			<p class="text-sm md:text-base text-muted-foreground max-w-3xl">
				Last Updated May 23rd, 2024
			</p>
			<p class="font-semibold text-2xl md:text-3xl">
				This Privacy Policy will help you better understand how we collect, use, and share your personal information.
			</p>
		</div>
		<div class="flex flex-col gap-y-4 w-3/4">
			<h3 class="text-2xl font-bold">Table of contents</h3>
			<ul class="list-decimal list-inside flex flex-col gap-y-2 pl-4">
				<li><a href="#a" class="underline">What are you talking about?</a></li>
				<li><a href="#a" class="underline">What are you talking about?</a></li>
				<li><a href="#a" class="underline">What are you talking about?</a></li>
				<li><a href="#a" class="underline">What are you talking about?</a></li>
				<li><a href="#a" class="underline">What are you talking about?</a></li>
			</ul>
			<Separator />
			<Button variant="outline" class="w-fit">
				Back to top
				<ArrowUp />
			</Button>
		</div>
	</div>
</section>
