<script lang="ts">
	import * as config from '$lib/config';

	import Box from '$lib/components/Box.svelte';
	import CardBlog from '$lib/components/CardBlog.svelte';
	import Container from '$lib/components/Container.svelte';
	import Button from '$lib/components/Button.svelte';

	export let data;

	let { posts } = data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Container customClass="pt-20">
	<h2 class="text-secondary my-12 text-5xl uppercase font-tasaexplorer font-tasaexplorer-bold">
		Blog
	</h2>
	<div class="mt-6 flex-1 justify-between items-start">
		<p class="font-tasaorbiter text-secondary text-lg font-tasaorbiter-medium mb-4">
			Encore orchestrates infrastructure for seamless development, from local to cloud.
		</p>
		<p class="font-tasaorbiter text-base text-secondary font-tasaorbiter-regular">
			Break free from manual work to run locally, costly shared test environments, and tedious
			Terraform.
		</p>

		<div class="flex justify-between mt-6">
			<Box --width="128px" --translate="-4px" --border="0px" --padding="0px">
				<Button slot="content">Get Started</Button>
			</Box>
			<Box --width="128px" --translate="-4px" --border="0px" --padding="0px">
				<Button slot="content" variant="secondary">Get Started</Button>
			</Box>
		</div>
	</div>

	<div class="flex-1 flex-col mt-12">
		{#each posts as post}
			<Box --width="full" --translate="-4px" --border="1px" --padding="0" customClass="mb-12">
				<a slot="content" href="/blog/{post.slug}">
					<CardBlog
						title={post.title}
						slug={post.slug}
						categories={post.categories}
						description={post.description}
						date={post.date}
					/>
				</a>
			</Box>
		{/each}
	</div>
</Container>
