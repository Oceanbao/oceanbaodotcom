<script lang="ts">
	import '../app.css';

	import Banner from '$lib/components/Banner.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Banner />

<main class="container mx-auto px-4">
	<slot />
</main>

<Footer />

<style lang="postcss">
	:global(body) {
		height: 100%;
		color: theme('colors.brand-secondary');
		background-color: theme('colors.brand-primary');
		transition: background-color 200ms ease-in-out;
	}
</style>
