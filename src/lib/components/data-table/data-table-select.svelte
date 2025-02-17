<script lang="ts">
	import * as Select from "$lib/components/ui/select";

	interface Props {
		value: string;
	}

	const fruits = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "blueberry", label: "Blueberry" },
    { value: "grapes", label: "Grapes" },
    { value: "pineapple", label: "Pineapple" }
  ];

	let { value }: Props = $props();
</script>

<Select.Root type="single" name="favoriteFruit" bind:value>
  <Select.Trigger class="w-[200px]">
		{value}
  </Select.Trigger>
  <Select.Content>
		{#each fruits as fruit}
			<Select.Item value={fruit.value} label={fruit.label}>
				{fruit.label}
			</Select.Item>
		{/each}
  </Select.Content>
</Select.Root>
