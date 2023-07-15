<script lang="ts">
	export let customClass = '';
</script>

<div class="flex flex-col relative {customClass}">
	<slot />
</div>
