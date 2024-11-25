import { useState, useEffect } from "react";
import { Sun, Moon, Linkedin, Github, Twitter } from "lucide-react";
import useScroll from "./useScroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [theme, setTheme] = useState(null);
	const isScrolled = useScroll("top-navbar");

	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, []);

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	return (
		// <header
		// 	className="w-full duration-300 "
		// 	// className={`fixed z-50 top-0 duration-300 w-full ${isScrolled ? "px-5" : ""}`
		// >
		// 	<div
		// 		// id="top-navbar"
		// 		className="flex items-center justify-between w-full px-16 py-2 text-dhusor dark:text-white"
		// 		// className="flex items-center justify-between w-full px-5 py-2 mt-3 duration-300 bg-white text-dhusor rounded-t-xl rounded-b-xl shadow-nav-dark dark:shadow-nav-white dark:bg-black dark:text-white"
		// 		// className={`flex duration-300 text-dhusor items-center justify-between w-full bg-white shadow-nav-dark dark:shadow-nav-white dark:bg-black dark:text-white
		// 		// 	${isScrolled ? "px-5 py-2 mt-3 rounded-t-xl rounded-b-xl" : "px-5 py-2"}
		// 		// 	`}
		// 	>
		// 		<nav>
		// 			<ul className="flex items-center justify-center text-base font-normal text-dhusor dark:text-gray-300 gap-x-8">
		// 				<li>
		// 					<NavLink to="/">Home</NavLink>
		// 				</li>
		// 				<li>
		// 					<NavLink to="/skills">Skills</NavLink>
		// 				</li>
		// 				<li>
		// 					<NavLink to="/projects">Projects</NavLink>
		// 				</li>
		// 				<li>
		// 					<NavLink to="/contacts">Contacts</NavLink>
		// 				</li>
		// 			</ul>
		// 		</nav>
		// 		<h1 className="text-4xl font-extrabold text-laal">
		// 			M<span className="text-[#303030]">K</span>
		// 		</h1>
		// 		<div className="flex text-[#303030] text-base dark:text-gray-300 items-center gap-x-8">
		// 			<Linkedin
		// 				size={19}
		// 				strokeWidth={1.8}
		// 			/>
		// 			<Github
		// 				size={19}
		// 				strokeWidth={1.8}
		// 			/>
		// 			<Twitter
		// 				size={19}
		// 				strokeWidth={1.8}
		// 			/>
		// 			<button
		// 				onClick={handleThemeSwitch}
		// 				className="duration-300 focus:outline-0"
		// 			>
		// 				{theme === "light" ? (
		// 					<Sun
		// 						size={19}
		// 						strokeWidth={1.8}
		// 					/>
		// 				) : (
		// 					<Moon
		// 						size={20}
		// 						strokeWidth={1.8}
		// 					/>
		// 				)}
		// 			</button>
		// 		</div>
		// 	</div>
		// </header>
		<header className="w-full duration-300">
			<div className="relative flex items-center justify-between w-full px-16 py-2 text-dhusor dark:text-white">
				<nav className="navlinks">
					<ul className="flex items-center justify-center text-base font-normal text-dhusor dark:text-gray-300 gap-x-8">
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/skills">Skills</NavLink>
						</li>
						<li>
							<NavLink to="/projects">Projects</NavLink>
						</li>
						<li>
							<NavLink to="/contacts">Contacts</NavLink>
						</li>
					</ul>
				</nav>

				{/* Centered H1 */}
				<h1 className="absolute text-4xl font-extrabold -translate-x-1/2 left-1/2 text-laal">
					M<span className="text-dhusor dark:text-gray-300">K</span>
				</h1>

				{/* Icons Section */}
				<div className="flex items-center gap-x-8 text-[#303030] text-base dark:text-gray-300">
					<a href="https://www.linkedin.com/in/muhiuddin-khaled-46a0aa242/">
						<Linkedin
							size={19}
							strokeWidth={1.8}
						/>
					</a>
					<a href="https://github.com/mk-saadi">
						<Github
							size={19}
							strokeWidth={1.8}
						/>
					</a>
					<a href="https://x.com/mk_saadi2001">
						<Twitter
							size={19}
							strokeWidth={1.8}
						/>
					</a>
					<button
						onClick={handleThemeSwitch}
						className="duration-300 focus:outline-0"
					>
						{theme === "light" ? (
							<Sun
								size={19}
								strokeWidth={1.8}
							/>
						) : (
							<Moon
								size={20}
								strokeWidth={1.8}
							/>
						)}
					</button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
