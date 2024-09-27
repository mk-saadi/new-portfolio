/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Source Code Pro"],
			// sans: ["Montserrat", "sans-serif"],
			// serif: ["Lora", "serif"],
		},
		extend: {},
	},
	// plugins: [require("daisyui")],
	plugins: [],
};
