<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import TestimonialCard from "$lib/components/testimonial-card.svelte";
	import CtaCard from "$lib/components/cta-card.svelte";
	import Questions from "$lib/components/questions.svelte";

	const questions = [
		{
			question: "What is Career Pilot, and how does it work?",
			answer: "Career Pilot is a platform that streamlines your job search by automating key tasks like tailoring resumes, generating cover letters, and applying to jobs either semi-automatically or fully automatically. Simply upload your resume, select job listings, and let our AI handle the rest.",
		},
		{
			question: "Can I customize my applications for specific job postings?",
			answer: "Yes, Career Pilot allows you to customize each application. Our AI analyzes job descriptions and suggests tailored changes to your resume and cover letter to highlight your relevant skills and experience.",
		},
		{
			question: "How does the semi-automatic mode work?",
			answer: "In semi-automatic mode, our platform suggests changes to your resume and cover letter based on the job description, but you have full control to review and edit them before submitting the application.",
		},
		{
			question: "What is required for the fully automated mode?",
			answer: "For the fully automated mode, you simply need to upload your resume and set preferences for the types of jobs you're looking for. Career Pilot will handle the entire application process for you, including tailoring documents and submitting applications.",
		},
		{
			question: "How does Career Pilot ensure my data is secure?",
			answer: "We prioritize your privacy and security. All your data is encrypted and stored securely, and we comply with industry-standard security practices to protect your personal information.",
		},
		{
			question: "Can Career Pilot guarantee I’ll get a job?",
			answer: "While we can’t guarantee a job, Career Pilot significantly improves your chances by optimizing your applications, saving you time, and helping you stand out in the hiring process.",
		},
		{
			question: "What types of jobs can I apply for using Career Pilot?",
			answer: "Career Pilot supports a wide range of industries and job types, from entry-level to executive roles. You can set your preferences to focus on specific industries, locations, or roles.",
		},
		{
			question: "Can I track my applications through Career Pilot?",
			answer: "Yes, Career Pilot provides an easy-to-use dashboard where you can track the progress of all your applications, including submission statuses and interview updates.",
		},
		{
			question: "What happens if I want to pause or stop my job search?",
			answer: "You can pause or stop your job search at any time through the settings in your Career Pilot account. Your data will remain saved, so you can pick up where you left off later.",
		},
		{
			question: "Does Career Pilot integrate with job boards like LinkedIn and Indeed?",
			answer: "Yes, Career Pilot integrates with major job boards like LinkedIn, Indeed, and others to provide a seamless job search experience. You can also import job listings directly into the platform for AI-driven application tailoring.",
		},
		{
			question: "Is there a trial version of Career Pilot available?",
			answer: "Yes, we offer a free trial that allows you to explore the platform’s features, including AI-assisted resume customization and application tracking, before committing to a subscription plan.",
		},
		{
			question: "How much time can Career Pilot save me in my job search?",
			answer: "Career Pilot can save you hours of manual effort by automating resume tailoring, cover letter creation, and job application submissions, allowing you to focus on preparing for interviews and finding the right job fit.",
		},
		{
			question: "What are the pricing plans for Career Pilot?",
			answer: "We offer flexible pricing plans based on your needs. You can choose between monthly and annual subscriptions, with access to all features, including AI automation and tracking tools.",
		},
		{
			question: "What kind of support does Career Pilot provide?",
			answer: "Our support team is available to help you with any questions or issues. We provide email support and a detailed help center with step-by-step guides to get you started.",
		},
		{
			question: "How can I cancel my subscription?",
			answer: "You can cancel your subscription at any time through your account settings. Your access will continue until the end of your billing period, and your data will remain saved if you choose to return later.",
		},
	];
</script>

<section class="py-32 px-4 lg:px-0">
	<div class="flex flex-col items-center gap-y-8 text-center">
		<h1 class="text-3xl md:text-5xl font-swiss tracking-tight leading-title max-w-4xl">
			Streamline Your Job Search
			<br />
			with
			<span class="text-primary relative">
				AI-Powered
				<div class="top-4 left-3 absolute bg-primary/20 w-full h-full -z-10"></div>
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
					<div class="w-[320px] h-48 bg-primary shrink-0"></div>
				</div>
				<div class="flex w-full bg-background border border-primary rounded-xl pt-6 pb-6">
					<div class="flex flex-col gap-y-3 justify-end pl-6 pb-6 pr-6">
						<h3 class="font-semibold text-xl">List view</h3>
						<p class="text-muted-foreground">
							Organize and assign tasks. With lists, teams see immediately what they need to do, which tasks are a priority, and when work is due.
						</p>
					</div>
					<div class="w-[344px] h-48 bg-primary shrink-0"></div>
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
		<Questions {questions} />
	</div>
</section>

<section class="px-4 lg:px-0 w-full max-w-6xl py-12">
	<CtaCard />
</section>
