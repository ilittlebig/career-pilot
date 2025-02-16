<script lang="ts">
	import { Separator } from "$lib/components/ui/separator";
	import RecentActivity from "$lib/components/dashboard/sections/recent-activity.svelte";
	import QuickActions from "$lib/components/dashboard/sections/quick-actions.svelte";
	import Metrics from "$lib/components/dashboard/sections/metrics.svelte";
	import UpcomingTasks from "$lib/components/dashboard/sections/upcoming-tasks.svelte";
	import RecommendedJobs from "$lib/components/dashboard/sections/recommended-jobs.svelte";
</script>

<div class="flex flex-col gap-y-6">
	<div class="flex flex-col">
		<h1 class="text-2xl font-semibold">Welcome back, Elias!</h1>
		<p class="text-muted-foreground">
			Here’s a quick summary of your job search progress and tools to help you land your next opportunity faster.
		</p>
	</div>
	<Metrics />
	<QuickActions />
	<Separator class="my-2" />
	<RecentActivity />
	<UpcomingTasks />
	<RecommendedJobs />
</div>
