<script lang="ts">
	export let customClass = '';
	export let active = true;

	let inactive = !active;
</script>

<div class="box relative {customClass}" class:active class:inactive>
	<div class="back absolute inset-0 bg-black h-full -z-10" />
	<div
		class="front border-black bg-light transition-transform duration-100 ease-in-out flex flex-col"
	>
		<slot name="content" />
	</div>
</div>

<style>
	.box {
		width: var(--width);
	}

	.back {
		width: var(--width);
	}

	.front {
		border-width: var(--border);
		padding: var(--padding);
	}
	.box.active:active .front,
	.box.active:hover .front {
		transform: translateX(var(--translate)) translateY(var(--translate));
	}
	.box.inactive .front,
	.box.inactive .front {
		transform: translateX(calc(0.5 * var(--translate))) translateY(calc(0.5 * var(--translate)));
	}
	.box.inactive .back {
		left: calc(-0.5 * var(--translate));
		top: calc(-0.5 * var(--translate));
	}
</style>
