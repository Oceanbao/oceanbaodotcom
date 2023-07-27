<script lang="ts">
	import Instagram from './icons/Instagram.svelte';
	import Linkedin from './icons/Linkedin.svelte';
	import Twitter from './icons/Twitter.svelte';
</script>

<footer class="grid auto-cols-fr px-6 py-12 surface-secondary gap-4 font-brand">
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-2">
			<a href="/"><img src="/oblogo-min-circle.png" alt="logo" width="48px" height="48px" /></a>
			<span>Ocean Bao</span>
		</div>

		<div class="flex justify-end items-center gap-2">
			<a href="https://twitter.com/oceanbao" target="_blank">
				<Twitter />
			</a>
			<a href="https://www.instagram.com/ocean_bao/" target="_blank">
				<Instagram />
			</a>
			<a href="https://www.linkedin.com/in/oceanbao/" target="_blank">
				<Linkedin />
			</a>
		</div>
	</div>
</footer>
