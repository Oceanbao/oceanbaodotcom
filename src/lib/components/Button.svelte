<script lang="ts">
	type Variant = 'primary' | 'secondary' | 'gradient';

	export let variant: Variant = 'primary';
	export let disabled = false;

	let style =
		variant === 'primary'
			? 'border-2 surface-secondary border-brand-primary'
			: variant === 'secondary'
			? 'border-2 surface-primary border-brand-secondary'
			: variant === 'gradient'
			? 'shifting-bg border-2 text-brand-primary border-brand-secondary'
			: '';
</script>

<button
	type="button"
	{disabled}
	class="
          relative {style}
          h-full w-full px-6
          inline-flex justify-center items-center uppercase
          font-brand font-semibold

          transition-transform duration-100 ease-in-out

          disabled:cursor-not-allowed
          disabled:group-active:translate-x-0 disabled:group-active:translate-y-0
          disabled:group-hover:translate-x-0 disabled:group-hover:translate-y-0
          disabled:opacity-50
        "><slot /></button
>
