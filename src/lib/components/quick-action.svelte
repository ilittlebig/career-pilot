<script lang="ts">
	type Color = { card: string; text: string; };

	interface QuickAction {
		label: string;
		icon: any;
		url: string;
		color: Color;
	}

	let { action }: { action: QuickAction } = $props();
</script>

<a
	href={action.url}
	class={[`
		flex flex-col items-center justify-center gap-y-2 p-4
		rounded-lg border shadow transition hover:shadow-md
	`, action.color.card, action.color.text]
}>
	<action.icon size={28} class={action.color} />
	<p class="text-sm font-medium">{action.label}</p>
</a>
