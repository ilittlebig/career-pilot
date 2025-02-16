<script lang="ts">
	import {
		FileUp,
		FilePen,
		Search,
		Bookmark,
	} from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";

	interface QuickAction {
		label: string;
		icon: any;
		url: string;
		variant: "default" | "outline" | "ghost";
	}

	const actions: QuickAction[] = [
		{ label: "Upload Resume", icon: FileUp, url: "/resumes", variant: "default" },
		{ label: "Create Cover Letter", icon: FilePen, url: "/cover-letters", variant: "default" },
		{ label: "Find Jobs", icon: Search, url: "/job-search", variant: "outline" },
		{ label: "View Saved Jobs", icon: Bookmark, url: "/saved-jobs", variant: "ghost"	},
	];
</script>

<section class="space-x-4">
	{#each actions as action}
		<Button variant={action.variant}>
			<action.icon size={28} />
			<p class="text-sm font-medium">{action.label}</p>
		</Button>
	{/each}
</section>
