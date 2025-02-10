<script lang="ts">
	import { pricingPageQuestions } from "$lib/data/faq";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import CtaCard from "$lib/components/cta-card.svelte";
	import Questions from "$lib/components/questions.svelte";
	import PricingPlan from "$lib/components/pricing-plan.svelte";
</script>

<section class="py-32 px-4 lg:px-0 max-w-6xl w-full">
	<div class="flex flex-col items-center gap-y-8 text-center">
		<h2 class="text-3xl md:text-4xl font-swiss max-w-2xl leading-title">
			Find the Perfect Plan for Your Job Search Success
		</h2>
		<p class="text-base md:text-lg text-muted-foreground max-w-3xl">
			Whether you’re exploring new opportunities or looking for a complete career upgrade, we have a plan tailored for you.
		</p>
	</div>
	<div class="flex items-center gap-x-4 mt-16 w-full">
		<PricingPlan plan="free" />
		<PricingPlan plan="standard" />
		<PricingPlan plan="premium" />
	</div>
	<Separator class="w-full mt-16" />
	<div class="flex flex-col gap-y-4 mt-16 items-center">
		<p class="text-base md:text-lg text-muted-foreground max-w-3xl">
			Need help deciding? We’re here for you! Contact us for personalized recommendations.
		</p>
		<Button href="/contact" size="lg">
			Contact us
		</Button>
	</div>
</section>

<section class="flex flex-col items-center gap-y-16 pb-36 pt-12 px-4 lg:px-0 w-full max-w-6xl">
	<h2 class="text-3xl md:text-4xl text-center font-swiss max-w-2xl leading-title">
		Got Questions About Pricing? We’ve Got You Covered
	</h2>
	<div class="flex flex-col gap-y-8 w-1/2 items-center">
		<Questions questions={pricingPageQuestions} />
	</div>
</section>

<section class="px-4 lg:px-0 w-full max-w-6xl py-12">
	<CtaCard />
</section>
