<script lang="ts">
	import { formatDate } from '$lib/utils';

	export let title: string;
	export let date: string;
	export let description: string;
	export let categories: string[];
</script>

<div class="font-brand p-4 surface-primary flex flex-col">
	<div class="flex-grow-0 flex-shrink-0 lg:mr-16 hidden lg:block">
		<img
			class="w-48 aspect-square object-cover"
			src="https://encore.dev/assets/blog/eda-cover1.jpg"
			alt="cover"
		/>
	</div>
	<div class="flex-grow">
		<!-- <div class="mb-8 hidden lg:flex"> -->
		<!-- 	<div class="border border-primary text-primary rounded px-4 py-2 uppercase"> -->
		<!-- 		Systems Design -->
		<!-- 	</div> -->
		<!-- 	<div class="flex-auto self-end text-secondary text-left">{date} / {slug} / 13 Min Read</div> -->
		<!-- </div> -->
		<div>
			<div class="text-lg font-semibold normal-case mb-4">
				{title}
			</div>
			<div class="text-sm font-normal normal-case mb-4">
				{description}
			</div>
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
</div>
