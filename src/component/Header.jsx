import head1 from "../assets/MK__1_-removebg-preview.png";

// eslint-disable-next-line react/prop-types
const Header = ({ navigateToSection, aboutRef, projectsRef, contactRef }) => {
	return (
		<div
			className="sticky top-0 z-50 flex flex-col items-center py-2 bg-white shadow-md md:flex-row"
			// data-theme="cyberpunk"
		>
			<div className="flex-1 ml-8">
				{/* <img
					src={head1}
					alt="logo"
					className="w-auto h-16"
				/> */}
				<h1 className="text-base font-semibold text-orange-400 md:text-xl">
					Muhiuddin Khaled
				</h1>
			</div>
			<nav>
				<ul className="flex items-center justify-center gap-4 mx-1 mt-2 font-sans text-sm font-semibold text-gray-600 md:mt-0 md:gap-6 md:mx-0 md:mr-8 md:text-base">
					<li>
						<button
							className="duration-200 hover:text-orange-700"
							onClick={() => navigateToSection(aboutRef)}
						>
							<span className="text-orange-400">01.</span> About
						</button>
					</li>
					<li>
						<button
							className="duration-200 hover:text-orange-700"
							onClick={() => navigateToSection(projectsRef)}
						>
							<span className="text-orange-400">02.</span>{" "}
							Projects
						</button>
					</li>
					<li>
						<button
							className="duration-200 hover:text-orange-700"
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
