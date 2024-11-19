/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: ["onest"],
			serif: ["inter"],
		},
		extend: {
			boxShadow: {
				"nav-dark": "0px 0px 15px 4px rgba(0, 0, 0, 0.12)",
				"nav-white": "0px 0px 15px 4px rgba(255, 255, 255, 0.12)",
			},
			colors: {
				sobuj: "#7fe85a",
			},
		},
	},
	// plugins: [require("daisyui")],
	plugins: [],
};
