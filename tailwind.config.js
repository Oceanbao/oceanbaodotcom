/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'brand-primary': 'var(--theme-primary)',
				'brand-secondary': 'var(--theme-secondary)',
				magnum: {
					50: '#fff9ed',
					100: '#fef2d6',
					200: '#fce0ac',
					300: '#f9c978',
					400: '#f7b155',
					500: '#f38d1c',
					600: '#e47312',
					700: '#bd5711',
					800: '#964516',
					900: '#793a15',
					950: '#411c09'
				}
			},
			fontFamily: {
				brand: ['Open Sans', 'sans-serif']
			},
			typography: ({ theme }) => ({
				brand: {
					css: {
						'--tw-prose-body': theme('colors.brand-secondary'),
						'--tw-prose-headings': theme('colors.brand-secondary'),
						'--tw-prose-lead': theme('colors.brand-secondary'),
						'--tw-prose-links': theme('colors.brand-secondary'),
						'--tw-prose-bold': theme('colors.brand-secondary'),
						'--tw-prose-counters': theme('colors.brand-secondary'),
						'--tw-prose-bullets': theme('colors.brand-secondary'),
						'--tw-prose-hr': theme('colors.brand-secondary'),
						'--tw-prose-quotes': theme('colors.brand-secondary'),
						'--tw-prose-quote-borders': theme('colors.brand-secondary'),
						'--tw-prose-captions': theme('colors.brand-secondary'),
						'--tw-prose-code': theme('colors.brand-secondary'),
						'--tw-prose-pre-code': theme('colors.brand-secondary'),
						'--tw-prose-pre-bg': theme('colors.brand-secondary'),
						'--tw-prose-th-borders': theme('colors.brand-secondary'),
						'--tw-prose-td-borders': theme('colors.brand-secondary')
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography'), require('./src/lib/variableFontPlugin.ts')]
};
