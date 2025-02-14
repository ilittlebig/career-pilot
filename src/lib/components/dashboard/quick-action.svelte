<script lang="ts">
	import { Button } from "$lib/components/ui/button";

	interface QuickAction {
		label: string;
		icon: any;
		url: string;
		variant: "default" | "outline" | "ghost";
	}

	let { action }: { action: QuickAction } = $props();
</script>

<Button variant={action.variant}>
	<action.icon size={28} />
	<p class="text-sm font-medium">{action.label}</p>
</Button>
