/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

const constants = {
	red: '#F23C3D',
	green: '#00A389',
	'dark-green': '#006044',
	'light-green': '#E6F2EF',
	black: '#222222',
	white: '#ffffff',
	'light-gray': '#E8E7E3',
	'gray-100': '#afafaf',
	'gray-200': '#929292',
	'gray-300': '#757575',
	beige: '#A49B8F'
};

module.exports = {
	important: true,
	content: ['./src/**/*.{js, jsx, ts,tsx}', './pages/**/*.{js, ts, jsx, tsx}'],
	theme: {
		colors: {
			transparent: colors.transparent,
			...constants
		},
		extend: {
			fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2x1': '1.75rem',
				'3x1': '2.155rem',
				'4x1': '2.58rem',
				'5x1': '3.45rem',
				'6x1': '4.3rem',
				'7x1': '5.17rem',
				'8x1': '6.9rem',
				'9x1': '9.2rem'
			}
		}
	},
	plugins: []
};
