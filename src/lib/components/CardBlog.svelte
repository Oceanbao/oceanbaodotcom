<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let customClass = '';
	export let title: string;
	export let date: string;
	export let description: string;
	export let categories: string[];
</script>

<div class="flex flex-col font-brand p-4 surface-primary {customClass}">
	<div class="text-lg font-semibold normal-case mb-4">
		{title}
	</div>
	<div class="text-sm font-normal normal-case mb-4">
		{description}
	</div>

	<div class="flex justify-between items-center">
		<div class="">
			{formatDate(date)}
		</div>
		<div class="flex gap-2">
			{#each categories as category}
				<div class="text-xs border border-brand-secondary rounded px-2 py-1 uppercase">
					{category}
				</div>
			{/each}
		</div>
	</div>
</div>
