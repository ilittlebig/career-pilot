<script lang="ts">
	import { page } from "$app/state";
	let { href, children } = $props();
</script>

<a
	href={href}
	class={[
		"text-sm text-muted-foreground hover:text-primary",
		page.route.id === href && "text-primary"
]}>
	{@render children()}
</a>
