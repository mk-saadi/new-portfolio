import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import useScroll from "./useScroll";

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
		<header className={`fixed top-0 duration-300 w-full ${isScrolled ? "px-5" : ""}`}>
			<div
				id="top-navbar"
				className={`flex duration-300 items-center justify-between w-full bg-white shadow-nav-dark dark:shadow-nav-white dark:bg-black dark:text-white
					${isScrolled ? "px-5 py-2 mt-3 rounded-t-xl rounded-b-xl" : "px-5 py-2"}
					`}
			>
				<h1 className="text-2xl font-extrabold text-sobuj">MK</h1>
				<nav>
					<ul className="flex items-center justify-center font-normal gap-x-4">
						<li>
							<a href="#">Intro</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Projects</a>
						</li>
						<li>
							<a href="#">Contacts</a>
						</li>
						<li>
							<a href="#">Footer</a>
						</li>
					</ul>
				</nav>
				<div>
					<button
						onClick={handleThemeSwitch}
						className="p-2 text-gray-800 duration-300 dark:text-gray-200 focus:outline-0"
					>
						{theme === "light" ? <Sun className="animate_spinning" /> : <Moon />}
					</button>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
