/* eslint-disable react/prop-types */

const Intro = ({ scrollToFooter, pdf }) => {
	return (
		<div className="flex items-center justify-center min-h-[80vh] mx-4 md:mx-0">
			<div className="text-left">
				<div>
					<p className="mb-2 font-sans text-xl text-orange-400">
						Hi, <span className="text-white">I am</span>
					</p>
					<p className="font-sans text-4xl font-extrabold text-white lg:text-7xl">
						Muhiuddin Khaled
					</p>
					<p className="font-sans text-2xl font-extrabold text-gray-300 md:text-5xl">
						A Passionate MERN Developer.
					</p>
					<p className="py-5 text-gray-300">
						I am a Bangladesh-based web developer who specializes in
						building <br /> amazing web interfaces.
					</p>
				</div>

				<button
					onClick={scrollToFooter}
					className="mt-2 px-4 rounded-sm border-2 duration-200 border-orange-400 text-orange-400 hover:border-[#f2754c]  bg-transparent cursor-pointer hover:bg-orange-400 hover:text-white  mr-4 md:mr-8"
				>
					Get In Touch
				</button>
				<a
					href={pdf}
					download="resume.pdf"
				>
					<button className="mt-2 px-4 rounded-sm border-2 duration-200 border-orange-400 text-orange-400 hover:border-[#f2754c]  bg-transparent cursor-pointer hover:bg-orange-400 hover:text-white">
						Resume
					</button>
				</a>
			</div>
		</div>
	);
};

export default Intro;
