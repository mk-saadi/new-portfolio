/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: ["Source Code Pro"],
			// sans: ["Montserrat", "sans-serif"],
			serif: ["Bungee Outline"],
			mono: ["Bungee"],
			playfair: ["Playfair Display"],
		},
		extend: {},
	},
	// plugins: [require("daisyui")],
	plugins: [],
};
