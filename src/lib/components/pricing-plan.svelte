<script lang="ts">
	import { Check } from "lucide-svelte";
	import { Button } from "$lib/components/ui/button";
	import { Badge } from "$lib/components/ui/badge";

	interface Props {
		plan: "free" | "standard" | "premium";
	}

	const plans = {
		free: [
			"Resume Tailoring",
			"Access to LinkedIn Integration",
			"5 Job Applications/Month",
		],
		standard: [
			"Resume Tailoring",
			"Access to LinkedIn and Indeed Integration",
			"Unlimited Job Applications",
			"Cover Letter Generator",
		],
		premium: [
			"Resume Tailoring",
			"Access to LinkedIn and Indeed Integration",
			"Unlimited Job Applications",
			"Cover Letter Generator",
			"AI Job Recommendations",
			"Priority Support",
		],
	};

	let { plan }: Props = $props();
	const capitalizedPlan = plan[0].toUpperCase() + plan.substring(1);
	const recommended = plan === "standard";
</script>

<div class={[
	"w-full p-8 rounded-xl bg-accent border border-primary flex flex-col justify-between",
	recommended ? "min-h-[575px]" : "min-h-[520px]"
]}>
	<div>
		<h2 class="flex items-center gap-x-2 font-bold text-2xl">
			{capitalizedPlan}
			<Badge class={[ !recommended && "hidden" ]}>
				Recommended
			</Badge>
		</h2>
		<div class="flex items-end mt-4">
			<h3 class="font-swiss text-4xl">
				{plan === "free" ? "$0.00" : plan === "standard" ? "$9.99" : "$19.99"}
			</h3>
			<p class="text-muted-foreground">/month</p>
		</div>
		<ul class="mt-8 text-muted-foreground text-sm md:text-base space-y-4">
			{#each plans[plan] as feature}
				<li class="flex items-center gap-x-2">
					<Check class="text-green-500" />
					{feature}
				</li>
			{/each}
		</ul>
	</div>
	{#if plan === "free"}
		<Button href="/sign-up" variant="outline" size="lg" class="w-full mt-6">
			Start your free trial now
		</Button>
	{:else}
		<Button href="/sign-up" size="lg" class="w-full mt-6">
			Get started
		</Button>
	{/if}
</div>
