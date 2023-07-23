<script lang="ts">
	import '../app.css';

	import Banner from '$lib/components/Banner.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Banner />

<main class="container mx-auto mt-16">
	<slot />
</main>

<Footer />

<style lang="postcss">
	:global(*) {
		transition: background-color 600ms ease-in-out;
	}

	:global(body) {
		height: 100%;
		color: theme('colors.brand-secondary');
		background-color: theme('colors.brand-primary');
	}
</style>
