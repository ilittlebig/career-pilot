<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
	import { Textarea } from "$lib/components/ui/textarea";
	import Questions from "$lib/components/questions.svelte";

	const questions = [
		{
			question: "How can I contact Career Pilot for support?",
			answer: "You can contact us directly through the contact form on this page. Simply fill out your name, email, and message, and we'll get back to you as soon as possible.",
		},
		{
			question: "What is the response time for support inquiries?",
			answer: "We aim to respond to all inquiries within 24 hours. For premium users, we prioritize responses to ensure faster support.",
		},
		{
			question: "Can I provide feedback or suggestions?",
			answer: "Absolutely! We welcome all feedback and suggestions. You can use the contact form to share your thoughts and ideas with us.",
		},
		{
			question: "Do you offer live chat or phone support?",
			answer: "Currently, we offer email-based support through the contact form. Live chat and phone support may be added in the future.",
		},
		{
			question: "Where can I find updates about Career Pilot?",
			answer: "You can follow us on social media or check our blog for the latest updates, features, and announcements. Links to our platforms are in the footer.",
		},
		{
			question: "What should I do if I encounter a technical issue?",
			answer: "If you experience any technical issues, let us know through the contact form. Please include details about the problem, and we’ll work to resolve it promptly.",
		},
	];
</script>

<section class="py-36 px-4 lg:px-0 w-full max-w-6xl">
	<div class="flex flex-col gap-y-16">
		<div class="flex flex-col items-center gap-y-8 text-center">
			<h2 class="text-3xl md:text-4xl font-swiss max-w-2xl leading-title">
				Get in touch with Career Pilot.
			</h2>
			<p class="text-base md:text-lg text-muted-foreground max-w-3xl">
				We’re here to help you achieve your career goals. Reach out to us with any questions, feedback, or support inquiries.
			</p>
		</div>
		<div class="flex gap-x-8">
			<div class="flex flex-col justify-center gap-y-4 w-2/3">
				<div class="space-y-2">
					<Label>Name</Label>
					<Input
						placeholder="John Doe"
					/>
				</div>
				<div class="space-y-2">
					<Label>Email</Label>
					<Input
						placeholder="email@domain.com"
					/>
				</div>
				<div class="flex flex-col gap-y-2 h-full max-h-[300px]">
					<Label>Message</Label>
					<Textarea
						placeholder="Write your message here..."
						class="h-full resize-none"
					/>
				</div>
				<Button class="w-fit">
					Send message
				</Button>
			</div>
			<div class="flex w-full bg-background border border-primary rounded-xl p-6">
				<div class="w-full min-h-[550px] bg-primary"></div>
			</div>
		</div>
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
