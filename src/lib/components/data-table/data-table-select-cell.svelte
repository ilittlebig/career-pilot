<script lang="ts">
	import * as Select from "$lib/components/ui/select";

	interface Props {
		value: string;
	}

	const statusColors: Record<string, string> = {
		interview_scheduled: "text-yellow-700",
		in_review: "text-purple-600",
		rejected: "text-red-500",
		offer_received: "text-green-600",
		phone_interview: "text-yellow-800",
		awaiting_response: "text-gray-600",
		coding_challenge: "text-blue-600",
		hr_interview: "text-teal-600",
	};

	const applicationStatuses = [
		{ value: "interview_scheduled", label: "Interview Scheduled" },
		{ value: "in_review", label: "In Review" },
		{ value: "rejected", label: "Rejected" },
		{ value: "offer_received", label: "Offer Received" },
		{ value: "phone_interview", label: "Phone Interview" },
		{ value: "awaiting_response", label: "Awaiting Response" },
		{ value: "coding_challenge", label: "Coding Challenge" },
		{ value: "hr_interview", label: "HR Interview" },
	];

	let { value }: Props = $props();
</script>

<Select.Root type="single" name="applicationStatus" bind:value>
	<Select.Trigger class="w-[200px] text-xs h-8">
		{#if value}
			<span class={[ "font-medium", statusColors[value] ]}>
				{applicationStatuses.find(s => s.value === value)?.label}
			</span>
		{:else}
			<span class="text-gray-500">Select Status</span>
		{/if}
	</Select.Trigger>
	<Select.Content>
		{#each applicationStatuses as status}
			<Select.Item
				value={status.value}
				label={status.label}
				class={[ statusColors[status.value], "data-[highlighted]:" + statusColors[status.value] ]}
			>
				{status.label}
			</Select.Item>
		{/each}
	</Select.Content>
</Select.Root>
