<script lang="ts">
	import { House } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
</script>

<div class="flex flex-col gap-y-4 items-center justify-center h-screen">
	<img src="/404.svg" class="w-[450px] h-[450px] object-contain" alt="404" />
	<h2 class="font-semibold text-2xl max-w-xl text-center">
		They say all roads lead to home, but this one seems to be lost in the cheese maze. 🧀
	</h2>
	<Button href="/" size="lg">
		<House />
		Take me home
	</Button>
</div>
