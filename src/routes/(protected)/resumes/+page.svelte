<script lang="ts">
	import { Download, FileUp } from "lucide-svelte";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import { Button } from "$lib/components/ui/button";
	import { DataTable } from "$lib/components/data-table";
	import CreateResumeDialog from "$lib/components/dialogs/create-resume-dialog.svelte";
	import { columns } from "./columns";

	const resumes = [
		{
			name: "Frontend Engineer Resume",
			lastUpdated: "2024-02-10",
			fileType: "PDF",
		},
		{
			name: "UX Designer Resume",
			lastUpdated: "2024-01-28",
			fileType: "DOCX",
		},
		{
			name: "Software Engineer Resume",
			lastUpdated: "2024-02-05",
			fileType: "PDF",
		},
		{
			name: "Product Manager Resume",
			lastUpdated: "2024-02-15",
			fileType: "DOCX",
		},
		{
			name: "General Resume",
			lastUpdated: "2024-01-20",
			fileType: "PDF",
		},
	];
</script>

<div class="flex flex-col gap-y-6">
	<div class="flex justify-between">
		<div class="flex flex-col">
			<h1 class="text-2xl font-semibold">Resumes</h1>
			<p class="text-muted-foreground">
				Manage your uploaded resumes and tailor them for different job applications.
			</p>
		</div>
		<div class="flex gap-x-2">
			<Button href="/resumes/builder" variant="outline">
				<FileUp />
				Upload Resume
			</Button>
			<CreateResumeDialog />
		</div>
	</div>
	<div class="flex flex-col gap-y-2">
		<DataTable.Provider data={resumes} {columns}>
			<DataTable.SearchBar placeholder="Search resumes by title, date, or keywords…" />
			<DataTable.Toolbar>
				{#snippet customBulkActions(isAnyRowSelected: boolean)}
					<Button variant="outline" class="disabled:opacity-20" disabled={!isAnyRowSelected}>
						<Download />
						Download Selected Resumes
					</Button>
				{/snippet}
			</DataTable.Toolbar>
			<ScrollArea orientation="horizontal" class="w-full">
				<DataTable.Table class="table-auto" />
			</ScrollArea>
		</DataTable.Provider>
	</div>
</div>
