<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import RecommendedJobCard from "$lib/components/recommended-job-card.svelte";
	import SearchBar from "$lib/components/search-bar.svelte";

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

<div class="flex flex-col gap-y-6">
	<div class="flex flex-col">
		<h1 class="text-2xl font-semibold">Job Recommendations</h1>
		<p class="text-muted-foreground">
			Based on your profile, these are jobs you might be interested in.
		</p>
	</div>
	<div class="flex flex-col gap-y-2">
		<SearchBar class="w-96" placeholder="Filter recommended jobs…" />
		<Card.Root>
			<Card.Content class="p-4">
				{#each jobRecommendations as job}
					<RecommendedJobCard {job} />
				{/each}
			</Card.Content>
		</Card.Root>
	</div>
</div>
