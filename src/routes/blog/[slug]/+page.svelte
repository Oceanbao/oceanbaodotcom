<script lang="ts">
	import Box from '$lib/components/Box.svelte';
	import Container from '$lib/components/Container.svelte';
	import ArrowLeft from '$lib/components/icons/ArrowLeft.svelte';
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
				<ArrowLeft />
			</a>
		</Box>

		<h1 class="my-8 text-brand-secondary text-4xl font-brand font-bold">
			{data.meta.title}
		</h1>

		<hgroup class="text-base font-brand font-normal text-brand-secondary">
			{#each data.meta.categories as category}
				<span>&num;{category}</span>
			{/each}
		</hgroup>

		<p class="font-brand text-brand-secondary text-xl font-bold mb-4">
			{data.meta.description}
		</p>

		<Box --width="100%" --translate="-6px" --border="1px" --padding="0" active={false}>
			<img slot="content" src="https://encore.dev/assets/blog/eda-cover1.jpg" alt="cover" />
		</Box>

		<div
			class="
        prose
        prose-headings:text-brand-secondary
        prose-p:text-brand-secondary
        prose-strong:text-brand-secondary
        prose-strong:font-bold
        prose-code:text-brand-secondary
        prose-code:font-semibold
        font-brand text-brand-secondary font-normal
        my-8
      "
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
