<script lang="ts">
	import Container from '$lib/components/Container.svelte';
	import Box from '$lib/components/Box.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<Container customClass="pt-32 h-screen">
	<h1 class="text-6xl uppercase font-tasaexplorer font-tasaexplorer-bold">
		escape your backend burdens
	</h1>
	<div class="mt-6 flex-1 justify-between items-start">
		<p class="font-tasaorbiter text-lg font-tasaorbiter-medium mb-4">
			Encore orchestrates infrastructure for seamless development, from local to cloud.
		</p>
		<p class="font-tasaorbiter text-base font-tasaorbiter-regular">
			Break free from manual work to run locally, costly shared test environments, and tedious
			Terraform.
		</p>

		<div class="flex justify-between items-center mt-6">
			<Box --width="128px" --translate="-4px" --border="0px" --padding="0px">
				<Button slot="content" variant="gradient">Get Started</Button>
			</Box>
			<Box --width="128px" --translate="-4px" --border="0px" --padding="0px">
				<Button slot="content" variant="secondary">Get Started</Button>
			</Box>
		</div>
	</div>
</Container>

<Container customClass="surface-secondary">
	<h2 class="text-primary my-12 text-5xl uppercase font-tasaexplorer font-tasaorbiter-black">
		Declarative infras
	</h2>

	<div class="flex items-stretch justify-start">
		<div class="flex flex-col items-center">
			<img
				src="https://encore.dev/assets/icons/features/api-docs-inverted.png"
				class="w-16 h-auto mx-4 mt-4"
				alt="icon"
			/>
		</div>
		<div class="flex-1 text-primary">
			<h3 class="font-tasaorbiter font-tasaorbiter-semibold mb-2 text-4xl">
				Architecture Diagrame & API
			</h3>
			<p class="font-tasaorbiter text-lg text-primary mb-2 font-tasaorbiter-regular">
				Get always up-to-date documentation as you design and develop your application.
			</p>
		</div>
	</div>
</Container>

<Container customClass="bg-primary h-screen">
	<h2 class="text-secondary my-12 text-5xl uppercase font-tasaexplorer font-tasaexplorer-black">
		Never too late to evolve
	</h2>

	<div class="flex-1 relative">
		<div class="elevated p-6 bg-brand-bg h-full border-4 border-secondary flex flex-col gap-6">
			<p class="text-lg uppercase text-secondary">Incremental adoption</p>
			<p class="text-lg text-secondary">
				Start using Encore for specific use cases, alongside your existing stack.
			</p>
			<div class="h-12 inline-block group relative">
				<div class="absolute inset-0 bg-primary" />
				<button
					type="button"
					class="
          h-full w-full px-6
          inline-flex justify-center items-center uppercase
          font-tasaorbiter font-tasaorbiter-semibold


          bg-brand-bg text-brand-text border-2 border-brand-border relative

          transition-transform duration-100 ease-in-out
          group-active:-translate-x-1 group-active:-translate-y-1
          group-hover:-translate-x-1 group-hover:-translate-y-1

          disabled:cursor-not-allowed
          disabled:group-active:translate-x-0 disabled:group-active:translate-y-0
          disabled:group-hover:translate-x-0 disabled:group-hover:translate-y-0
          disabled:opacity-50
        ">See guide</button
				>
			</div>
		</div>
		<div class="absolute inset-0 -z-10 bg-brand-bg" />
	</div>
</Container>
