<script lang="ts">
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import { DataTable } from "$lib/components/data-table";
	import { columns } from "./columns";

	const applications = [
		{
			company: "Google",
			position: "Frontend Developer",
			applicationDate: "2024-02-01",
			status: "Interview Scheduled",
			lastActivity: "HR Interview on 2024-02-10",
		},
		{
			company: "Spotify",
			position: "UI/UX Designer",
			applicationDate: "2024-01-28",
			status: "Applied",
			lastActivity: "Application submitted",
		},
		{
			company: "Meta",
			position: "Software Engineer",
			applicationDate: "2024-01-26",
			status: "Rejected",
			lastActivity: "Rejection email received on 2024-02-05",
		},
		{
			company: "Tesla",
			position: "Product Manager",
			applicationDate: "2024-02-05",
			status: "In Review",
			lastActivity: "Resume viewed on 2024-02-09",
		},
		{
			company: "Amazon",
			position: "Backend Developer",
			applicationDate: "2024-01-30",
			status: "Phone Interview",
			lastActivity: "Scheduled technical interview for 2024-02-12",
		},
		{
			company: "Microsoft",
			position: "Cloud Solutions Architect",
			applicationDate: "2024-02-02",
			status: "Offer Received",
			lastActivity: "Received job offer on 2024-02-11",
		},
		{
			company: "Netflix",
			position: "Fullstack Developer",
			applicationDate: "2024-02-04",
			status: "Awaiting Response",
			lastActivity: "No response yet since 2024-02-05",
		},
		{
			company: "OpenAI",
			position: "AI Research Engineer",
			applicationDate: "2024-01-25",
			status: "Coding Challenge",
			lastActivity: "Completed take-home test on 2024-02-08",
		},
		{
			company: "Adobe",
			position: "Frontend Engineer",
			applicationDate: "2024-02-06",
			status: "HR Interview",
			lastActivity: "Recruiter call on 2024-02-10",
		},
		{
			company: "Salesforce",
			position: "Technical Writer",
			applicationDate: "2024-02-03",
			status: "Rejected",
			lastActivity: "Rejection email received on 2024-02-07",
		}
	];
</script>

<div class="flex flex-col gap-y-6">
	<div class="flex flex-col">
		<h1 class="text-2xl font-semibold">Job Applications</h1>
		<p class="text-muted-foreground">
			Monitor your job search progress and keep track of your applications in one place.
		</p>
	</div>
	<DataTable.Provider data={applications} {columns}>
		<ScrollArea orientation="horizontal" class="w-full">
			<DataTable.Table class="table-auto" />
		</ScrollArea>
	</DataTable.Provider>
</div>
