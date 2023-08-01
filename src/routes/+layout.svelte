<script lang="ts">
	import '../app.css';

	import Banner from '$lib/components/Banner.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<Banner />

<main class="container min-h-screen mx-auto my-16">
	<slot />
</main>

<Footer />

<style lang="postcss">
	:global(*) {
		transition: background-color 300ms ease-in-out;
	}

	:global(body) {
		min-height: 100%;
		color: theme('colors.brand-secondary');
		background-color: theme('colors.brand-primary');
	}
</style>
