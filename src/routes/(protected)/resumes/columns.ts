/**
 *
 *
 * Author: Elias Sjödin
 * Created: 2025-02-17
 */

import { createRawSnippet, mount, unmount } from "svelte";
import { formatDate } from "$lib/utils/date";
import { renderSnippet, renderComponent } from "$lib/components/ui/data-table";
import { DataTable } from "$lib/components/data-table";
import { Checkbox } from "$lib/components/ui/checkbox";
import PostRowActions from "$lib/components/row-actions/post-row-actions.svelte";
import type { ColumnDef } from "@tanstack/table-core";

export const columns: ColumnDef<any>[] = [
	{
		id: "select",
		header: ({ table }) =>
			renderComponent(Checkbox, {
				checked: table.getIsAllPageRowsSelected(),
				indeterminate:
					table.getIsSomePageRowsSelected() &&
					!table.getIsAllPageRowsSelected(),
				onCheckedChange: value => table.toggleAllPageRowsSelected(!!value),
				"aria-label": "Select all",
			}),
		cell: ({ row }) =>
			renderComponent(Checkbox, {
				checked: row.getIsSelected(),
				onCheckedChange: value => row.toggleSelected(!!value),
				"aria-label": "Select row",
			}),
		enableSorting: false,
		enableHiding: false,
		size: 10,
	},
	{
		accessorFn: (row: any) => row.name,
		header: "Resume Name",
	},
	{
		accessorFn: (row: any) => formatDate(row.lastUpdated),
		header: "Last Updated",
		size: 70,
	},
	{
		header: "File Type",
		size: 20,
		cell: ({ row }) => {
			const value: string = row.original.fileType;
			return renderComponent(DataTable.BadgeCell, { value, variant: "outline" });
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const rowActionsCellSnippet = createRawSnippet<[any]>(getOriginal => {
				const post = getOriginal();
				return {
					render: () => `<div class="flex justify-end"></div>`,
					setup: target => {
						const comp = mount(PostRowActions, {
							target,
							props: { post },
						});
						return () => unmount(comp);
					}
				};
			});
			return renderSnippet(rowActionsCellSnippet, row.original);
		},
		size: 0,
	},
];
