<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import CtaCard from "$lib/components/cta-card.svelte";
	import Questions from "$lib/components/questions.svelte";

	const questions = [
		{
			question: "Can I customize my resume with Career Pilot?",
			answer: "Yes, Career Pilot offers AI-powered resume tailoring to help match your resume to specific job descriptions in just a few clicks.",
		},
		{
			question: "What job platforms does Career Pilot integrate with?",
			answer: "Currently, Career Pilot integrates seamlessly with LinkedIn and Indeed, with more platforms to be added in the future.",
		},
		{
			question: "Does Career Pilot help with cover letters?",
			answer: "Absolutely! Our tools can generate personalized cover letters tailored to each job you apply for, saving you hours of work.",
		},
		{
			question: "Is it possible to automate job applications?",
			answer: "Yes, Career Pilot allows semi-automatic and fully automatic applications for jobs, helping you apply faster and more efficiently.",
		},
		{
			question: "How does Career Pilot save me time during my job search?",
			answer: "Career Pilot automates key tasks like resume customization, cover letter generation, and job applications, allowing you to focus on preparing for interviews.",
		},
		{
			question: "Can I track the jobs I’ve applied for?",
			answer: "Yes, Career Pilot includes a job tracking feature to help you stay organized and monitor your application progress.",
		},
	];
</script>

<section class="py-32 px-4 lg:px-0 w-full bg-accent">
	<div class="flex flex-col items-center gap-y-8 text-center">
		<h2 class="text-3xl md:text-4xl font-swiss max-w-2xl leading-title">
			Save Time and Land Your
			<span class="text-primary relative">
				Dream
				<div class="top-4 left-3 absolute bg-primary/20 w-full h-full z-10"></div>
			</span>
			<span class="text-primary relative">
				Job
				<div class="top-4 right-3 absolute bg-primary/20 w-full h-full z-10"></div>
			</span>
			with Smart Tools
		</h2>
		<p class="text-base md:text-lg text-muted-foreground max-w-3xl">
			Leverage the power of automation, AI, and smart integrations to simplify your job search, customize your applications, and achieve career success faster.
		</p>
		<div class="flex gap-x-4">
			<Button href="/sign-up" size="lg">
				Start saving time now
			</Button>
		</div>
	</div>
</section>

<section class="flex flex-col gap-y-16 py-36 px-4 lg:px-0 w-full max-w-6xl">
	<div class="flex gap-x-16">
		<div class="flex flex-col gap-y-8 w-full py-16">
			<h2 class="text-3xl md:text-4xl font-swiss max-w-2xl leading-title">
				Transform how you apply with these key features.
			</h2>
			<p class="text-base md:text-lg text-muted-foreground max-w-3xl">
				Discover how our features work together to save time, enhance applications, and land your dream job faster.
			</p>
		</div>
		<div class="flex w-full bg-background border border-primary rounded-xl py-6 pr-6">
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

<section class="flex flex-col items-center pb-36 pt-12 px-4 lg:px-0 w-full">
	<div class="flex flex-col items-center gap-y-24 max-w-6xl w-full">
		<h2 class="text-3xl md:text-4xl text-center font-swiss max-w-2xl leading-title">
			Take a closer look at what Career Pilot can do.
		</h2>
		<div class="flex flex-col gap-y-20 w-full">
			{#each { length: 4 }, index}
				<div class={[ "flex gap-x-16", index % 2 == 0 && "flex-row-reverse" ]}>
					<div class="flex flex-col gap-y-8 w-full py-16">
						<h2 class="text-2xl md:text-3xl font-swiss max-w-2xl leading-title">
							Smart AI-powered resume tailoring.
						</h2>
						<p class="text-base md:text-lg text-muted-foreground max-w-3xl">
							Easily customize your resume to match any job description with just a few clicks. Our AI highlights your most relevant skills and experiences, helping you stand out and land interviews faster.
						</p>
						<Button href="/sign-up" class="w-fit">
							Learn more
						</Button>
					</div>
					<div class="flex w-full bg-background border border-primary rounded-xl pt-6 px-6">
						<div class="w-full h-full bg-primary"></div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="flex flex-col items-center bg-secondary py-36 px-4 lg:px-0 w-full relative">
	<div class="flex flex-col items-center gap-y-24 max-w-6xl w-full z-10">
		<h2 class="text-3xl md:text-4xl text-center font-swiss max-w-2xl leading-title">
			Seamless Job Search Integration with
			<span class="text-primary relative">
				LinkedIn
				<div class="top-4 left-2 absolute bg-primary/20 w-full h-full z-10"></div>
			</span>
			and
			<span class="text-primary relative">
				Indeed
				<div class="top-4 left-2 absolute bg-primary/20 w-full h-full z-10"></div>
			</span>
			.
		</h2>
		<div class="flex flex-col gap-y-12">
			<div class="flex gap-x-8 w-full bg-background border border-primary rounded-xl p-8">
				<div class="flex flex-col gap-y-4 justify-center">
					<img src="/icons/linked-in.png" alt="LinkedIn" class="h-8 object-fit w-fit" />
					<p class="text-muted-foreground">
						Connect your LinkedIn profile to import job postings, track saved jobs, and keep your professional network in sync.
					</p>
					<Button href="/sign-up" class="w-fit">
						Start connecting
					</Button>
				</div>
				<div class="w-[600px] h-[250px] bg-primary shrink-0"></div>
			</div>
			<div class="flex gap-x-8 w-full bg-background border border-primary rounded-xl p-8">
				<div class="flex flex-col gap-y-4 justify-center">
					<img src="/icons/indeed.png" alt="LinkedIn" class="h-8 object-fit w-fit" />
					<p class="text-muted-foreground">
						Manage job searches and applications on Indeed directly through Career Pilot, saving you time and effort.
					</p>
					<Button href="/sign-up" class="w-fit">
						Start connecting
					</Button>
				</div>
				<div class="w-[600px] h-[250px] bg-primary shrink-0"></div>
			</div>
		</div>
	</div>

	<div
		class="absolute inset-0 bg-white/30"
		style="clip-path: polygon(0% 0%, 100% 0%, 100% 40%, 70% 30%, 30% 30%, 0% 40%)"
	></div>
</section>

<section class="flex flex-col items-center gap-y-16 py-36 px-4 lg:px-0 w-full max-w-6xl">
	<h2 class="text-3xl md:text-4xl text-center font-swiss max-w-2xl leading-title">
		Frequently Asked Questions About Our Features
	</h2>
	<div class="flex flex-col gap-y-8 w-1/2 items-center">
		<Questions {questions} />
	</div>
</section>

<section class="px-4 lg:px-0 w-full max-w-6xl py-12">
	<CtaCard />
</section>
