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
import type { ColumnDef } from "@tanstack/table-core";

export const columns: ColumnDef<any>[] = [
	{
		accessorFn: (row: any) => row.company,
		header: "Company",
		size: 50,
	},
	{
		accessorFn: (row: any) => row.position,
		header: "Position",
		size: 70,
	},
	{
		accessorFn: (row: any) => formatDate(row.applicationDate),
		header: "Application Date",
		size: 80,
	},
	{
		id: "status",
		header: "Status",
		size: 100,
		cell: ({ row }) => {
			const value: string = row.original.status;
			return renderComponent(DataTable.Select, { value });
		},
	},
	{
		accessorFn: (row: any) => row.lastActivity,
		header: "Last Activity",
		size: 110,
	},
];
