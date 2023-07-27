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
		},
		'.font-opensans-light': {
			fontVariationSettings: '"wght" 300'
		},
		'.font-opensans-regular': {
			fontVariationSettings: '"wght" 400'
		},
		'.font-opensans-medium': {
			fontVariationSettings: '"wght" 500'
		},
		'.font-opensans-semibold': {
			fontVariationSettings: '"wght" 600'
		},
		'.font-opensans-bold': {
			fontVariationSettings: '"wght" 700'
		},
		'.font-opensans-extrabold': {
			fontVariationSettings: '"wght" 800'
		},
		'.font-opensans-light-italic': {
			fontVariationSettings: '"wght" 300, "ital" 1'
		},
		'.font-opensans-regular-italic': {
			fontVariationSettings: '"wght" 400, "ital" 1'
		},
		'.font-opensans-medium-italic': {
			fontVariationSettings: '"wght" 500, "ital" 1'
		},
		'.font-opensans-semibold-italic': {
			fontVariationSettings: '"wght" 600, "ital" 1'
		},
		'.font-opensans-bold-italic': {
			fontVariationSettings: '"wght" 700, "ital" 1'
		},
		'.font-opensans-extrabold-italic': {
			fontVariationSettings: '"wght" 800, "ital" 1'
		}
	});
});

export default variableFontPlugin;
