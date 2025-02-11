<script lang="ts">
	import { page as s_page } from "$app/state";
	import {
		LayoutDashboard,
		Briefcase,
		FileText,
		FileSignature,
		Link2,
		Lightbulb,
		BarChart3,
		Settings,
		LifeBuoy,
		MessageCircle,
	} from "lucide-svelte";
	import * as Sidebar from "$lib/components/ui/sidebar";

	const pages = [
		{ url: "/dashboard", name: "Overview", icon: LayoutDashboard },
		{ url: "/applications", name: "Job Applications", icon: Briefcase, disabled: true },
		{ url: "/resumes", name: "Resumes", icon: FileText, disabled: true },
		{ url: "/cover-letters", name: "Cover Letters", icon: FileSignature, disabled: true },
		{ url: "/integrations", name: "Integrations", icon: Link2, disabled: true },
		{ url: "/recommendations", name: "Job Recommendations", icon: Lightbulb, disabled: true },
		{ url: "/analytics", name: "Analytics", icon: BarChart3, disabled: true },
		{ url: "/settings", name: "Settings", icon: Settings, disabled: true },
	];

	const helpPages = [
		{ url: "/support", name: "Support", icon: LifeBuoy },
		{ url: "/feedback", name: "Feedback", icon: MessageCircle },
	];
</script>

<Sidebar.Root collapsible="icon">
	<Sidebar.Header class="flex justify-center h-[72px] ml-auto mr-auto">
		<a href="/dashboard" class="flex items-center gap-x-2 font-bold text-lg z-10">
			<img src="icons/rocket.svg" alt="Icon" class="w-4 h-4" />
			Career Pilot
		</a>
	</Sidebar.Header>
	<Sidebar.Separator class="mx-0" />
	<Sidebar.Content>
		<Sidebar.Group class="h-full">
			<Sidebar.GroupLabel>Projects</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each pages as page}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton isActive={s_page.url.pathname === page.url}>
								{#snippet child({ props })}
									<a href={page.url} {...props}>
										<page.icon />
										<span>{page.name}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Help</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each helpPages as helpPage}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href={helpPage.url} {...props}>
										<helpPage.icon />
										<span>{helpPage.name}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
