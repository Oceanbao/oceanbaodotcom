<script lang="ts">
	import { slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import IconMenu from './IconMenu.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { headerOn } from '$lib/store';

	let currentRoute = $page.route;
	let lastY = 0;
	let currentY = 0;
	let isScrollUp = false;

	$: if (currentRoute !== $page.route) $headerOn = false;

	function toggleHeader() {
		$headerOn = !$headerOn;
	}

	function handleScroll() {
		if (currentY > lastY) {
			isScrollUp = false;
		}
		if (currentY < lastY) {
			isScrollUp = true;
			$headerOn = false;
		}
		lastY = currentY <= 0 ? 0 : currentY;
	}
</script>

<svelte:window bind:scrollY={currentY} on:scroll={handleScroll} />

<header
	class="fixed top-0 left-0 w-screen flex flex-col z-30 banner transition-colors duration-200 ease-in-out"
	class:headerOn={$headerOn === true}
	class:slide-in={isScrollUp}
	class:slide-out={currentY !== 0 && !isScrollUp}
>
	<div
		class="flex justify-between py-2 px-4"
		class:border-headerOn={$headerOn}
		class:border-headerOff={$headerOn === false}
	>
		<a href="/"><img src="/oblogo-circle.png" alt="logo" width="48px" height="48px" /></a>
		<ThemeToggle />
		<button on:click={toggleHeader}><IconMenu open={$headerOn} /></button>
	</div>

	{#if $headerOn}
		<nav class="bg-primary flex flex-col px-4" transition:slide>
			<a class="nav-link text-secondary" href="/blog">Blog</a>
			<a class="nav-link text-secondary" href="/blog">News</a>
			<a class="nav-link text-secondary" href="/blog">Something</a>
		</nav>
	{/if}
</header>

<style lang="postcss">
	.banner {
		background-color: theme(colors.secondary);
	}

	.border-headerOff {
		border-bottom: 2px solid theme(colors.primary);
	}
	.border-headerOn {
		border-bottom: 1px solid theme(colors.secondary);
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

	.headerOn {
		background-color: theme(colors.primary);
	}

	.nav-link {
		padding: 1rem 0;
		background-color: theme(colors.primary);
	}
</style>
