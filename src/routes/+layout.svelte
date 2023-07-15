<script lang="ts">
	import '../app.css';

	import Banner from '$lib/components/Banner.svelte';
	import Page from '$lib/components/Page.svelte';
</script>

<Banner />

<Page>
	<slot />
</Page>

<style lang="postcss">
	:global(body) {
		height: 100%;
		background-color: theme(colors.light);
		max-inline-size: 1440px;
		margin-inline: auto;
	}
</style>
