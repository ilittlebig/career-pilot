<script lang="ts">
	import { getContext } from "svelte";
	import { ArrowUpDown, ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-svelte";
	import { cn } from "$lib/utils/class";
	import { Button } from "$lib/components/ui/button";
	import { FlexRender } from "$lib/components/ui/data-table";
	import * as Table from "$lib/components/ui/table";
	import type { Table as TableType } from "@tanstack/table-core";
	import type { Post } from "types/post";

	type TableProps = { table: TableType<Post> }
	type Props = { class?: string }

	const { table }: TableProps = getContext("data-table");
	let { class: className }: Props = $props();
</script>

<div class={cn(className, "rounded-md border")}>
	<Table.Root class="table-fixed">
		<Table.Header class="bg-accent">
			{#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
				<Table.Row>
					{#each headerGroup.headers as header (header.id)}
						<Table.Head
							style={`width: ${header.getSize()}px;`}
							colspan={header.colSpan}
							class="first:rounded-l-md last:rounded-r-md"
						>
							{#if !header.isPlaceholder}
								<div class="flex items-center gap-x-2">
									{#if header.column.getCanSort()}
										<Button variant="ghost" size="sm" class="p-0" onclick={header.column.getToggleSortingHandler()}>
											<FlexRender
												content={header.column.columnDef.header}
												context={header.getContext()}
											/>
											{#if header.column.getIsSorted().toString() === "asc"}
												<ArrowDownNarrowWide size={16} />
											{:else if header.column.getIsSorted().toString() === "desc"}
												<ArrowUpNarrowWide size={16} />
											{:else}
												<ArrowUpDown size={16} />
											{/if}
										</Button>
									{:else}
										<FlexRender
											content={header.column.columnDef.header}
											context={header.getContext()}
										/>
									{/if}
								</div>
							{/if}
						</Table.Head>
					{/each}
				</Table.Row>
			{/each}
		</Table.Header>
		<Table.Body class="bg-background">
			{#each table.getRowModel().rows as row (row.id)}
				<Table.Row data-state={row.getIsSelected() && "selected"}>
					{#each row.getVisibleCells() as cell (cell.id)}
						<Table.Cell class="first:rounded-b-md last:rounded-b-md">
							<FlexRender
								content={cell.column.columnDef.cell}
								context={cell.getContext()}
							/>
						</Table.Cell>
					{/each}
				</Table.Row>
			{:else}
				<Table.Row>
					<Table.Cell colspan={table.getAllColumns().length} class="h-24 text-center">
						No results.
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
