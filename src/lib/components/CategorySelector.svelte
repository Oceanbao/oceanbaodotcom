<script lang="ts">
	import { catsSelected } from '$lib/store';
	import { tick } from 'svelte';

	export let categories: Map<string, number>;

	async function selectHandler(cat: string) {
		if ($catsSelected.has(cat)) {
			$catsSelected.delete(cat);
		} else {
			$catsSelected.add(cat);
		}

		// INFO: note the usage of `tick()`
		await tick();
		$catsSelected = $catsSelected;
	}
</script>

<div class="tag-selector flex gap-4 flex-wrap">
	{#each categories.entries() as [cat, count] (cat)}
		<button
			class="focus-ring rounded-md py-1 px-2 border-2 border-brand-secondary"
			on:click={() => selectHandler(cat)}
			class:selected={$catsSelected.has(cat)}
		>
			<span class="font-semibold">{cat}</span>
			<span class="ml-2 font-light">{count}</span>
		</button>
	{/each}
</div>

<style lang="postcss">
	.selected {
		color: theme('colors.brand-primary');
		background-color: theme('colors.brand-secondary');
	}
</style>
