<script lang="ts">
	import Container from '$lib/components/Container.svelte';
</script>

<Container customClass="h-screen bg-secondary">
	<h1 class="mt-24 text-6xl uppercase text-primary font-tasaexplorer font-tasaexplorer-bold">
		escape your backend burdens
	</h1>
	<div class="mt-6 flex-1 justify-between items-start">
		<p class="font-tasaorbiter text-primary text-lg font-tasaorbiter-medium mb-4">
			Encore orchestrates infrastructure for seamless development, from local to cloud.
		</p>
		<p class="font-tasaorbiter text-base text-primary font-tasaorbiter-regular">
			Break free from manual work to run locally, costly shared test environments, and tedious
			Terraform.
		</p>

		<div class="flex justify-between mt-6">
			<div class="h-12 inline-block group relative">
				<div class="under absolute inset-0 bg-gradient-to-r" />
				<button
					type="button"
					class="
          h-full w-full px-6
          inline-flex justify-center items-center uppercase
          font-tasaorbiter font-tasaorbiter-semibold


          bg-primary text-secondary relative

          transition-transform duration-100 ease-in-out
          group-active:-translate-x-1 group-active:-translate-y-1
          group-hover:-translate-x-1 group-hover:-translate-y-1

          disabled:cursor-not-allowed
          disabled:group-active:translate-x-0 disabled:group-active:translate-y-0
          disabled:group-hover:translate-x-0 disabled:group-hover:translate-y-0
          disabled:opacity-50
        ">Get started</button
				>
			</div>
			<div class="h-12 inline-block group relative">
				<div class="absolute inset-0 bg-primary" />
				<button
					type="button"
					class="
          h-full w-full px-6
          inline-flex justify-center items-center uppercase
          font-tasaorbiter font-tasaorbiter-semibold

          bg-secondary text-primary border-2 border-primary relative

          transition-transform duration-100 ease-in-out
          group-active:-translate-x-1 group-active:-translate-y-1
          group-hover:-translate-x-1 group-hover:-translate-y-1

          disabled:cursor-not-allowed
          disabled:group-active:translate-x-0 disabled:group-active:translate-y-0
          disabled:group-hover:translate-x-0 disabled:group-hover:translate-y-0
          disabled:opacity-50
        ">Watch demo</button
				>
			</div>
		</div>
	</div>
</Container>

<Container customClass="bg-primary">
	<h2 class="text-secondary my-12 text-5xl uppercase font-tasaexplorer font-tasaorbiter-black">
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
		<div class="flex-1 text-secondary">
			<h3 class="font-tasaorbiter font-tasaorbiter-semibold mb-2 text-4xl">
				Architecture Diagrame & API
			</h3>
			<p class="font-tasaorbiter text-lg mb-2 font-tasaorbiter-regular">
				Get always up-to-date documentation as you design and develop your application.
			</p>
		</div>
	</div>
</Container>

<Container customClass="bg-secondary h-screen">
	<h2 class="text-primary my-12 text-5xl uppercase font-tasaexplorer font-tasaexplorer-black">
		Never too late to evolve
	</h2>

	<div class="flex-1 relative">
		<div class="elevated p-6 bg-secondary h-full border-4 border-primary flex flex-col gap-6">
			<p class="text-lg uppercase text-primary">Incremental adoption</p>
			<p class="text-lg text-primary">
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


          bg-secondary text-primary border-2 border-primary relative

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
		<div class="absolute inset-0 -z-10 bg-primary" />
	</div>
</Container>

<style>
	.under {
		--tw-gradient-stops: #ff8719 0%, #4651ff 20.13%, #93c0ff 41.517%, #d4db00 61.635%,
			#ffe87a 81.138%, #ff8719 100%;
		--under-start-position: calc(150% - 0%);

		background-size: 300% 300%;
		animation: ScrollGradientXY 45s linear infinite;
		background-position: var(--under-start-position) var(--under-start-position);
	}

	@keyframes ScrollGradientXY {
		0% {
			background-position: calc(150% + var(--under-start-position))
				calc(150% + var(--under-start-position));
		}
		100% {
			background-position: calc(-150% + var(--under-start-position))
				calc(-150% + var(--under-start-position));
		}
	}

	.elevated {
		--elevate-height: 8px;
		--tw-translate-x: calc(var(--elevate-height) * -1);
		--tw-translate-y: calc(var(--elevate-height) * -1);
	}
</style>
