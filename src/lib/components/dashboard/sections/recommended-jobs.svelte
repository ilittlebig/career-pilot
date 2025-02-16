<script lang="ts">
	import {
		ClockIcon,
		BriefcaseIcon,
		MapPinIcon,
	} from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";

	const jobRecommendations = [
		{
			company: "Google",
			title: "Frontend Developer",
			location: "Stockholm, Sweden",
			type: "Full-time",
			postedAgo: "2 days ago",
		},
		{
			company: "Spotify",
			title: "UI/UX Designer",
			location: "Remote",
			type: "Contract",
			postedAgo: "1 day ago",
		},
		{
			company: "Meta",
			title: "Software Engineer",
			location: "Gothenburg, Sweden",
			type: "Full-time",
			postedAgo: "5 hours ago",
		},
		{
			company: "Amazon",
			title: "Backend Developer",
			location: "Malmö, Sweden",
			type: "Full-time",
			postedAgo: "3 days ago",
		},
		{
			company: "Tesla",
			title: "Product Manager",
			location: "Remote",
			type: "Part-time",
			postedAgo: "4 days ago",
		},
	];
</script>

<section class="flex flex-col gap-y-4">
	<h2 class="text-lg font-semibold">Recommended Jobs</h2>
	<Card.Root>
		<Card.Content class="p-4">
			{#each jobRecommendations.slice(0, 3) as job}
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
			{/each}
			<div class="text-center pt-3">
				<Button href="/recommendations" variant="link" size="sm">
					See More Jobs
				</Button>
			</div>
		</Card.Content>
	</Card.Root>
</section>
