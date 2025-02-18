<script lang="ts">
	import { CirclePlus } from "lucide-svelte";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import { Button } from "$lib/components/ui/button";
	import { DataTable } from "$lib/components/data-table";
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
	<div class="flex flex-col">
		<h1 class="text-2xl font-semibold">Resumes</h1>
		<p class="text-muted-foreground">
			Manage your uploaded resumes and tailor them for different job applications.
		</p>
	</div>
	<div class="flex flex-col gap-y-2">
		<DataTable.Provider data={resumes} {columns}>
			<DataTable.Toolbar>
				<DataTable.SearchBar placeholder="Search resumes by title, date, or keywords…" />
				<Button>
					<CirclePlus />
					Create Resume
				</Button>
			</DataTable.Toolbar>
			<ScrollArea orientation="horizontal" class="w-full">
				<DataTable.Table class="table-auto" />
			</ScrollArea>
		</DataTable.Provider>
	</div>
</div>
