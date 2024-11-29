import { useState, useEffect } from "react";
import { Sun, Moon, Linkedin, Github, Twitter, HomeIcon, FolderOpenDot, Send, Sparkle } from "lucide-react";
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
		<header className="w-[100vw]">
			<div className="relative flex flex-col items-center justify-between w-full px-2 py-2 lg:px-10 gap-y-3 lg:flex-row text-dhusor dark:text-white">
				{/* bottom border */}
				<div className="w-[94.5vw] transform -translate-x-1/2 left-1/2 h-[1px] absolute bottom-0 dark:bg-white/10 bg-gray-900/10" />
				<nav className="w-full lg:w-fit navlinks">
					<ul className="flex items-center justify-around w-full text-base font-normal text-dhusor dark:text-gray-300 gap-x-8">
						<li>
							<NavLink
								to="/"
								className="flex items-center justify-center gap-x-2"
							>
								<HomeIcon
									strokeWidth={1.8}
									size={20}
								/>
								<span className="hidden xl:block">Home</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/featured"
								className="flex items-center justify-center gap-x-2"
							>
								<Sparkle
									strokeWidth={1.8}
									size={20}
								/>
								<span className="hidden xl:block">Featured</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/projects"
								className="flex items-center justify-center gap-x-2"
							>
								<FolderOpenDot
									strokeWidth={1.8}
									size={20}
								/>
								<span className="hidden xl:block">Projects</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contacts"
								className="flex items-center justify-center gap-x-2"
							>
								<Send
									strokeWidth={1.8}
									size={20}
								/>
								<span className="hidden xl:block">Contacts</span>
							</NavLink>
						</li>
					</ul>
				</nav>
				{/* Centered H1 */}
				<h1 className="absolute hidden text-4xl font-extrabold -translate-x-1/2 lg:block left-1/2 text-biscuit">
					M<span className="text-dhusor dark:text-gray-300">K</span>
				</h1>
				{/* Icons Section */}
				<div className="flex justify-around w-full lg:w-fit items-center gap-x-8 text-[#303030] dark:text-gray-300">
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
