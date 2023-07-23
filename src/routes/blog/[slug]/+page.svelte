<script lang="ts">
	import Box from '$lib/components/Box.svelte';
	import Container from '$lib/components/Container.svelte';
	import { formatDate } from '$lib/utils';
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<Container customClass="px-6">
	<article class="flex-col felx-1 pt-8">
		<Box --width="4rem" --translate="-4px" --border="2px" --padding="0px">
			<a slot="content" href="/blog" class="surface-primary flex justify-center items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="lucide lucide-move-left"><path d="M6 8L2 12L6 16" /><path d="M2 12H22" /></svg
				>
			</a>
		</Box>

		<h1 class="my-8 text-secondary text-4xl font-tasaexplorer font-tasaexplorer-bold">
			{data.meta.title}
		</h1>

		<hgroup class="text-base font-tasaexplorer font-tasaexplorer-regular text-secondary">
			{#each data.meta.categories as category}
				<span>&num;{category}</span>
			{/each}
		</hgroup>

		<p class="font-tasaorbiter text-secondary text-xl font-tasaorbiter-regular mb-4">
			{data.meta.description}
		</p>

		<Box --width="100%" --translate="-6px" --border="1px" --padding="0" active={false}>
			<img slot="content" src="https://encore.dev/assets/blog/eda-cover1.jpg" alt="cover" />
		</Box>

		<div
			class="mt-8 mx-auto max-w-3xl font-tasaexplorer text-secondary text-base font-tasaexplorer-regular [&>p]:mb-4"
		>
			<svelte:component this={data.content} />
		</div>
	</article>
</Container>

<style>
	article :global(pre) {
		overflow-x: scroll;
	}
</style>
