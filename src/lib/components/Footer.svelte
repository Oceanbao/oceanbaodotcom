<script lang="ts">
	import { Twitter, Instagram, Linkedin } from 'lucide-svelte';
</script>

<footer class="grid auto-cols-fr px-6 py-14 surface-secondary gap-4">
	<div class="flex justify-between items-center gap-2">
		<div class="flex flex-col gap-2">
			<a href="/about">about</a>
			<a href="/blog">blog</a>
		</div>
		<div class="social flex gap-2">
			<a href="https://twitter.com/oceanbao">
				<Twitter fill="currentColor" />
			</a>
			<a href="https://www.instagram.com/ocean_bao/">
				<Instagram />
			</a>
			<a href="https://www.linkedin.com/in/oceanbao/">
				<Linkedin />
			</a>
		</div>
	</div>

	<div class="flex items-center justify-between gap-2 mt-4">
		<div class="flex items-center gap-2">
			<a href="/"><img src="/oblogo-min-circle.png" alt="logo" width="48px" height="48px" /></a>
			<span>Ocean Bao</span>
		</div>
	</div>
</footer>
