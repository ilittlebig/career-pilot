<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import RecommendedJobCard from "$lib/components/recommended-job-card.svelte";

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
	<Card.Root class="border-secondary/50">
		<Card.Content class="p-4">
			{#each jobRecommendations.slice(0, 3) as job}
				<RecommendedJobCard {job} />
			{/each}
			<div class="text-center pt-3">
				<Button href="/recommendations" variant="link" size="sm">
					See More Jobs
				</Button>
			</div>
		</Card.Content>
	</Card.Root>
</section>
