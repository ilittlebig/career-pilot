<script lang="ts">
	import {
		Calendar,
		Mail,
		Edit,
		Send,
		Trash2,
	} from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import { Checkbox } from "$lib/components/ui/checkbox";
	import * as Card from "$lib/components/ui/card";

	const tasks = [
		{ title: "Prepare for Microsoft Interview", icon: Calendar, due: "Thursday, 10 AM" },
		{ title: "Follow up on Spotify Application", icon: Mail, due: "2 days ago" },
		{ title: "Refine Resume for Google AI Role", icon: Edit, due: "Drafting phase" },
		{ title: "Send Thank-You Email to Meta Recruiter", icon: Send, due: "Pending" }
	];
</script>

<section class="flex flex-col gap-y-4">
	<h2 class="text-lg font-semibold">Upcoming Tasks</h2>
	<Card.Root>
		<Card.Content class="p-4">
			{#each tasks.slice(0, 3) as task}
				<div class="flex items-center gap-x-3 p-2 rounded-lg hover:bg-muted transition border-b">
					<Checkbox />
					<div class="w-2 h-2 rounded-full bg-destructive"></div>
					<task.icon class="w-5 h-5 text-muted-foreground" />
					<div class="flex-1">
						<p class="text-sm font-medium">{task.title}</p>
						<p class="text-xs text-muted-foreground">{task.due}</p>
					</div>
					<Button size="icon" variant="ghost" class="text-destructive">
						<Trash2 class="w-4 h-4" />
					</Button>
				</div>
			{/each}
			<Button variant="link" class="mt-2 text-xs text-primary w-fit mx-auto">
				See More Tasks
			</Button>
		</Card.Content>
	</Card.Root>
</section>
