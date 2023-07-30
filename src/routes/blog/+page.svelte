<script lang="ts">
	import * as config from '$lib/config';
	import { catsSelected } from '$lib/store.js';

	import Box from '$lib/components/Box.svelte';
	import CardBlog from '$lib/components/CardBlog.svelte';
	import Container from '$lib/components/Container.svelte';
	import CategorySelector from '$lib/components/CategorySelector.svelte';

	export let data;

	let { posts, categories } = data;

	let postsSelected = [...posts];

	function filterPost(cats: Set<string>, postsCopied: typeof posts) {
		if (cats.size === 0) return postsCopied;

		const postsFiltered = postsCopied.filter((post) => {
			for (const cat of post.categories) {
				if (cats.has(cat)) {
					return true;
				}
			}
			return false;
		});

		return postsFiltered;
	}

	$: postsSelected = filterPost($catsSelected, posts);
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Container customClass="pt-6 px-6">
	<h2 class="text-secondary my-12 text-5xl font-brand font-bold">blog</h2>
	<div class="mt-6 flex-1 justify-between items-start">
		<CategorySelector {categories} />
	</div>

	<div class="flex-1 flex-col mt-12">
		{#each postsSelected as post (post.title)}
			<Box --width="full" --translate="-4px" --border="1px" --padding="0" customClass="mb-12">
				<a slot="content" href="/blog/{post.slug}">
					<CardBlog
						title={post.title}
						categories={post.categories}
						description={post.description}
						date={post.date}
					/>
				</a>
			</Box>
		{/each}
	</div>
</Container>
