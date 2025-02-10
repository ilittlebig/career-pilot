<script lang="ts">
	import { FileText, Clock, Calendar, Target } from "lucide-svelte";
	import MetricCard from "$lib/components/metric-card.svelte";

	const metricColors = {
		blue: { card: "bg-blue-50 border-blue-200", icon: "text-blue-600" },
		yellow: { card: "bg-yellow-50 border-yellow-200", icon: "text-yellow-600" },
		green: { card: "bg-green-50 border-green-200", icon: "text-green-600" },
		purple: { card: "bg-purple-50 border-purple-200", icon: "text-purple-600" }
	};

	const metrics = [
		{ name: "Job Applications", value: 12, icon: FileText, color: metricColors.blue },
		{ name: "In Review", value: 3, icon: Clock, color: metricColors.yellow },
		{ name: "Upcoming Interviews", value: 1, icon: Calendar, color: metricColors.green },
		{ name: "Job Matches", value: 5, icon: Target, color: metricColors.purple }
	];
</script>

<div class="flex flex-col gap-y-6">
	<div class="flex flex-col">
		<h1 class="text-2xl font-semibold">Welcome back, Elias!</h1>
		<p class="text-muted-foreground">
			Here’s a quick summary of your job search progress and tools to help you land your next opportunity faster.
		</p>
	</div>
	<div class="grid grid-cols-4 gap-6">
		{#each metrics as metric}
			<MetricCard {metric} />
		{/each}
	</div>
</div>
