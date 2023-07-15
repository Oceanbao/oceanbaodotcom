<script lang="ts">
	export let slug: string;
	export let title: string;
	export let date: string;
	export let description: string;
	export let categories: string;
</script>

<div class="p-4 bg-secondary flex flex-col">
	<div class="flex-grow-0 flex-shrink-0 lg:mr-16 hidden lg:block">
		<img
			class="w-48 aspect-square object-cover"
			src="https://encore.dev/assets/blog/eda-cover1.jpg"
			alt="cover"
		/>
	</div>
	<div class="flex-grow">
		<!-- <div class="mb-8 hidden lg:flex"> -->
		<!-- 	<div class="border border-primary text-primary rounded px-4 py-2 uppercase"> -->
		<!-- 		Systems Design -->
		<!-- 	</div> -->
		<!-- 	<div class="flex-auto self-end text-secondary text-left">{date} / {slug} / 13 Min Read</div> -->
		<!-- </div> -->
		<div class="flex justify-between lg:hidden mb-4">
			<div class="flex-none inline-block pr-2">
				<img
					class="w-16 h-16 object-cover"
					src="https://encore.dev/assets/blog/eda-cover1.jpg"
					alt=""
				/>
			</div>
			<div class="inline-flex flex-col items-end">
				<div
					class="border border-primary text-primary rounded px-2 py-1 uppercase inline-block mb-3"
				>
					{categories}
				</div>
				<div class="flex-auto self-end text-left text-primary">{date} / {slug} / 13 Min Read</div>
			</div>
		</div>
		<div>
			<div class="lead-medium normal-case font-sans mb-4 text-primary">
				{title}
			</div>
			<div class="lead-small normal-case font-sans mb-4 text-primary">
				{description}
			</div>
			<div class="leading-6">
				<img
					class="inline-block w-6 h-6 rounded-full mr-4"
					src="https://encore.dev/assets/avatars/matt.jpg"
					alt="avatar"
				/>Ocean Bao
			</div>
		</div>
	</div>
</div>
