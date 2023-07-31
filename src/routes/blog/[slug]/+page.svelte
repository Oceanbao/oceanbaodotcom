<script lang="ts">
	import Box from '$lib/components/Box.svelte';
	import Container from '$lib/components/Container.svelte';
	import ArrowLeft from '$lib/components/icons/ArrowLeft.svelte';
	import { formatDate } from '$lib/utils';

	export let data;
</script>

<svelte:head>
	<title>{data.frontmatter.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.frontmatter.title} />
</svelte:head>

<Container customClass="px-6 lg:pt-12 lg:px-32">
	<article
		class="lg:w-[80vw] max-w-3xl grid gap-16 auto-cols-auto grid-cols-1 auto-rows-auto
        font-brand text-brand-secondary font-normal
        my-8 mx-auto"
	>
		<div class="flex flex-col pb-8 border-b-[var(--theme-secondary)] border-b-2">
			<Box --width="4rem" --height="2rem" --translate="-4px" --border="1px" --padding="0px">
				<a
					slot="content"
					href="/blog"
					class="surface-primary h-full w-full flex justify-center items-center rounded-md"
				>
					<ArrowLeft />
				</a>
			</Box>

			<h1 class="heading my-8 text-brand-secondary text-4xl font-brand font-bold">
				{data.frontmatter.title}
			</h1>

			<p class="summary font-brand text-brand-secondary text-xl font-semibold mb-4">
				{data.frontmatter.description}
			</p>

			<div class="flex justify-between items-center">
				<div class="flex gap-2 my-4">
					{#each data.frontmatter.categories as category}
						<div class="text-base border border-brand-secondary rounded px-2 py-1 uppercase">
							<span class="bg-brand-primary">{category}</span>
						</div>
					{/each}
				</div>
				<span>{formatDate(data.frontmatter.date)}</span>
			</div>

			{#if data.frontmatter.aboveFoldImage}
				<Box
					--width="100%"
					--translate="-6px"
					--border="1px"
					--padding="0"
					active={false}
					customClass="my-4"
				>
					<img slot="content" src="https://encore.dev/assets/blog/eda-cover1.jpg" alt="cover" />
				</Box>
			{/if}
		</div>

		<div class="article">
			<svelte:component this={data.content} />
		</div>
	</article>
</Container>

<style>
	article :global(pre) {
		overflow-x: scroll;
	}
</style>
