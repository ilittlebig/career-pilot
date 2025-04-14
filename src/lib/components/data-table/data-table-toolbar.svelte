<script lang="ts">
	import { getContext, type Snippet } from "svelte";
	import { Trash2 } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import type { Table as TableType } from "@tanstack/table-core";

	interface Props {
		children?: Snippet;
		customBulkActions?: Snippet<[boolean]>;
		customActions?: Snippet;
	}

	const {
		table
	}: { table: TableType<any> } = getContext("data-table");

	let {
		children,
		customBulkActions,
		customActions,
	}: Props = $props();
</script>

{#snippet bulkActions(isAnyRowSelected: boolean)}
	{@render customBulkActions?.(isAnyRowSelected)}
	<Button variant="destructive" class="disabled:opacity-20" disabled={!isAnyRowSelected}>
		<Trash2 />
		Delete Selected
	</Button>
{/snippet}

<div class="flex flex-col gap-y-2">
	<div class="flex items-center justify-between">
		{@render children?.()}
	</div>
	<div class="flex items-center gap-x-4">
		<div class="flex items-center justify-between w-full">
			<div class="flex items-center gap-x-2">
				{@render bulkActions(table.getIsSomePageRowsSelected() || table.getIsAllRowsSelected())}
			</div>
			{@render customActions?.()}
		</div>
	</div>
</div>
