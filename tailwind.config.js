/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		fontFamily: {
			sans: ["karla"],
			serif: ["inter"],
			mono: ["Oswald"],
		},
		extend: {
			boxShadow: {
				"nav-dark": "0px 0px 15px 4px rgba(0, 0, 0, 0.12)",
				"nav-white": "0px 0px 15px 4px rgba(255, 255, 255, 0.12)",
				"shadow-fade": "0px 0px 25px 8px currentColor",
			},
			colors: {
				biscuit: "#CAC6BB",
				dhusor: "#303030",
				para: "#555555",
			},
			backgroundImage: {
				"wavy-light":
					"repeating-radial-gradient(circle at 0 0, transparent 0, #e0e0e0 10px), repeating-linear-gradient(#e0e0e0, hwb(0 99% 7%))",
				"wavy-dark":
					"repeating-radial-gradient(circle at 0 0, transparent 0, #111111 12px), repeating-linear-gradient(#111111, hwb(0 17% 91% / 0.6))",
			},
			// width: {
			// 	xll: "1440px",
			// 	xxl: "1920px",
			// },
			screens: {
				xll: "1440px",
				xxl: "1920px",
			},
		},
	},
	// plugins: [require("daisyui")],
	plugins: [],
};
