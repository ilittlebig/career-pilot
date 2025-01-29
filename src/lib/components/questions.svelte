<script lang="ts">
	import * as Accordion from "$lib/components/ui/accordion";
	let { questions } = $props();
</script>

<Accordion.Root type="single" class="flex flex-col w-full gap-y-2">
	{#each questions as { question, answer }, index}
		<Accordion.Item value={index.toString()} class="bg-accent rounded-xl border border-primary px-4">
			<Accordion.Trigger>{question}</Accordion.Trigger>
			<Accordion.Content>{answer}</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>
