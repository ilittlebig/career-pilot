<script lang="ts">
	import { ArrowRight, Plus } from "lucide-svelte";
	import { Separator } from "$lib/components/ui/separator";
	import { Button } from "$lib/components/ui/button";
	import { Input } from "$lib/components/ui/input";
	import { ScrollArea } from "$lib/components/ui/scroll-area";
	import { Label } from "$lib/components/ui/label";
	import * as Select from "$lib/components/ui/select";
	import * as Dialog from "$lib/components/ui/dialog";

	let open = $state(true);
</script>

<Dialog.Root bind:open>
	<Dialog.Trigger>
		{#snippet child({ props })}
			<Button {...props}>
				<Plus />
				Create Resume
			</Button>
		{/snippet}
	</Dialog.Trigger>
	<Dialog.Content class="flex flex-col gap-0 max-w-[966px] w-full max-h-[699px] h-full items-start p-6">
		<Dialog.Header class="mb-8">
			<Dialog.Title>
				Let’s get to know you
			</Dialog.Title>
			<Dialog.Description>
				We’ll use this to tailor your resume to your goals.
			</Dialog.Description>
		</Dialog.Header>

		<ScrollArea class="flex flex-col w-full pb-6">
			<div class="flex flex-col gap-y-4 w-full p-1">
				<div class="space-y-1.5 max-w-[300px]">
					<Label>Full Name</Label>
					<Input placeholder="John Doe" />
				</div>
				<div class="space-y-1.5 max-w-[300px]">
					<Label>Job Title</Label>
					<Input placeholder="Frontend Developer" />
				</div>
				<div class="space-y-1.5 max-w-[300px]">
					<Label>Location</Label>
					<Input placeholder="Sweden, Stockholm" />
					<p class="text-sm text-muted-foreground">
						Helps tailor your resume for local and international opportunities.
					</p>
				</div>
				<div class="space-y-1.5 max-w-[300px]">
					<Label>Field</Label>
					<Select.Root type="single" name="field">
						<Select.Trigger>
							Select a field
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="junior" label="Junior">
								Junior
							</Select.Item>
							<Select.Item value="mid" label="Mid">
								Mid
							</Select.Item>
							<Select.Item value="senior" label="Senior">
								Senior
							</Select.Item>
						</Select.Content>
					</Select.Root>
				</div>
				<div class="space-y-1.5">
					<Label>Experience Level</Label>
					<div class="flex gap-x-2">
						<Button variant="outline">
							Junior
						</Button>
						<Button variant="outline">
							Mid
						</Button>
						<Button variant="outline">
							Senior
						</Button>
						<Button variant="outline">
							Lead
						</Button>
					</div>
				</div>
				<div class="space-y-1.5">
					<Label>Preferred Job Type</Label>
					<div class="flex gap-x-2">
						<Button variant="outline">
							Full-time
						</Button>
						<Button variant="outline">
							Part-time
						</Button>
						<Button variant="outline">
							Freelance
						</Button>
						<Button variant="outline">
							Internship
						</Button>
					</div>
				</div>
			</div>
		</ScrollArea>

		<Dialog.Footer class="flex sm:flex-col w-full">
			<Separator class="mb-4" />
			<div class="flex justify-between items-center">
				<p class="text-sm text-muted-foreground">Step 1 of 4</p>
				<div class="flex gap-x-2">
					<Button variant="ghost" class="w-fit">
						Create Manually
					</Button>
					<Button variant="outline" class="w-fit">
						Skip
					</Button>
					<Button class="w-fit">
						Next
						<ArrowRight />
					</Button>
				</div>
			</div>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
