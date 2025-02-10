<script lang="ts">
	import { Copyright } from "lucide-svelte";
	import { Separator } from "$lib/components/ui/separator";
	import * as Accordion from "$lib/components/ui/accordion";

	interface Section {
		title: string;
		items: {
			href: string;
			name: string;
		}[];
	}

	const sections: Section[] = [
		{
			title: "Product",
			items: [
				{ href: "/features", name: "Features" },
				{ href: "/pricing", name: "Pricing" },
			],
		},
		{
			title: "Company",
			items: [
				{ href: "/about", name: "About" },
			],
		},
		{
			title: "Support",
			items: [
				{ href: "/contact", name: "Contact" },
			],
		},
		{
			title: "Legal",
			items: [
				{ href: "/privacy", name: "Privacy" },
				{ href: "/terms", name: "Terms" },
			],
		},
	];
</script>

<footer class="flex flex-col gap-y-8 py-12 mx-auto max-w-6xl w-full px-4 xl:px-0">
	<div class="flex flex-col gap-y-8 md:hidden w-full">
		<Accordion.Root type="single" class="w-full">
			{#each sections as section, index}
				<Accordion.Item value={index.toString()}>
					<Accordion.Trigger>{section.title}</Accordion.Trigger>
					<Accordion.Content>
						<div class="flex flex-col gap-y-2">
							{#each section.items as page}
								<a href={page.href}>{page.name}</a>
							{/each}
						</div>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		</Accordion.Root>
	</div>
	<div class="md:flex justify-between hidden">
		{#each sections as section}
			<div class="flex flex-col gap-y-3">
				<h3 class="text-muted-foreground font-semibold text-sm">{section.title}</h3>
				{#each section.items as item}
					<a href={item.href} class="text-muted-foreground hover:text-primary">
						{item.name}
					</a>
				{/each}
			</div>
		{/each}
	</div>
	<Separator class="md:block hidden" />
	<div class="flex justify-between">
		<p class="flex items-center gap-x-2 text-muted-foreground">
			<Copyright size={16} />
			2025 Career Pilot. All rights reserved.
		</p>
		<div class="flex gap-x-2">
			<a href="/" class="fa-brands fa-twitter text-muted-foreground hover:text-primary" aria-label="Twitter"></a>
			<a href="/" class="fa-brands fa-discord text-muted-foreground hover:text-primary" aria-label="Discord"></a>
		</div>
	</div>
</footer>
