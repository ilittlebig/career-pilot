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
		{ label: "Create Cover Letter", icon: FilePen, url: "/cover-letters", variant: "outline" },
		{ label: "View Saved Jobs", icon: Bookmark, url: "/saved-jobs", variant: "ghost"	},
	];
</script>

{#each actions as action}
	<Button variant={action.variant} href={action.url}>
		<action.icon size={28} />
		<p class="text-sm font-medium">{action.label}</p>
	</Button>
{/each}
