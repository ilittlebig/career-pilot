<script lang="ts">
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import { DataTable } from "$lib/components/data-table";
	import SearchBar from "$lib/components/search-bar.svelte";
	import { columns } from "./columns";

	const applications = [
		{
			company: "Google",
			position: "Frontend Developer",
			applicationDate: "2024-02-01",
			status: "interview_scheduled",
			lastActivity: "HR Interview on 2024-02-10",
		},
		{
			company: "Spotify",
			position: "UI/UX Designer",
			applicationDate: "2024-01-28",
			status: "awaiting_response",
			lastActivity: "Application submitted",
		},
		{
			company: "Meta",
			position: "Software Engineer",
			applicationDate: "2024-01-26",
			status: "rejected",
			lastActivity: "Rejection email received on 2024-02-05",
		},
		{
			company: "Tesla",
			position: "Product Manager",
			applicationDate: "2024-02-05",
			status: "in_review",
			lastActivity: "Resume viewed on 2024-02-09",
		},
		{
			company: "Amazon",
			position: "Backend Developer",
			applicationDate: "2024-01-30",
			status: "phone_interview",
			lastActivity: "Scheduled technical interview for 2024-02-12",
		},
		{
			company: "Microsoft",
			position: "Cloud Solutions Architect",
			applicationDate: "2024-02-02",
			status: "offer_received",
			lastActivity: "Received job offer on 2024-02-11",
		},
		{
			company: "Netflix",
			position: "Fullstack Developer",
			applicationDate: "2024-02-04",
			status: "awaiting_response",
			lastActivity: "No response yet since 2024-02-05",
		},
		{
			company: "OpenAI",
			position: "AI Research Engineer",
			applicationDate: "2024-01-25",
			status: "coding_challenge",
			lastActivity: "Completed take-home test on 2024-02-08",
		},
		{
			company: "Adobe",
			position: "Frontend Engineer",
			applicationDate: "2024-02-06",
			status: "hr_interview",
			lastActivity: "Recruiter call on 2024-02-10",
		},
		{
			company: "Salesforce",
			position: "Technical Writer",
			applicationDate: "2024-02-03",
			status: "rejected",
			lastActivity: "Rejection email received on 2024-02-07",
		},
		{
			company: "Google",
			position: "Frontend Developer",
			applicationDate: "2024-02-01",
			status: "interview_scheduled",
			lastActivity: "HR Interview on 2024-02-10",
		},
		{
			company: "Spotify",
			position: "UI/UX Designer",
			applicationDate: "2024-01-28",
			status: "awaiting_response",
			lastActivity: "Application submitted",
		},
		{
			company: "Meta",
			position: "Software Engineer",
			applicationDate: "2024-01-26",
			status: "rejected",
			lastActivity: "Rejection email received on 2024-02-05",
		},
		{
			company: "Tesla",
			position: "Product Manager",
			applicationDate: "2024-02-05",
			status: "in_review",
			lastActivity: "Resume viewed on 2024-02-09",
		},
		{
			company: "Amazon",
			position: "Backend Developer",
			applicationDate: "2024-01-30",
			status: "phone_interview",
			lastActivity: "Scheduled technical interview for 2024-02-12",
		},
		{
			company: "Microsoft",
			position: "Cloud Solutions Architect",
			applicationDate: "2024-02-02",
			status: "offer_received",
			lastActivity: "Received job offer on 2024-02-11",
		},
		{
			company: "Netflix",
			position: "Fullstack Developer",
			applicationDate: "2024-02-04",
			status: "awaiting_response",
			lastActivity: "No response yet since 2024-02-05",
		},
		{
			company: "OpenAI",
			position: "AI Research Engineer",
			applicationDate: "2024-01-25",
			status: "coding_challenge",
			lastActivity: "Completed take-home test on 2024-02-08",
		},
		{
			company: "Adobe",
			position: "Frontend Engineer",
			applicationDate: "2024-02-06",
			status: "hr_interview",
			lastActivity: "Recruiter call on 2024-02-10",
		},
		{
			company: "Salesforce",
			position: "Technical Writer",
			applicationDate: "2024-02-03",
			status: "rejected",
			lastActivity: "Rejection email received on 2024-02-07",
		},
	];
</script>

<div class="flex flex-col gap-y-6">
	<div class="flex flex-col">
		<h1 class="text-2xl font-semibold">Job Applications</h1>
		<p class="text-muted-foreground">
			Monitor your job search progress and keep track of your applications in one place.
		</p>
	</div>
	<div class="flex flex-col gap-y-2">
		<SearchBar class="w-[500px]" placeholder="Search applications by company, position, or status…" />
		<DataTable.Provider data={applications} {columns}>
			<ScrollArea orientation="horizontal" class="w-full">
				<DataTable.Table class="table-auto" />
			</ScrollArea>
		</DataTable.Provider>
	</div>
</div>
