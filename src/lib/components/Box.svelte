<script lang="ts">
	export let customClass = '';
	export let active = true;

	type Variant = 'primary' | 'secondary' | 'gradient';
	export let variant: Variant = 'primary';

	let inactive = !active;

	let styleBack =
		variant === 'primary'
			? 'bg-brand-secondary'
			: variant === 'secondary'
			? 'bg-brand-primary'
			: variant === 'gradient'
			? 'shifting-bg'
			: '';

	let styleFront =
		variant === 'primary'
			? 'border-brand-secondary'
			: variant === 'secondary'
			? 'border-brand-primary'
			: variant === 'gradient'
			? ''
			: '';
</script>

<div class="box relative {customClass}" class:active class:inactive>
	<div class="back {styleBack} absolute inset-0 -z-10" />
	<div class="front {styleFront} transition-transform duration-100 ease-in-out">
		<slot name="content" />
	</div>
</div>

<style>
	.box {
		width: var(--width, 100%);
		height: var(--height, 100%);
	}

	.back {
		width: var(--width, 100%);
		height: var(--height, 100%);
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
