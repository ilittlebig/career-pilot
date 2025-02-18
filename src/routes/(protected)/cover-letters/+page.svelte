<script lang="ts">
	import { CirclePlus, Download } from "lucide-svelte";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import { Button } from "$lib/components/ui/button";
	import { DataTable } from "$lib/components/data-table";
	import { columns } from "./columns";

	const coverLetters = [
		{
			name: "Software Engineer Cover Letter",
			lastUpdated: "2024-02-10",
			fileType: "PDF",
		},
		{
			name: "Frontend Developer Cover Letter",
			lastUpdated: "2024-02-08",
			fileType: "DOCX",
		},
		{
			name: "UI/UX Designer Cover Letter",
			lastUpdated: "2024-02-05",
			fileType: "PDF",
		},
	];
</script>

<div class="flex flex-col gap-y-6">
	<div class="flex flex-col">
		<h1 class="text-2xl font-semibold">Cover Letters</h1>
		<p class="text-muted-foreground">
			Manage your uploaded cover letters and tailor them for different job applications.
		</p>
	</div>
	<div class="flex flex-col gap-y-2">
		<DataTable.Provider data={coverLetters} {columns}>
			<DataTable.Toolbar>
				<DataTable.SearchBar placeholder="Search cover letters by title, date, or keywords…" />
				<Button>
					<CirclePlus />
					Create Cover Letter
				</Button>
				{#snippet customBulkActions(isAnyRowSelected: boolean)}
					<Button variant="outline" class="disabled:opacity-20" disabled={!isAnyRowSelected}>
						<Download />
						Download Selected Cover Letters
					</Button>
				{/snippet}
			</DataTable.Toolbar>
			<ScrollArea orientation="horizontal" class="w-full">
				<DataTable.Table class="table-auto" />
			</ScrollArea>
		</DataTable.Provider>
	</div>
</div>
