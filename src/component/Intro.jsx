/* eslint-disable react/prop-types */
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Intro = ({ scrollToFooter, pdf }) => {
	return (
		<div className="flex items-center justify-center min-h-[80vh]">
			<div className="text-left">
				<div className="flex items-center justify-center">
					<div>
						<p className="text-[#579981] font-sans text-xl mb-2">
							Hi, <span className="text-white">I am</span>
						</p>
						<p className="font-sans font-extrabold text-white text-7xl">
							Muhiuddin Khaled
						</p>
						<p className="font-sans text-5xl font-extrabold text-slate-400">
							A Passionate MERN Developer.
						</p>
						<p className="py-5 text-slate-400">
							I am a Bangladesh-based web developer who
							specializes in building <br /> amazing web
							interfaces.
						</p>
					</div>
					{/* <div>
						<a
							href="#"
							className="link"
						>
							<svg
								viewBox="0 0 200 200"
								width="200"
								height="200"
								xmlns="http://www.w3.org/2000/svg"
								className="link__svg"
								aria-labelledby="link1-title link1-desc"
							>
								
								<desc id="link1-desc">
									A rotating link with text placed around a
									circle with an arrow inside
								</desc>

								<path
									id="link-circle"
									className="link__path"
									d="M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
									stroke="none"
									fill="none"
								/>

								<path
								className="link__arrow"
								d="M 75 100 L 125 100 L 110 85 M 125 100 L 110 115"
								fill="none"
							/>

								<text className="link__text">
									<textPath
										href="#link-circle"
										stroke="none"
									>
										MERN/Front-end Stack web developer
									</textPath>
								</text>
							</svg>
						</a>
					</div> */}
				</div>

				<button
					onClick={scrollToFooter}
					className="mt-2 px-4 rounded-sm border-2 duration-200 border-[#579981] hover:border-[#f2754c] text-white mr-4"
				>
					Get In Touch
				</button>
				<a
					href={pdf}
					download="resume.pdf"
				>
					<button className="px-4 rounded-sm border-2 duration-200 border-[#579981] hover:border-[#f2754c] text-white">
						Resume
					</button>
				</a>
				<div className="flex items-center justify-center gap-4 mt-6 text-2xl text-white lg:text-3xl">
					<a
						href="https://www.linkedin.com/in/mk-saadi-46a0aa242/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin />
					</a>
					<a
						href="https://github.com/mk-saadi"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
					</a>
					<a
						href="https://www.facebook.com/mk.saadi.7/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaFacebook />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Intro;
