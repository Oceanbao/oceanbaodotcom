<script lang="ts">
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import IconMenu from './IconMenu.svelte';

	let toggled = false;
	let currentRoute = $page.route;
	let lastY = 0;
	let currentY = 0;
	let isScrollUp = false;

	$: if (currentRoute !== $page.route) toggled = false;

	function toggle() {
		toggled = !toggled;
	}

	function handleScroll() {
		if (currentY > lastY) {
			isScrollUp = false;
		}
		if (currentY < lastY) {
			isScrollUp = true;
			toggled = false;
		}
		lastY = currentY <= 0 ? 0 : currentY;
	}
</script>

<svelte:window bind:scrollY={currentY} on:scroll={handleScroll} />

<header
	class="fixed top-0 left-0 w-screen flex flex-col z-30 banner transition-colors duration-200 ease-in-out"
	class:toggled
	class:slide-in={isScrollUp}
	class:slide-out={currentY !== 0 && !isScrollUp}
>
	<div
		class="flex justify-between py-2 px-4"
		class:border={!toggled}
		class:border-toggled={toggled}
	>
		<a href="/"><img src="/oblogo-circle.png" alt="logo" width="48px" height="48px" /></a>
		<button on:click={toggle}><IconMenu open={toggled} /></button>
	</div>

	{#if toggled}
		<nav class="bg-dark flex flex-col px-4" transition:slide>
			<a class="nav-link text-light" href="/blog">Blog</a>
			<a class="nav-link text-light" href="/blog">News</a>
			<a class="nav-link text-light" href="/blog">Something</a>
		</nav>
	{/if}
</header>

<style lang="postcss">
	.banner {
		background-color: theme(colors.light);
	}

	.border {
		border-bottom: 2px solid theme(colors.dark);
	}
	.border-toggled {
		border-bottom: 1px solid theme(colors.light);
	}

	.slide-in {
		animation: slide-in 0.5s forwards;
	}

	@keyframes slide-in {
		0% {
			transform: translateY(-100%);
		}
		100% {
			transform: translateY(0%);
		}
	}

	.slide-out {
		animation: slide-out 0.5s forwards;
	}

	@keyframes slide-out {
		0% {
			transform: translateY(0%);
		}
		100% {
			transform: translateY(-100%);
		}
	}

	.toggled {
		background-color: theme(colors.dark);
	}

	.nav-link {
		padding: 1rem 0;
		background-color: theme(colors.dark);
	}
</style>
