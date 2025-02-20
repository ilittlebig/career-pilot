<script lang="ts">
	import { ArrowRight } from "lucide-svelte";
	import { landingPageQuestions } from "$lib/data/faq";
	import { Separator } from "$lib/components/ui/separator";
	import { Button } from "$lib/components/ui/button";
	import TestimonialCard from "$lib/components/testimonial-card.svelte";
	import CtaCard from "$lib/components/cta-card.svelte";
	import Questions from "$lib/components/questions.svelte";
</script>

<section class="py-32 px-4 lg:px-0">
	<div class="flex flex-col items-center gap-y-8 text-center">
		<h1 class="text-3xl md:text-5xl font-swiss tracking-tight leading-title max-w-4xl">
			Streamline Your Job Search
			<br />
			with
			<span class="text-primary relative">
				AI-Powered
				<div class="top-4 left-3 absolute bg-primary/20 w-full h-full -z-10 blur"></div>
			</span>
			Applications
		</h1>
		<p class="text-base md:text-lg text-muted-foreground max-w-3xl">
			Boost your productivity by tailoring resumes and cover letters in seconds. Streamline your job search with our AI-powered tools, designed to help you stand out and save time.
		</p>
		<div class="flex gap-x-4">
			<Button href="/sign-up" size="lg">
				Get started now
			</Button>
			<Button href="/sign-up" variant="outline" size="lg">
				See how it works
			</Button>
		</div>
	</div>
</section>

<section class="flex flex-col items-center py-36 bg-accent px-4 lg:px-0 w-full">
	<div class="flex flex-col items-center gap-y-16 max-w-6xl w-full">
		<h2 class="text-3xl md:text-4xl text-center font-swiss max-w-2xl leading-title">
			Discover the features designed to boost your productivity.
		</h2>
		<div class="flex gap-x-4 w-full">
			<div class="flex flex-col gap-y-3">
				<div class="flex w-full bg-background border border-primary rounded-xl pt-6 pr-6">
					<div class="flex flex-col gap-y-3 justify-end pl-6 pb-6 pr-6">
						<h3 class="font-semibold text-xl">List view</h3>
						<p class="text-muted-foreground">
							Organize and assign tasks. With lists, teams see immediately what they need to do, which tasks are a priority, and when work is due.
						</p>
					</div>
					<div class="w-[320px] h-48 shrink-0">
						<img src="/mockups/job-applications.svg" class="object-left object-contain h-full" alt="lol" />
					</div>
				</div>
				<div class="flex w-full bg-background border border-primary rounded-xl pt-6 pb-6">
					<div class="flex flex-col gap-y-3 justify-end pl-6 pb-6 pr-6">
						<h3 class="font-semibold text-xl">List view</h3>
						<p class="text-muted-foreground">
							Organize and assign tasks. With lists, teams see immediately what they need to do, which tasks are a priority, and when work is due.
						</p>
					</div>
					<div class="w-[344px] h-48 shrink-0 relative">
						<img src="/mockups/job-application-card.svg" class="object-left object-cover h-full" alt="lol" />
						<img src="/mockups/application-status-dropdown.svg" class="absolute -right-8 h-36 top-1/2 translate-y-5" alt="lol" />
					</div>
				</div>
			</div>
			<div class="flex flex-col gap-y-3 w-2/3 bg-white border border-primary rounded-xl p-6">
					<div class="w-full h-full bg-primary"></div>
					<div class="flex flex-col gap-y-3 items-center">
						<h3 class="font-semibold text-xl">List view</h3>
						<p class="text-muted-foreground text-center">
							Organize and assign tasks. With lists, teams see immediately what they need to do, which tasks are a priority, and when work is due.
						</p>
					</div>
			</div>
		</div>
		<Separator class="w-full" />
		<div class="flex flex-col items-center gap-y-4 max-w-3xl">
			<p class="text-base md:text-lg text-muted-foreground text-center">
				These are just some of the features available. Explore more tools like resume tailoring, cover letters, and job recommendations.
			</p>
			<Button href="/features">
				View all features
				<ArrowRight />
			</Button>
		</div>
	</div>
</section>

<section class="flex flex-col gap-y-16 py-36 px-4 lg:px-0 w-full max-w-6xl">
	<div class="flex gap-x-16">
		<div class="flex flex-col gap-y-8 w-full py-16">
			<h2 class="text-3xl md:text-4xl font-swiss max-w-2xl leading-title">
				See how easy it is to land your dream job.
			</h2>
			<p class="text-base md:text-lg text-muted-foreground max-w-3xl">
				Boost your productivity by tailoring resumes and cover letters in seconds. Streamline your job search with our AI-powered tools, designed to help you stand out and save time.
			</p>
			<Button href="/sign-up" size="lg" class="w-fit">
				Get started now
			</Button>
		</div>
		<div class="flex w-full bg-background border border-primary rounded-xl pt-6 px-6">
			<div class="w-full h-full bg-primary"></div>
		</div>
	</div>
	<div class="grid grid-cols-4 gap-x-16">
		{#each { length: 4 }}
			<div class="flex flex-col gap-y-4">
				<div class="flex items-center justify-center w-12 h-12 rounded-full bg-accent">
					<img src="icons/quote.svg" alt="Icon" class="w-6 h-6" />
				</div>
				<div class="flex flex-col gap-y-2">
					<h3 class="font-semibold text-xl">Task comments</h3>
					<p class="text-sm text-muted-foreground">
						Comment directly on a task to clarify exactly what needs to be done.
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>

<section class="flex flex-col w-full py-8 px-4 lg:px-0 overflow-hidden">
	<div class="flex flex-col items-center bg-secondary relative">
		<div class="flex flex-col items-center gap-y-8 w-full py-16 text-center z-10">
			<h2 class="text-3xl md:text-4xl font-swiss max-w-2xl leading-title">
				Trusted by job seekers worldwide.
			</h2>
			<p class="text-base md:text-lg max-w-3xl text-muted-foreground">
				From resume customization to application tracking, discover how our tools have empowered thousands of users to simplify their job search and achieve career success.
			</p>
		</div>
		<div
			class="absolute inset-0 bg-white/30"
			style="clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 70% 100%, 30% 100%, 0% 40%)"
		></div>
	</div>
	<div class="bg-secondary w-full mb-40 relative">
		<div class="flex justify-center gap-x-4">
			{#each { length: 6 }}
				<TestimonialCard />
			{/each}
		</div>
	</div>
</section>

<section class="flex flex-col items-center gap-y-16 py-36 px-4 lg:px-0 w-full max-w-6xl">
	<h2 class="text-3xl md:text-4xl text-center font-swiss max-w-2xl leading-title">
		Got Questions? We’ve Got Answers.
	</h2>
	<div class="flex flex-col gap-y-8 w-1/2 items-center">
		<Questions questions={landingPageQuestions} />
	</div>
</section>

<section class="px-4 lg:px-0 w-full max-w-6xl py-12">
	<CtaCard />
</section>
