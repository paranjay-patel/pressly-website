import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
				display: ['Outfit', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: '#0284C7',
				'primary-hover': '#0369A1',
				accent: '#6366F1',
			},
			boxShadow: {
				float: '0 20px 25px -5px rgba(2, 132, 199, 0.1), 0 8px 10px -6px rgba(2, 132, 199, 0.1)',
			}
		},
	},
	plugins: [],
}
