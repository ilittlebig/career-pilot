<script lang="ts">
	import {
		FileText,
		ClockIcon,
		BriefcaseIcon,
		Clock,
		Calendar,
		Target,
		FileUp,
		FilePen,
		Search,
		Bookmark,
		Briefcase,
		Eye,
		Star,
		MapPinIcon,
		Mail,
		Edit,
		Send,
		Trash2,
	} from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import * as Card from "$lib/components/ui/card";
	import * as Accordion from "$lib/components/ui/accordion";
	import { Checkbox } from "$lib/components/ui/checkbox";
	import MetricCard from "$lib/components/dashboard/metric-card.svelte";
	import QuickAction from "$lib/components/dashboard/quick-action.svelte";

	const colors = {
		blue: { card: "bg-blue-50 border-blue-200", text: "text-blue-600" },
		yellow: { card: "bg-yellow-50 border-yellow-200", text: "text-yellow-600" },
		green: { card: "bg-green-50 border-green-200", text: "text-green-600" },
		purple: { card: "bg-purple-50 border-purple-200", text: "text-purple-600" },
		gray: { card: "bg-gray-50 border-gray-200", text: "text-gray-600" }
	};

	const metrics = [
		{ name: "Job Applications", value: 12, icon: FileText, color: colors.blue },
		{ name: "In Review", value: 3, icon: Clock, color: colors.yellow },
		{ name: "Upcoming Interviews", value: 1, icon: Calendar, color: colors.green },
		{ name: "Job Matches", value: 5, icon: Target, color: colors.purple }
	];

	const actions = [
		{ label: "Upload Resume", icon: FileUp, url: "/resumes", variant: "default" },
		{ label: "Create Cover Letter", icon: FilePen, url: "/cover-letters", variant: "default" },
		{ label: "Find Jobs", icon: Search, url: "/job-search", variant: "outline" },
		{ label: "View Saved Jobs", icon: Bookmark, url: "/saved-jobs", variant: "ghost"	},
	];

	const activity = [
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

	const jobRecommendations = [
		{
			company: "Google",
			title: "Frontend Developer",
			location: "Stockholm, Sweden",
			type: "Full-time",
			postedAgo: "2 days ago",
		},
		{
			company: "Spotify",
			title: "UI/UX Designer",
			location: "Remote",
			type: "Contract",
			postedAgo: "1 day ago",
		},
		{
			company: "Meta",
			title: "Software Engineer",
			location: "Gothenburg, Sweden",
			type: "Full-time",
			postedAgo: "5 hours ago",
		},
		{
			company: "Amazon",
			title: "Backend Developer",
			location: "Malmö, Sweden",
			type: "Full-time",
			postedAgo: "3 days ago",
		},
		{
			company: "Tesla",
			title: "Product Manager",
			location: "Remote",
			type: "Part-time",
			postedAgo: "4 days ago",
		},
	];

	const typeColors = {
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

	const tasks = [
		{ title: "Prepare for Microsoft Interview", icon: Calendar, due: "Thursday, 10 AM" },
		{ title: "Follow up on Spotify Application", icon: Mail, due: "2 days ago" },
		{ title: "Refine Resume for Google AI Role", icon: Edit, due: "Drafting phase" },
		{ title: "Send Thank-You Email to Meta Recruiter", icon: Send, due: "Pending" }
	];

	const groupedActivity = activity.reduce((acc, item) => {
		if (!acc[item.group]) {
			acc[item.group] = [];
		}
		acc[item.group].push(item);
		return acc;
	}, {});
</script>

<div class="flex flex-col gap-y-6">
	<div class="flex flex-col">
		<h1 class="text-2xl font-semibold">Welcome back, Elias!</h1>
		<p class="text-muted-foreground">
			Here’s a quick summary of your job search progress and tools to help you land your next opportunity faster.
		</p>
	</div>
	<section class="grid grid-cols-4 gap-6">
		{#each metrics as metric}
			<MetricCard {metric} />
		{/each}
	</section>
	<section class="space-x-4">
		{#each actions as action}
			<QuickAction {action} />
		{/each}
	</section>
	<section class="flex flex-col gap-y-4 mt-8">
		<h2 class="text-lg font-semibold">Recent Activity</h2>
		<Card.Root>
			<Card.Content class="p-4">
				<Accordion.Root type="multiple" value={[ "Today" ]}>
					{#each Object.keys(groupedActivity) as group}
						<Accordion.Item value={group} class="bg-accent first:rounded-t-lg last:rounded-b-lg first:border-x border-x border-t last:border-b">
							<Accordion.Trigger class="flex justify-between items-center w-full p-4 border-b">
								<span class="text-sm font-medium">{group}</span>
							</Accordion.Trigger>
							<Accordion.Content class="bg-white">
								<ul class="space-y-4 p-4">
									{#each groupedActivity[group] as item}
										<li class={`flex items-start gap-x-3 p-3 rounded-lg shadow-sm ${typeColors[item.type].background}`}>
											<item.icon class={`${typeColors[item.type].icon}`} size={20} />
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
	<section class="flex flex-col gap-y-4">
		<h2 class="text-lg font-semibold">Upcoming Tasks</h2>
		<Card.Root>
			<Card.Content class="p-4">
				{#each tasks.slice(0, 3) as task, index}
					<div class="flex items-center gap-x-3 p-2 rounded-lg hover:bg-muted transition border-b">
						<Checkbox />
						<div class="w-2 h-2 rounded-full bg-destructive" />
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
	<section class="flex flex-col gap-y-4">
		<h2 class="text-lg font-semibold">Recommended Jobs</h2>
		<Card.Root>
			<Card.Content class="p-4">
				{#each jobRecommendations.slice(0, 3) as job}
					<div class="flex justify-between items-center border-b last:border-none py-3 hover:bg-muted rounded-md px-2">
						<div class="flex flex-col">
							<p class="text-sm text-muted-foreground">{job.company}</p>
							<p class="text-base font-medium">{job.title}</p>
							<p class="flex items-center gap-x-1 text-sm text-muted-foreground">
								<MapPinIcon size={14} />
								{job.location} •
								<BriefcaseIcon size={14} />
								{job.type} •
								<ClockIcon size={14} />
								{job.postedAgo}
							</p>
						</div>
						<div class="flex gap-x-2">
							<Button variant="outline" size="sm">Save</Button>
							<Button size="sm">Apply Now</Button>
						</div>
					</div>
				{/each}
				<div class="text-center pt-3">
					<Button variant="link" size="sm">See More Jobs</Button>
				</div>
			</Card.Content>
		</Card.Root>
	</section>
</div>
