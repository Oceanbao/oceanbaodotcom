import plugin from 'tailwindcss/plugin';

const variableFontPlugin = plugin(function ({ addUtilities }) {
	addUtilities({
		'.font-tasaexplorer-regular': {
			fontVariationSettings: '"wght" 400, "opsz" 8'
		},
		'.font-tasaexplorer-medium': {
			fontVariationSettings: '"wght" 500, "opsz" 8'
		},
		'.font-tasaexplorer-semibold': {
			fontVariationSettings: '"wght" 600, "opsz" 8'
		},
		'.font-tasaexplorer-bold': {
			fontVariationSettings: '"wght" 700, "opsz" 8'
		},
		'.font-tasaexplorer-black': {
			fontVariationSettings: '"wght" 900, "opsz" 8'
		},
		'.font-tasaorbiter-regular': {
			fontVariationSettings: '"wght" 400, "opsz" 60'
		},
		'.font-tasaorbiter-medium': {
			fontVariationSettings: '"wght" 500, "opsz" 60'
		},
		'.font-tasaorbiter-semibold': {
			fontVariationSettings: '"wght" 600, "opsz" 60'
		},
		'.font-tasaorbiter-bold': {
			fontVariationSettings: '"wght" 700, "opsz" 60'
		},
		'.font-tasaorbiter-black': {
			fontVariationSettings: '"wght" 900, "opsz" 60'
		}
	});
});

export default variableFontPlugin;
