import pro from "../../src/assets/IMG_20221227_203719 j(2).jpg";
import { BiSolidRightArrow } from "react-icons/bi";
import Reveal, { Fade } from "react-awesome-reveal";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
	return (
		<div className="grid grid-cols-1 mx-2 text-left lg:grid-cols-3 md:mx-4">
			<div className="order-2 col-span-2 lg:order-1">
				<p className="mt-3 font-sans text-xl text-center text-orange-600 font-[600] md:text-2xl lg:text-xl lg:mt-0 lg:text-left">
					01. <span className="text-white">About Me</span>
				</p>

				<div className="flex items-center justify-center gap-4 mt-2 text-2xl text-white md:hidden">
					<a
						href="https://www.linkedin.com/in/mk-saadi-46a0aa242/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-orange-400"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://github.com/mk-saadi"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-orange-400"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.facebook.com/mk.saadi.7/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-orange-400"
					>
						<FaFacebook />
					</a>
				</div>
				<div className="mt-2 text-sm text-gray-300 md:text-base lg:mr-8 md:mt-8">
					As a MERN stack web developer, I'm on a mission to create digital experiences that leave a
					lasting impact.
					<br />
					My focus is on building applications that not only meet functional requirements but also
					provide a delightful user experience.
				</div>
				<p className="mt-5 mr-10 text-gray-300">
					Some of the web technology that I'm familiar with are:
				</p>
				<div className="grid grid-cols-2 mt-2 text-sm text-left text-gray-300 lg:mx-8 md:text-base">
					<div>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-xs text-orange-400" /> JavaScript
						</p>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-xs text-orange-400" /> React
						</p>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-xs text-orange-400" /> Next JS
						</p>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-xs text-orange-400" /> Tailwind CSS
						</p>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-xs text-orange-400" /> BootStrap
						</p>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-xs text-orange-400" /> Material UI
						</p>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-xs text-orange-400" /> Figma
						</p>
					</div>
					<div>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-xs text-orange-400" /> Node.js
						</p>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-xs text-orange-400" /> MongoDB
						</p>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-xs text-orange-400" /> Express
						</p>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-xs text-orange-400" /> jsonwebtoken
						</p>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-xs text-orange-400" /> Firebase
						</p>
					</div>
				</div>
			</div>
			<Fade
				triggerOnce
				className="order-1 mx-10 mt-16 duration-200 shadow-md drop-shadow-md lg:drop-shadow-none lg:shadow-none lg:order-2 noise md:mx-48 lg:mx-0"
			>
				<img
					src={pro}
					alt=""
					className="rounded-md grayscale hover:grayscale-0 lg:shadow-md lg:drop-shadow-md"
				/>
			</Fade>
		</div>
	);
};

export default About;
