<script lang="ts">
	import {
		FileText,
		Clock,
		Calendar,
		Target,
	} from "lucide-svelte";
	import MetricCard from "$lib/components/dashboard/metric-card.svelte";

	const colors = {
		blue: { border: "border-blue-200", text: "text-blue-600" },
		yellow: { border: "border-orange-200", text: "text-yellow-600" },
		green: { border: "border-green-200", text: "text-green-600" },
		purple: { border: "border-purple-200", text: "text-purple-600" },
		gray: { border: "border-gray-200", text: "text-gray-600" }
	};

	const metrics = [
		{ name: "Job Applications", value: 12, icon: FileText, color: colors.blue },
		{ name: "In Review", value: 3, icon: Clock, color: colors.yellow },
		{ name: "Upcoming Interviews", value: 1, icon: Calendar, color: colors.green },
		{ name: "Job Matches", value: 5, icon: Target, color: colors.purple }
	];
</script>

<section class="grid grid-cols-4 gap-6">
	{#each metrics as metric}
		<MetricCard {metric} />
	{/each}
</section>
