<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import CtaCard from "$lib/components/cta-card.svelte";
	import Questions from "$lib/components/questions.svelte";
	import PricingPlan from "$lib/components/pricing-plan.svelte";

	const questions = [
		{
			question: "What payment methods do you accept?",
			answer: "We accept payments via major credit cards, Apple Pay, Google Pay, and local payment options like Swish. Our payment processing is powered by Stripe for a secure and seamless experience.",
		},
		{
			question: "Is there a free plan available?",
			answer: "Yes, we offer a free plan that includes basic features such as resume tailoring and LinkedIn integration. It's a great way to get started with Career Pilot!",
		},
		{
			question: "Can I switch plans at any time?",
			answer: "Absolutely! You can upgrade or downgrade your plan at any time. Changes will be applied to your next billing cycle.",
		},
		{
			question: "Do you offer refunds if I’m not satisfied?",
			answer: "Yes, we offer a 7-day money-back guarantee on all paid plans. If you're not satisfied, you can request a refund within this period.",
		},
		{
			question: "Is there a discount for annual subscriptions?",
			answer: "Yes! By choosing an annual subscription, you can save up to 20% compared to monthly billing. It's our way of thanking you for your commitment.",
		},
		{
			question: "What happens if my payment fails?",
			answer: "If your payment fails, we’ll notify you and retry the payment. You’ll have 7 days to update your payment method to avoid any interruptions to your service.",
		},
	];
</script>

<section class="py-32 px-4 lg:px-0 max-w-6xl w-full">
	<div class="flex flex-col items-center gap-y-8 text-center">
		<h1 class="text-3xl md:text-5xl font-swiss tracking-tight leading-title max-w-4xl">
			Find the Perfect Plan for Your Job Search Success
		</h1>
		<p class="text-base md:text-lg text-muted-foreground max-w-3xl">
			Whether you’re exploring new opportunities or looking for a complete career upgrade, we have a plan tailored for you.
		</p>
	</div>
	<div class="flex gap-x-4 mt-16 w-full">
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
		<Questions {questions} />
	</div>
</section>

<section class="px-4 lg:px-0 w-full max-w-6xl py-12">
	<CtaCard />
</section>
