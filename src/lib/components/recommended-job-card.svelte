<script lang="ts">
	import {
		ClockIcon,
		BriefcaseIcon,
		MapPinIcon,
	} from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";

	interface Job {
		company: string;
		title: string;
		location: string;
		type: string;
		postedAgo: string;
	}

	interface Props {
		job: Job;
	}
	let { job }: Props = $props();
</script>

<div class="flex justify-between items-center border-b last:border-none py-3 hover:bg-muted rounded-md px-2">
	<div class="flex flex-col">
		<p class="text-sm text-muted-foreground">{job.company}</p>
		<p class="text-base font-medium">{job.title}</p>
		<p class="flex items-center gap-x-1 text-sm text-muted-foreground">
			<MapPinIcon size={14} />
			{job.location} •
			<BriefcaseIcon size={14} />
			{job.type} •
			<ClockIcon size={14} />
			{job.postedAgo}
		</p>
	</div>
	<div class="flex gap-x-2">
		<Button variant="outline" size="sm">Save</Button>
		<Button size="sm">Apply Now</Button>
	</div>
</div>
