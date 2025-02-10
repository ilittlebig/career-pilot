<script lang="ts">
	interface MetricColor {
		card: string;
		icon: string;
	}

	interface Metric {
		name: string;
		value: number;
		color: MetricColor;
		icon: any;
	}

	interface Props {
		metric: Metric;
	}

	let { metric }: Props = $props();
</script>

<div class={[ "flex flex-col gap-y-2 border rounded-lg p-4 shadow hover:shadow-md transition-shadow duration-300 relative", metric.color.card ]}>
	<div class="absolute top-6 right-6">
		<metric.icon size={20} class={metric.color.icon} />
	</div>
	<p class="text-5xl font-black">{metric.value}</p>
	<h2 class="text-muted-foreground">{metric.name}</h2>
</div>
