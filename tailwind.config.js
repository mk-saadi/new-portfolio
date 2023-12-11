/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Source Code Pro"],
		},
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light", "dark", "cyberpunk"],
	},
};
