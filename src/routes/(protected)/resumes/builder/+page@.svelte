<script lang="ts">
	import { ArrowLeft, GripVertical, Plus } from "lucide-svelte";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import { Button } from "$lib/components/ui/button";
	import * as Accordion from "$lib/components/ui/accordion";
</script>

<div class="flex flex-col bg-muted h-screen">
	<div class="flex items-center justify-between h-[73px] p-4 bg-sidebar z-50 border-b">
		<Button variant="ghost" size="icon">
			<ArrowLeft />
		</Button>
	</div>

	<div class="flex flex-col relative w-full h-full overflow-hidden">
		<div class="flex flex-col w-[300px] bg-white h-[calc(100%-32px)] rounded-xl border p-4 shadow absolute left-4 top-4 z-10">
			<div>
				<h3 class="font-medium">Resumes Section</h3>
				<p class="text-sm text-muted-foreground">
					Drag and drop sections to build your resume. Click on a section to edit its content.
				</p>
			</div>
			<Accordion.Root
				type="multiple"
				value={["item-1", "item-2", "item-3"]}
				class="my-4"
			>
				<Accordion.Item value="item-1">
					<Accordion.Trigger class="-mx-4 px-4">
						Basic Info
					</Accordion.Trigger>
					<Accordion.Content>
						<div class="flex flex-col gap-y-2">
							<div class="flex justify-between items-center px-4 py-2 rounded-lg border bg-muted/50">
								<div class="flex flex-col">
									<p class="text-sm font-medium">
										John Doe | Frontend Developer
									</p>
									<p class="text-xs text-muted-foreground">
										Company | Job Role
									</p>
								</div>
								<GripVertical size={14} class="text-muted-foreground/50" />
							</div>
							<div class="flex justify-between items-center px-4 py-2 rounded-lg border bg-muted/50">
								<div class="flex flex-col">
									<p class="text-sm font-medium">
										Stockholm | Sweden
									</p>
									<p class="text-xs text-muted-foreground">
										City | Country
									</p>
								</div>
								<GripVertical size={14} class="text-muted-foreground/50" />
							</div>
							<div class="flex justify-between items-center px-4 py-2 rounded-lg border bg-muted/50">
								<div class="flex flex-col">
									<p class="text-sm font-medium">
										johndoe@email.com
									</p>
									<p class="text-xs text-muted-foreground">
										Email
									</p>
								</div>
								<GripVertical size={14} class="text-muted-foreground/50" />
							</div>
						</div>
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-2">
					<Accordion.Trigger class="-mx-4 px-4">
						Experience
					</Accordion.Trigger>
					<Accordion.Content>
						<div class="py-4">Hello world</div>
					</Accordion.Content>
				</Accordion.Item>
				<Accordion.Item value="item-3">
					<Accordion.Trigger class="-mx-4 px-4">
						Education
					</Accordion.Trigger>
					<Accordion.Content>
						<div class="py-4">Hello world</div>
					</Accordion.Content>
				</Accordion.Item>
			</Accordion.Root>
		</div>
		<ScrollArea class="flex flex-col h-full">
			<div class="flex flex-col items-center py-4 gap-y-3 h-full">
				<div class="flex flex-col gap-y-1 h-full">
					<p class="text-muted-foreground text-sm">Page 1</p>
					<div class="w-[600px] h-[880px] bg-background shadow border rounded-xl shrink-0">
					</div>
				</div>
				<div class="flex flex-col gap-y-0.5 h-full">
					<p class="text-muted-foreground text-sm">Page 2</p>
					<div class="w-[600px] h-[880px] bg-background shadow border rounded-xl shrink-0">
					</div>
				</div>
			</div>
		</ScrollArea>
		<div class="flex flex-col w-[300px] bg-white h-[calc(100%-32px)] rounded-xl border px-4 pt-4 shadow absolute right-4 top-4 z-10">
			<div>
				<h3 class="font-medium">Pages</h3>
				<p class="text-sm text-muted-foreground">
					Rearrange, duplicate, or add new pages to your resume.
				</p>
			</div>
			<ScrollArea class="flex flex-col h-full w-full">
				<div class="flex items-center flex-col gap-y-3 mt-4 pb-4">
					{#each { length: 2 }, i}
						<div class="flex flex-col gap-y-1 w-full">
							<p class="text-muted-foreground text-sm">Page {i+1}</p>
							<div class="w-full max-w-[50%] aspect-[210/297] bg-muted/50 border rounded-lg">
							</div>
						</div>
					{/each}
				</div>
				<Button variant="outline" class="w-full">
					<Plus />
					Add new page
				</Button>
			</ScrollArea>
		</div>
	</div>
</div>
