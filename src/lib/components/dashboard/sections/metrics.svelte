<script lang="ts">
	import {
		FileText,
		Clock,
		Calendar,
		Target,
	} from "lucide-svelte";
	import MetricCard from "$lib/components/dashboard/metric-card.svelte";

	const colors = {
		blue: { card: "bg-blue-50 border-blue-200", text: "text-blue-600" },
		yellow: { card: "bg-yellow-50 border-yellow-200", text: "text-yellow-600" },
		green: { card: "bg-green-50 border-green-200", text: "text-green-600" },
		purple: { card: "bg-purple-50 border-purple-200", text: "text-purple-600" },
		gray: { card: "bg-gray-50 border-gray-200", text: "text-gray-600" }
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
