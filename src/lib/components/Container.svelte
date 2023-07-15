<script lang="ts">
	export let customClass = '';
</script>

<div class="container flex flex-col relative {customClass}">
	<slot />
</div>

<style>
	.container {
		transition: background-color 200ms ease-in-out;
	}
</style>
