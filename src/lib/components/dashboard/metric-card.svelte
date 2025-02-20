<script lang="ts">
	import * as Card from "$lib/components/ui/card";

	interface MetricColor {
		card: string;
		text: string;
	}

	interface Metric {
		name: string;
		value: number;
		color: MetricColor;
		icon: any;
	}

	let { metric }: { metric: Metric } = $props();
</script>

<Card.Root>
	<Card.Content class="relative">
		<Card.Title class="text-3xl">{metric.value}</Card.Title>
		<Card.Description>{metric.name}</Card.Description>
		<div class="absolute top-6 right-6">
			<metric.icon size={20} class={metric.color.text} />
		</div>
	</Card.Content>
</Card.Root>
