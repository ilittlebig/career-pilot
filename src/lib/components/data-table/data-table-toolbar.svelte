<script lang="ts">
	import { getContext } from "svelte";
	import { Plus, Download, Trash2 } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import * as Select from "$lib/components/ui/select";
	import SearchBar from "$lib/components/search-bar.svelte";
	import type { Table as TableType } from "@tanstack/table-core";

	interface Props {
		table: TableType<any>;
	}
	const { table }: Props = getContext("data-table");

	const selected = $state();
</script>

<div class="flex flex-col gap-y-2">
	<div class="flex items-center justify-between">
		<SearchBar class="w-[500px]" placeholder="Search applications by company, position, or status…" />
		<Button>
			<Plus />
			Log New Application
		</Button>
	</div>
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-x-2">
			<Select.Root
				type="single"
				name="applicationStatus"
				class="disabled:opacity-20"
				disabled={!table.getIsSomePageRowsSelected() && !table.getIsAllRowsSelected()}
			>
				<Select.Trigger class="w-[200px]">
					Change Status
				</Select.Trigger>
				<Select.Content>
				</Select.Content>
			</Select.Root>
			<Button variant="outline" class="disabled:opacity-20" disabled={!table.getIsSomePageRowsSelected() && !table.getIsAllRowsSelected()}>
				<Download />
				Export Selected
			</Button>
			<Button variant="destructive" class="disabled:opacity-20" disabled={!table.getIsSomePageRowsSelected() && !table.getIsAllRowsSelected()}>
				<Trash2 />
				Delete Selected
			</Button>
		</div>
		<p class="text-sm text-muted-foreground">
			{#if table.getFilteredSelectedRowModel().rows.length > 0}
				{table.getFilteredSelectedRowModel().rows.length} of
				{table.getFilteredRowModel().rows.length} row(s) selected.
			{:else}
				Select rows to enable bulk actions
			{/if}
		</p>
	</div>
	<Separator class="my-2" />
</div>
