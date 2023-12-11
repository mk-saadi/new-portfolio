import head1 from "../assets/MK__1_-removebg-preview.png";

// eslint-disable-next-line react/prop-types
const Header = ({ navigateToSection, aboutRef, projectsRef, contactRef }) => {
	return (
		<div
			className="sticky top-0 z-50 flex items-center py-2 bg-white"
			data-theme="cyberpunk"
		>
			<div className="flex-1 ml-8">
				{/* <img
					src={head1}
					alt="logo"
					className="w-auto h-16"
				/> */}
				<h1 className="text-xl font-medium">Muhiuddin Khaled</h1>
			</div>
			<nav>
				<ul className="flex items-center justify-center gap-6 mr-8 font-sans font-semibold text-gray-600">
					<li>
						<button
							className="hover:text-[#f2754c] duration-200"
							onClick={() => navigateToSection(aboutRef)}
						>
							<span className="text-orange-400">01.</span> About
						</button>
					</li>
					<li>
						<button
							className="hover:text-[#f2754c] duration-200"
							onClick={() => navigateToSection(projectsRef)}
						>
							<span className="text-orange-400">02.</span>{" "}
							Projects
						</button>
					</li>
					<li>
						<button
							className="hover:text-[#f2754c] duration-200"
							onClick={() => navigateToSection(contactRef)}
						>
							<span className="text-orange-400">03.</span> Contact
						</button>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Header;
