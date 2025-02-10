<script lang="ts">
	import { onMount } from "svelte";
	import { ChevronUp } from "lucide-svelte";
	import { getIdTokenContent } from "$lib/utils/auth";
	import * as Sidebar from "$lib/components/ui/sidebar";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { signOutDialog } from "$lib/components/dialogs/auth/sign-out-dialog.svelte";
	import type { CognitoIdToken } from "types/auth";

	let idToken: CognitoIdToken | undefined = undefined;
	onMount(async () => {
		idToken = await getIdTokenContent();
	});
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props }: { props: any })}
			<Sidebar.MenuButton
				{...props}
				class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
			>
				{idToken?.email}
				<ChevronUp class="ml-auto" />
			</Sidebar.MenuButton>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56" align="end">
		<DropdownMenu.Label class="font-normal">
			<div class="flex flex-col space-y-1">
				<p class="text-muted-foreground text-xs leading-none">{idToken?.email}</p>
			</div>
		</DropdownMenu.Label>
		<DropdownMenu.Separator />
		<DropdownMenu.Item onSelect={() => signOutDialog.open = true}>
			Sign Out
		</DropdownMenu.Item>
	</DropdownMenu.Content>
</DropdownMenu.Root>
