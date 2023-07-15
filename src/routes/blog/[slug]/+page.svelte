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

<Container>
	<article class="flex-col felx-1 pt-8">
		<a href="/blog">
			<Box --width="94px" --translate="-4px" --border="1px" --padding="8px">
				<svg slot="content" class="h-4" fill="none" stroke="currentColor" viewBox="0 0 35.7 16"
					><path
						stroke-width="3"
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M11.6,2C9.2,5.7,5.8,8,2,8c3.8,0,7.2,2.3,9.6,6"
					/><path stroke-width="3" stroke-linecap="round" d="M33.8,8h-31" /></svg
				>
			</Box>
		</a>

		<h1 class="my-8 text-4xl font-tasaexplorer font-tasaexplorer-bold">
			{data.meta.title}
		</h1>

		<hgroup>
			{#each data.meta.categories as category}
				<span>&num;{category}</span>
			{/each}
		</hgroup>

		<p class="font-tasaorbiter text-xl font-tasaorbiter-regular mb-4">
			{data.meta.description}
		</p>

		<Box --width="100%" --translate="-6px" --border="1px" --padding="0" active={false}>
			<img slot="content" src="https://encore.dev/assets/blog/eda-cover1.jpg" alt="cover" />
		</Box>

		<div
			class="mt-8 mx-auto max-w-3xl font-tasaexplorer text-base font-tasaexplorer-regular [&>p]:mb-4"
		>
			<svelte:component this={data.content} />
		</div>
	</article>
</Container>

<div class="flex-col flex-1 pt-8" />

<style>
	article :global(pre) {
		overflow-x: scroll;
	}
</style>
