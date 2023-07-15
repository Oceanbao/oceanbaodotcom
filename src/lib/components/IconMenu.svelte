<script lang="ts">
	export let open = false;

	$: down = open;
	$: up = open;
</script>

<div class="flex flex-col justify-center items-center">
	<div class="w-8 h-[2px] my-[4px] pb-0 pr-0 top transition duration-100 ease-in-out" class:down />
	<div class="w-8 h-[2px] my-[4px] pb-0 pr-0 bottom transition duration-100 ease-in-out" class:up />
</div>

<style lang="postcss">
	.top {
		background-color: theme(colors.dark);
	}
	.down {
		transform: translate3d(0px, 5px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
			rotateZ(-45deg) skew(0deg, 0deg);
		transform-style: preserve-3d;
		background-color: theme(colors.light);
	}

	.bottom {
		background-color: theme(colors.dark);
	}
	.up {
		transform: translate3d(0px, -5px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)
			rotateZ(45deg) skew(0deg, 0deg);
		transform-style: preserve-3d;
		background-color: theme(colors.light);
	}
</style>
