<script lang="ts">
	import { getContext } from "svelte";
	import { CirclePlus, Download, Trash2 } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import * as Select from "$lib/components/ui/select";
	import SearchBar from "$lib/components/search-bar.svelte";
	import type { Table as TableType } from "@tanstack/table-core";

	interface Props {
		table: TableType<any>;
	}
	const { table }: Props = getContext("data-table");
</script>

{#snippet bulkActions(isSelected: boolean)}
	<Select.Root
		type="single"
		name="applicationStatus"
		disabled={!isSelected}
	>
		<Select.Trigger class="w-[200px] disabled:opacity-20">
			Change Status
		</Select.Trigger>
		<Select.Content>
		</Select.Content>
	</Select.Root>
	<Button variant="outline" class="disabled:opacity-20" disabled={!isSelected}>
		<Download />
		Export Selected
	</Button>
	<Button variant="destructive" class="disabled:opacity-20" disabled={!isSelected}>
		<Trash2 />
		Delete Selected
	</Button>
{/snippet}

<div class="flex flex-col gap-y-2">
	<div class="flex items-center justify-between">
		<SearchBar class="w-[500px]" placeholder="Search applications by company, position, or status…" />
		<Button>
			<CirclePlus />
			Log New Application
		</Button>
	</div>
	<div class="flex items-center gap-x-4">
		<p class="text-sm text-muted-foreground">
			{table.getFilteredSelectedRowModel().rows.length} of
			{table.getFilteredRowModel().rows.length} row(s) selected.
		</p>
		<div class="flex items-center gap-x-2">
			{@render bulkActions(table.getIsSomePageRowsSelected() || table.getIsAllRowsSelected())}
		</div>
	</div>
	<Separator class="my-2" />
</div>
