<script lang="ts">
	import { fly } from 'svelte/transition';
	import { Moon, Sun } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/theme';
	import { headerOn } from '$lib/store';
</script>

<button on:click={toggleTheme} aria-label="Toggle theme" class:headerOn={$headerOn}>
	{#if $theme === 'dark'}
		<div in:fly={{ y: 10 }}>
			<Sun />
		</div>
	{:else}
		<div in:fly={{ y: -10 }}>
			<Moon />
		</div>
	{/if}
</button>

<style>
	button {
		padding: 0;
		font-weight: inherit;
		background: none;
		border: none;
		box-shadow: none;
		overflow: hidden;
	}

	button > * {
		display: flex;
		gap: 2rem;
		color: var(--color-primary);
	}
	button.headerOn > * {
		display: flex;
		gap: 2rem;
		color: var(--color-secondary);
	}
</style>
