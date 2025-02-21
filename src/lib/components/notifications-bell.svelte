<script lang="ts">
	import { Bell, Check } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import * as Popover from "$lib/components/ui/popover";

	const notifications = [
		{
			title: "Your call has been confirmed.",
			description: "1 hour ago"
		},
		{
			title: "You have a new message!",
			description: "1 hour ago"
		},
		{
			title: "Your subscription is expiring soon!",
			description: "2 hours ago"
		}
	];
</script>

<Popover.Root>
	<Popover.Trigger>
		<Button size="icon" variant="ghost" class="relative">
			<div class="flex items-center justify-center bg-destructive h-4 w-4 absolute rounded-full top-1 right-1.5">
				<span class="text-[10px] text-destructive-foreground">4</span>
			</div>
			<Bell />
		</Button>
	</Popover.Trigger>
	<Popover.Content align="end" class="flex flex-col gap-y-6 w-[340px]">
			<div>
				<h1 class="font-semibold text-lg">Notifications</h1>
				<p class="text-sm text-muted-foreground">You have 3 unread messages.</p>
			</div>
			<div class="flex flex-col gap-y-4">
				{#each notifications as notification, idx (idx)}
					<div class="flex items-center gap-x-2">
						<span class="flex size-2 rounded-full bg-sky-500"></span>
						<div class="space-y-1">
							<p class="text-sm font-medium leading-none">
								{notification.title}
							</p>
							<p class="text-muted-foreground text-sm">
								{notification.description}
							</p>
						</div>
					</div>
				{/each}
			</div>
			<Button>
				<Check />
				Mark all as read
			</Button>
	</Popover.Content>
</Popover.Root>
