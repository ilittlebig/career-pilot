/**
 *
 *
 * Author: Elias Sjödin
 * Created: 2025-02-17
 */

import { formatDate } from "$lib/utils/date";
import { renderComponent } from "$lib/components/ui/data-table";
import { DataTable } from "$lib/components/data-table";
import { Checkbox } from "$lib/components/ui/checkbox";
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
];
