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
		accessorFn: (row: any) => row.company,
		header: "Company",
		size: 50,
	},
	{
		header: "Position",
		accessorFn: (row: any) => row.position,
		size: 70,
		cell: ({ row }) => {
			const value: string = row.original.position;
			return renderComponent(DataTable.BadgeCell, { value, variant: "outline" });
		},
	},
	{
		accessorFn: (row: any) => formatDate(row.applicationDate),
		header: "Application Date",
		size: 80,
	},
	{
		header: "Status",
		accessorFn: (row: any) => row.status,
		size: 80,
		cell: ({ row }) => {
			const value: string = row.original.status;
			return renderComponent(DataTable.SelectCell, { value });
		},
	},
	{
		accessorFn: (row: any) => row.lastActivity,
		header: "Last Activity",
		size: 110,
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
