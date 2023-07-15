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

type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	const formatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return formatter.format(new Date(date));
}
