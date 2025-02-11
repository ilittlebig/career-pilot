<script lang="ts">
	import {
		FileText,
		Clock,
		Calendar,
		Target,
		FileUp,
		FilePen,
		Search,
		Bookmark,
		Link,
	} from "lucide-svelte";
	import MetricCard from "$lib/components/metric-card.svelte";
	import QuickAction from "$lib/components/quick-action.svelte";

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

	const actions = [
		{ label: "Upload Resume", icon: FileUp, url: "/resumes", color: colors.blue },
		{ label: "Create Cover Letter", icon: FilePen, url: "/cover-letters", color: colors.yellow },
		{ label: "Find Jobs", icon: Search, url: "/job-search", color: colors.green },
		{ label: "View Saved Jobs", icon: Bookmark, url: "/saved-jobs", color: colors.purple  },
		{ label: "Connect LinkedIn", icon: Link, url: "/integrations", color: colors.gray }
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
	<div class="grid grid-cols-5 gap-6">
		{#each actions as action}
			<QuickAction {action} />
		{/each}
	</div>
</div>
