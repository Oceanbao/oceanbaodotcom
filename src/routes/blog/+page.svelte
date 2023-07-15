<script lang="ts">
	import * as config from '$lib/config';

	import Box from '$lib/components/Box.svelte';
	import CardBlog from '$lib/components/CardBlog.svelte';
	import Container from '$lib/components/Container.svelte';

	export let data;

	let { posts } = data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Container>
	<h2 class="text-dark my-12 text-5xl uppercase font-tasaexplorer font-tasaexplorer-bold">Blog</h2>
	<div class="mt-6 flex-1 justify-between items-start">
		<p class="font-tasaorbiter text-lg font-tasaorbiter-medium mb-4">
			Encore orchestrates infrastructure for seamless development, from local to cloud.
		</p>
		<p class="font-tasaorbiter text-base font-tasaorbiter-regular">
			Break free from manual work to run locally, costly shared test environments, and tedious
			Terraform.
		</p>

		<div class="flex justify-between mt-6">
			<div class="h-12 inline-block group relative">
				<div class="under absolute inset-0 bg-gradient-to-r" />
				<button
					type="button"
					class="
          h-full w-full px-6
          inline-flex justify-center items-center uppercase
          font-tasaorbiter font-tasaorbiter-semibold

          bg-black text-light relative

          transition-transform duration-100 ease-in-out
          group-active:-translate-x-1 group-active:-translate-y-1
          group-hover:-translate-x-1 group-hover:-translate-y-1

          disabled:cursor-not-allowed
          disabled:group-active:translate-x-0 disabled:group-active:translate-y-0
          disabled:group-hover:translate-x-0 disabled:group-hover:translate-y-0
          disabled:opacity-50
        ">Get started</button
				>
			</div>
			<div class="h-12 inline-block group relative">
				<div class="absolute inset-0 bg-black" />
				<button
					type="button"
					class="
          h-full w-full px-6
          inline-flex justify-center items-center uppercase
          font-tasaorbiter font-tasaorbiter-semibold

          bg-light text-black border-2 border-black relative

          transition-transform duration-100 ease-in-out
          group-active:-translate-x-1 group-active:-translate-y-1
          group-hover:-translate-x-1 group-hover:-translate-y-1

          disabled:cursor-not-allowed
          disabled:group-active:translate-x-0 disabled:group-active:translate-y-0
          disabled:group-hover:translate-x-0 disabled:group-hover:translate-y-0
          disabled:opacity-50
        ">Watch demo</button
				>
			</div>
		</div>
	</div>

	<div class="flex-1 flex-col mt-12">
		{#each posts as post}
			<Box --width="full" --translate="-4px" --border="1px" --padding="0" customClass="mb-12">
				<svelte:fragment slot="content">
					<a href="/blog/{post.slug}">
						<CardBlog
							title={post.title}
							slug={post.slug}
							categories={post.categories}
							description={post.description}
							date={post.date}
						/>
					</a>
				</svelte:fragment>
			</Box>
		{/each}
	</div>
</Container>

<style>
	.under {
		--tw-gradient-stops: #ff8719 0%, #4651ff 20.13%, #93c0ff 41.517%, #d4db00 61.635%,
			#ffe87a 81.138%, #ff8719 100%;
		--under-start-position: calc(150% - 0%);

		background-size: 300% 300%;
		animation: ScrollGradientXY 45s linear infinite;
		background-position: var(--under-start-position) var(--under-start-position);
	}

	@keyframes ScrollGradientXY {
		0% {
			background-position: calc(150% + var(--under-start-position))
				calc(150% + var(--under-start-position));
		}
		100% {
			background-position: calc(-150% + var(--under-start-position))
				calc(-150% + var(--under-start-position));
		}
	}
</style>
