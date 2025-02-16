<script lang="ts">
	import {
		Calendar,
		Briefcase,
		Eye,
		Star,
	} from "lucide-svelte";
	import { cn } from "$lib/utils/class";
	import * as Card from "$lib/components/ui/card";
	import * as Accordion from "$lib/components/ui/accordion";

	type ActivityType = "applied" | "viewed" | "recommendation" | "interview";

	interface Activity {
		id: string;
		type: ActivityType;
		icon: any;
		title: string;
		details: string;
		time: string;
		group: string;
		[key: string]: any;
	}

	const typeColors: Record<string, any> = {
		applied: {
			icon: "text-gray-500",
			background: "bg-gray-50"
		},
		viewed: {
			icon: "text-blue-500",
			background: "bg-blue-50"
		},
		recommendation: {
			icon: "text-yellow-500",
			background: "bg-yellow-50"
		},
		interview: {
			icon: "text-green-500",
			background: "bg-green-50"
		}
	};

	const activity: Activity[] = [
		{
			id: "item-1",
			type: "applied",
			icon: Briefcase,
			title: "Applied to Frontend Developer at Google",
			details: "Application submitted on Jan 10, 2025.",
			time: "1 hour ago",
			group: "Today"
		},
		{
			id: "item-2",
			type: "viewed",
			icon: Eye,
			title: "Your resume was viewed by Meta",
			details: "Viewed on Jan 9, 2025.",
			time: "Yesterday",
			group: "Yesterday"
		},
		{
			id: "item-3",
			type: "recommendation",
			icon: Star,
			title: "New job recommendation: Senior UX Designer at Apple",
			details: "Recommended on Jan 8, 2025.",
			time: "2 days ago",
			group: "This Week"
		},
		{
			id: "item-4",
			type: "interview",
			icon: Calendar,
			title: "Upcoming interview with Microsoft",
			details: "Scheduled for Jan 15, 2025, at 10:00 AM.",
			time: "In 3 days",
			group: "Upcoming"
		}
	];

	const groupedActivity: Record<string, Activity[]> = activity.reduce((acc, item) => {
		if (!acc[item.group]) {
			acc[item.group] = [];
		}
		acc[item.group].push(item);
		return acc;
	}, {} as Record<string, Activity[]>);
</script>

<section class="flex flex-col gap-y-4 mt-0">
	<h2 class="text-lg font-semibold">Recent Activity</h2>
	<Card.Root>
		<Card.Content class="p-4">
			<Accordion.Root type="multiple" value={[ "Today" ]}>
				{#each Object.keys(groupedActivity) as group}
					<Accordion.Item
						value={group}
						class="bg-accent first:rounded-t-lg last:rounded-b-lg first:border-x border-x border-t last:border-b"
					>
						<Accordion.Trigger class="flex justify-between items-center w-full p-4 border-b">
							<span class="text-sm font-medium">{group}</span>
						</Accordion.Trigger>
						<Accordion.Content class="bg-white">
							<ul class="space-y-4 p-4">
								{#each groupedActivity[group] as item}
									<li class={cn(
										"flex items-start gap-x-3 p-3 rounded-lg shadow-sm",
										typeColors[item.type].background
									)}>
										<item.icon class={typeColors[item.type].icon} size={20} />
										<div class="flex flex-col">
											<p class="text-sm font-medium">{item.title}</p>
											<span class="text-xs text-gray-500">{item.time}</span>
										</div>
									</li>
								{/each}
							</ul>
						</Accordion.Content>
					</Accordion.Item>
				{/each}
			</Accordion.Root>
		</Card.Content>
	</Card.Root>
</section>
