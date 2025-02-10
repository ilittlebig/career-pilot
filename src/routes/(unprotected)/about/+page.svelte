<script lang="ts">
	import { Button } from "$lib/components/ui/button";
	import CtaCard from "$lib/components/cta-card.svelte";
</script>

<section class="py-36 px-4 lg:px-0 w-full max-w-6xl">
	<div class="flex gap-x-16">
		<div class="flex flex-col gap-y-8 w-full py-16">
			<h2 class="text-3xl md:text-4xl font-swiss max-w-2xl leading-title">
				Empowering job seekers with smarter tools.
			</h2>
			<p class="text-base md:text-lg text-muted-foreground max-w-3xl">
				At Career Pilot, our mission is to simplify the job search process, empowering individuals to land their dream jobs faster through AI-powered tools and seamless integrations.
			</p>
		</div>
		<div class="flex w-full bg-background border border-primary rounded-xl px-6 pb-6 pr-6">
			<div class="w-full h-full bg-primary"></div>
		</div>
	</div>
</section>

<section class="pb-36 py-12 px-4 lg:px-0">
	<div class="flex flex-col gap-y-16 items-center max-w-6xl">
		<div class="flex flex-col items-center gap-y-8 w-full text-center z-10">
			<h2 class="text-3xl md:text-4xl font-swiss max-w-2xl leading-title">
				Our Mission: Transforming job hunting.
			</h2>
			<p class="text-base md:text-lg max-w-3xl text-muted-foreground">
				We believe job searching doesn’t need to be tedious. Our platform combines automation, AI, and strategic integrations to give users a competitive edge while saving time.
			</p>
		</div>
		<div class="grid grid-cols-3 gap-x-16">
			{#each { length: 3 }}
				<div class="flex flex-col gap-y-4">
					<div class="flex items-center justify-center w-12 h-12 rounded-full bg-accent">
						<img src="icons/quote.svg" alt="Icon" class="w-6 h-6" />
					</div>
					<div class="flex flex-col gap-y-2">
						<h3 class="font-semibold text-xl">Efficiency: Automate repetitive tasks.</h3>
						<p class="text-sm text-muted-foreground">
							Streamline your job search by automating resume tailoring, cover letter creation, and job applications. Save time and focus on opportunities that matter.
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="pb-36 pt-12 px-4 lg:px-0 w-full max-w-6xl">
	<div class="flex flex-row-reverse gap-x-16">
		<div class="flex flex-col gap-y-16 w-full py-16">
			<div class="flex flex-col gap-y-8">
				<h2 class="text-3xl md:text-4xl font-swiss max-w-2xl leading-title">
					Empowering job seekers to achieve their career aspirations.
				</h2>
				<p class="text-base md:text-lg text-muted-foreground max-w-3xl">
					At Career Pilot, we help job seekers land opportunities that match their dreams. With cutting-edge tools and user-friendly design, we aim to save time, reduce stress, and boost success.
				</p>
			</div>
			<div class="flex flex-col gap-y-8">
				{#each { length: 3 }}
					<div class="flex flex-col">
						<h3 class="font-bold text-lg">Integrity</h3>
						<p class="text-muted-foreground">
							We prioritize transparency and reliability in every interaction.
						</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="flex w-full bg-background border border-primary rounded-xl pr-6 py-6">
			<div class="w-full h-full bg-primary"></div>
		</div>
	</div>
</section>

<section class="pb-36 py-12 px-4 lg:px-0 w-full max-w-6xl">
	<div class="flex flex-col gap-y-16">
		<div class="flex flex-col items-center gap-y-8 text-center">
			<h2 class="text-3xl md:text-4xl font-swiss max-w-2xl leading-title">
				Looking Ahead: Our vision for the future.
			</h2>
			<p class="text-base md:text-lg text-muted-foreground max-w-3xl">
				At Career Pilot, we're constantly innovating to bring you smarter tools, more powerful integrations, and a seamless job-seeking experience. Together, we'll redefine success in job hunting.
			</p>
		</div>
		<div class="flex w-full bg-background border border-primary rounded-xl pt-6 px-6">
			<div class="w-full min-h-[550px] bg-primary"></div>
		</div>
	</div>
</section>

<section class="px-4 lg:px-0 w-full max-w-6xl py-12">
	<CtaCard />
</section>
