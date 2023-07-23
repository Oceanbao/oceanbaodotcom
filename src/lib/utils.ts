import type { Action } from 'svelte/action';

// debounce
export const debounce = <T extends (...args: any[]) => ReturnType<T>>(
	callback: T,
	timeout: number
): ((...args: Parameters<T>) => void) => {
	let timer: ReturnType<typeof setTimeout>;

	return (...args: Parameters<T>) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			callback(...args);
		}, timeout);
	};
};

// formateDate
type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}

// joinClass
export function joinClass(...args: any[]) {
	return args.filter(Boolean).join(' ');
}

// click outside
// <div use:actionClickOutside={{ prop: 'somevalue' }} on:customevent={handleEvent} />
export const actionClickOutside: Action<HTMLElement, { handleClickOutsideCB: () => void }> = (
	node,
	{ handleClickOutsideCB }
) => {
	// the node has been mounted in the DOM
	// LOGIC
	const handleClickOutside = (event: MouseEvent) => {
		if (node && event.target) {
			if (!node.contains(event.target as HTMLElement) && !event.defaultPrevented) {
				handleClickOutsideCB();
			}
		}
	};

	document.addEventListener('click', handleClickOutside);

	return {
		destroy() {
			document.removeEventListener('click', handleClickOutside);
		}
	};
};
