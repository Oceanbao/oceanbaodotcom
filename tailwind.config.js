/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				light: '#F3FFE5',
				dark: '#111111',
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
				tasaexplorer: ['TASA Explorer', 'sans-serif'],
				tasaorbiter: ['TASA Orbiter', 'sans-serif']
			}
		}
	},
	plugins: [require('./variableFontPlugin.js')]
};
