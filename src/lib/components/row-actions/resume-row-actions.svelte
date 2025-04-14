<script lang="ts">
	import { Download, Eye, MoreVertical } from "lucide-svelte";
	import { Button, buttonVariants } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import * as Tooltip from "$lib/components/ui/tooltip";
	import DeleteDialog from "$lib/components/dialogs/delete-dialog.svelte";

	let isOpen = $state(false);

	const handleDeleteConfirm = async () => {
		isOpen = false;
	}
</script>

<DeleteDialog
	title="Delete Resume?"
	description="Are you sure you want to delete this resume? This action is irreversible."
	actionLabel="Delete Resume"
	onconfirm={handleDeleteConfirm}
	bind:open={isOpen}
/>

<Tooltip.Provider delayDuration={0} ignoreNonKeyboardFocus disableHoverableContent>
	<Tooltip.Root>
		<Tooltip.Trigger>
			<Button class="size-8" variant="ghost">
				<Download />
			</Button>
			<Tooltip.Content>
				Download Resume
			</Tooltip.Content>
		</Tooltip.Trigger>
	</Tooltip.Root>
	<Tooltip.Root>
		<Tooltip.Trigger>
			<Button class="size-8" variant="ghost">
				<Eye />
			</Button>
		</Tooltip.Trigger>
		<Tooltip.Content>
			Preview Resume
		</Tooltip.Content>
	</Tooltip.Root>
</Tooltip.Provider>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		class={buttonVariants({
			variant: "ghost",
			class: "relative size-8",
		})}
	>
		<MoreVertical />
		<span class="sr-only">Open menu</span>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end">
		<DropdownMenu.Label>Actions</DropdownMenu.Label>
			<DropdownMenu.Item onclick={() => {}}>
			Duplicate
		</DropdownMenu.Item>
		<DropdownMenu.Item onclick={() => {}}>
			Edit
		</DropdownMenu.Item>
		<DropdownMenu.Separator />
		<DropdownMenu.Item onclick={() => isOpen = true}>Delete</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
