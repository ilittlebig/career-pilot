<div class="flex flex-col gap-y-4 w-[500px] bg-accent border border-primary rounded-xl p-6 -mt-[150px] translate-y-1/2 shrink-0 shadow-[0_5px_0_#000]">
	<img src="/icons/quote.svg" alt="Qoute" class="w-12 h-12" />
	<div class="text-muted-foreground">
		This platform
		<span class="font-semibold relative">
			completely transformed
			<div class="top-1 left-1 absolute bg-primary/20 w-full h-full -z-10"></div>
		</span>
		my job search! The AI-powered tools made it so easy to tailor my resume to each job, and I landed my
		<span class="font-semibold relative">
			dream position
			<div class="top-1 left-1 absolute bg-primary/20 w-full h-full -z-10"></div>
		</span>
		in just
		<span class="font-semibold relative">
			three weeks
			<div class="top-1 left-1 absolute bg-primary/20 w-full h-full -z-10"></div>
		</span>
		I can’t recommend it enough!
	</div>
	<div class="flex gap-x-1">
		{#each { length: 4 }}
			<img src="/icons/star.svg" alt="Star" class="w-9 h-9" />
		{/each}
		<img src="/icons/star-half.svg" alt="Half Star" class="w-9 h-9" />
	</div>
	<div class="flex flex-col">
		<p class="text-lg font-semibold">Elias Sjödin</p>
		<p class="text-sm text-muted-foreground">CEO - Career Pilot</p>
	</div>
</div>
