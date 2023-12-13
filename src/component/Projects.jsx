import ass1 from "../assets/animefig.png";
import ass2 from "../assets/summercamp-12.png";
import ass3 from "../assets/assignment-10.png";
// import difly from "../assets/difly.png";
import ass8 from "../assets/ass-8.png";
import geo from "../assets/geo.png";
import social from "../assets/social-link-2nd.web.app__1_300.png";
import "./project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "react-awesome-reveal";

const Projects = () => {
	return (
		<div>
			<Reveal
				cascade
				triggerOnce
				damping={0.1}
				className="grid grid-cols-1 mx-1 lg:mx-0 md:mx-2 drop-shadow-md "
			>
				{/* project 1 */}
				{/* <div className="relative grid grid-cols-2 mb-8">
					<a
						href="https://animefig-3626c.web.app/"
						className="relative"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={difly}
							alt=""
							className="w-auto col-span-1 duration-200 rounded-md cursor-pointer h-80 saturate-0 hover:saturate-100"
						/>
					</a>

					<div className="z-20 col-span-1 text-right">
						<p className="font-semibold text-orange-400">
							Featured Project 01
						</p>
						<p className="mb-3 text-xl font-semibold text-white">
							DiFly
						</p>
						<p className="text-sm bg-white shadow-md rounded-sm py-4 pr-2 pl-3 text-gray-500 lg:max-w-[490px] absolute right-0 mt-3 z-30">
							DiFly is an{" "}
							<span className="text-orange-400">official</span>{" "}
							website I made for a{" "}
							<span className="text-orange-400">Data Entry</span>{" "}
							company. The website has different user roles.
							Certain users can post update in the website, the
							post can also be liked by other users. There is also{" "}
							<span className="text-orange-400">message</span>{" "}
							functionality in the website.
						</p>

						<div className="text-gray-300 text-xs grid grid-cols-2 lg:mt-[164px] justify-end gap-1">
							<p className="">React</p>
							<p className="">Node.js</p>
							<p className="">MongoDB</p>
							<p className="">Firebase</p>
							<p className="">Tailwind CSS</p>
							<p className="">React-Markdown</p>
							<p className="">Tanstack-query</p>
							<p className="">Axios</p>
						</div>
						<div className="flex items-center justify-end gap-6 mt-3 text-2xl text-white">
							<a
								href="https://github.com/mk-saadi/animeFig-Client"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub className="duration-200 hover:text-orange-400" />
							</a>
							<a
								href="https://animefig-3626c.web.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaExternalLinkAlt className="duration-200 hover:text-orange-400" />
							</a>
						</div>
					</div>
				</div> */}

				{/* project 2 */}
				<div className="relative grid gap-4 mb-16 md:grid-cols-2 md:mb-20 lg:mb-10 lg:gap-0 md:gap-1 ">
					<a
						href="https://summercamp12-1ae5f.web.app/"
						className="relative order-2"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={social}
							alt=""
							className="w-auto col-span-1 duration-200 rounded-md cursor-pointer h-80 saturate-0 hover:saturate-100"
						/>
					</a>

					<div className="z-20 order-1 col-span-1 text-left">
						<p className="font-semibold text-orange-400">
							Featured Project 01
						</p>
						<p className="mb-3 text-xl font-semibold text-white">
							SocialLink
						</p>
						<p className="text-sm bg-white shadow-md rounded-sm py-4 pr-2 pl-3 text-gray-600 lg:max-w-[490px] lg:absolute lg:left-0 mt-3 z-30">
							SocialLink is a social media website. It is a{" "}
							<span className="text-orange-400">
								group project
							</span>
							. In the website a user can follow other users. He
							can also like, comment, share stories with their
							followers.
						</p>
						<div className="text-gray-300 text-xs grid grid-cols-2 lg:mt-[150px] justify-end md:mt-[10px] gap-1">
							<p className="">React</p>
							<p className="">Node.js</p>
							<p className="">Tailwind CSS</p>
							<p className="">Material UI</p>
							<p className="">Node</p>
							<p>Express.js</p>
							<p className="">MongoDB</p>
						</div>
						<div className="flex items-center justify-start gap-6 mt-3 text-2xl text-white">
							<a
								href="https://github.com/mk-saadi/SoundWaves-Client"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaGithub />
								<span className="text-sm">Live</span>
							</a>
							<a
								href="https://github.com/mk-saadi/social-link-public-server"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaGithub />
								<span className="text-sm">Server</span>
							</a>
							<a
								href="https://summercamp12-1ae5f.web.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaExternalLinkAlt />
								<span className="text-sm">Live</span>
							</a>
						</div>
					</div>
				</div>

				{/* project 3 */}
				<div className="relative grid gap-4 mb-16 md:grid-cols-2 md:mb-20 lg:mb-10 lg:gap-0 md:gap-1 ">
					<a
						href="https://animefig-3626c.web.app/"
						className="relative"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={ass1}
							alt=""
							className="w-auto col-span-1 duration-200 rounded-md cursor-pointer h-80 saturate-0 hover:saturate-100"
						/>
					</a>

					<div className="z-20 col-span-1 text-right">
						<p className="font-semibold text-orange-400">
							Featured Project 02
						</p>
						<p className="mb-3 text-xl font-semibold text-white">
							animeFig
						</p>
						<p className="text-sm bg-white shadow-md rounded-sm py-4 pr-2 pl-3 text-gray-600 lg:max-w-[490px] lg:absolute lg:left-0 mt-3 z-30">
							animeFig Is a{" "}
							<span className="text-orange-400">full-stack</span>{" "}
							web application. Anyone logged in can view details
							of the figures or add new figures. Edit and delete
							is also implemented in the website. For styling
							Tailwind CSS and daisyUI were used.
						</p>
						<div className="text-gray-300 text-xs grid grid-cols-2 lg:mt-[164px] justify-end gap-1 md:mt-[10px]">
							<p className="">React</p>
							<p className="">Node.js</p>
							<p className="">MongoDB</p>
							<p className="">Firebase</p>
						</div>
						<div className="flex items-center justify-end gap-6 mt-3 text-2xl text-white">
							<a
								href="https://github.com/mk-saadi/animeFig-Client"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaGithub />
								<span className="text-sm">Client</span>
							</a>
							<a
								href="https://github.com/mk-saadi/animeFig-Server"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaGithub />
								<span className="text-sm">Server</span>
							</a>
							<a
								href="https://animefig-3626c.web.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaExternalLinkAlt />
								<span className="text-sm">Live</span>
							</a>
						</div>
					</div>
				</div>

				{/* project 4 */}
				<div className="relative grid gap-4 mb-16 md:grid-cols-2 md:mb-20 lg:mb-10 lg:gap-0 md:gap-1 ">
					<a
						href="https://summercamp12-1ae5f.web.app/"
						className="relative order-2"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={ass2}
							alt=""
							className="w-auto col-span-1 duration-200 rounded-md cursor-pointer h-80 saturate-0 hover:saturate-100"
						/>
					</a>

					<div className="z-20 order-1 col-span-1 text-left">
						<p className="font-semibold text-orange-400">
							Featured Project 03
						</p>
						<p className="mb-3 text-xl font-semibold text-white">
							SoundWaves
						</p>
						<p className="text-sm bg-white shadow-md rounded-sm py-4 pr-2 pl-3 text-gray-500 lg:max-w-[490px] lg:absolute lg:left-0 mt-3 z-30">
							SoundWaves Is a full-stack web application with{" "}
							<span className="text-orange-400">
								dynamic user based dashboard
							</span>
							. Admin can promote or delete users at his will.
							Instructors can add or manage their classes.
							Students can choose classes and pay for that class
							using stripe.
						</p>
						<div className="text-gray-300 text-xs grid grid-cols-2 lg:mt-[164px] justify-end gap-1 md:mt-[10px]">
							<p className="">React</p>
							<p className="">Stripe</p>
							<p className="">Firebase</p>
							<p className="">Node.js</p>
							<p className="">MongoDB</p>
							<p>JWT</p>
						</div>
						<div className="flex items-center justify-start gap-6 mt-3 text-2xl text-white">
							<a
								href="https://github.com/mk-saadi/SoundWaves-Client"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaGithub />{" "}
								<span className="text-sm">Client</span>
							</a>
							<a
								href="https://github.com/mk-saadi/SoundWaves-Server"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaGithub />{" "}
								<span className="text-sm">Server</span>
							</a>
							<a
								href="https://summercamp12-1ae5f.web.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaExternalLinkAlt />
								<span className="text-sm">Live</span>
							</a>
						</div>
					</div>
				</div>

				{/* project 5 */}
				<div className="relative grid gap-4 mb-16 md:grid-cols-2 md:mb-20 lg:mb-10 lg:gap-0 md:gap-1 ">
					<a
						href="https://assignment-10-5ba07.web.app/"
						className="relative order-1 rounded-sm"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={ass3}
							alt=""
							className="w-auto col-span-1 duration-200 rounded-md cursor-pointer h-80 saturate-0 hover:saturate-100"
						/>
					</a>
					<div className="z-20 order-2 col-span-1 text-right">
						<p className="font-semibold text-orange-400">
							Featured Project 04
						</p>
						<p className="mb-3 text-xl font-semibold text-white">
							Smoki'n
						</p>
						<p className="text-sm bg-white shadow-md rounded-sm py-4 pr-2 pl-3 text-gray-600 lg:max-w-[490px] lg:absolute lg:left-0 mt-3 z-30">
							Smoki'n is a Single page React project. It's main
							feature is it's firebase integration, dynamic url.
						</p>
						<div className="text-gray-300 text-xs grid grid-cols-2 lg:mt-[124px] justify-end md:mt-[10px] gap-1">
							<p className="">React</p>
							<p className="">Firebase</p>
							<p className="">Tailwind CSS</p>
							<p className="">Firebase</p>
						</div>
						<div className="flex items-center justify-end gap-6 mt-3 text-2xl text-white">
							<a
								href="https://github.com/mk-saadi/smokin-Client"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaGithub />
								<span className="text-sm">Client</span>
							</a>
							<a
								href="https://github.com/mk-saadi/smokin-Server"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaGithub />
								<span className="text-sm">Server</span>
							</a>
							<a
								href="https://assignment-10-5ba07.web.app/"
								target="_blank"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
								rel="noopener noreferrer"
							>
								<FaExternalLinkAlt />
								<span className="text-sm">Live</span>
							</a>
						</div>
					</div>
				</div>

				{/* project 6*/}
				<div className="relative grid gap-4 mb-16 md:grid-cols-2 md:mb-20 lg:mb-10 lg:gap-0 md:gap-1 ">
					<a
						href="https://grand-medovik-3fb536.netlify.app/"
						className="relative order-2"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={geo}
							alt=""
							className="w-auto col-span-1 duration-200 rounded-md cursor-pointer h-80 saturate-0 hover:saturate-100"
						/>
					</a>

					<div className="z-20 order-1 col-span-1 text-left">
						<p className="font-semibold text-orange-400">
							Featured Project 05
						</p>
						<p className="mb-3 text-xl font-semibold text-white">
							Geometry Genius
						</p>
						<p className="text-sm bg-white shadow-md rounded-sm py-4 pr-2 pl-3 text-gray-500 lg:max-w-[490px] lg:absolute lg:left-0 mt-3 z-30">
							Geometry Genius is a{" "}
							<span className="text-orange-400">javascript</span>{" "}
							application. The website is made to do simple
							geometry calculation.
						</p>
						<div className="text-gray-300 text-xs grid grid-cols-2 lg:mt-[150px] md:mt-[10px] justify-end gap-1">
							<p className="">React</p>
							<p className="">Node.js</p>
							<p className="">MongoDB</p>
							<p className="">Firebase</p>
							<p>JWT</p>
						</div>
						<div className="flex items-center justify-start gap-6 mt-3 text-2xl text-white">
							<a
								href="https://github.com/mk-saadi/geometry-genius"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaGithub />
								<span className="text-sm">Client</span>
							</a>
							<a
								href="https://grand-medovik-3fb536.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaExternalLinkAlt />
								<span className="text-sm">Live</span>
							</a>
						</div>
					</div>
				</div>
				{/* project 7*/}
				<div className="relative grid gap-4 mb-16 md:grid-cols-2 md:mb-20 lg:mb-10 lg:gap-0 md:gap-1 ">
					<a
						href="https://peppy-meringue-c00170.netlify.app/"
						className="relative order-1 rounded-sm"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={ass8}
							alt=""
							className="w-auto col-span-1 duration-200 rounded-md cursor-pointer h-80 saturate-0 hover:saturate-100"
						/>
					</a>
					<div className="z-20 order-2 col-span-1 text-right">
						<p className="font-semibold text-orange-400">
							Featured Project 06
						</p>
						<p className="mb-3 text-xl font-semibold text-white">
							Prohub
						</p>
						<p className="text-sm bg-white shadow-md rounded-sm py-4 pr-2 pl-3 text-gray-600 lg:max-w-[490px] lg:absolute lg:left-0 mt-3 z-30">
							Prohub is a simple single page React application.
						</p>
						<div className="text-gray-300 text-xs grid grid-cols-2 md:mt-[10px] lg:mt-[150px] justify-end gap-1">
							<p className="">React</p>
							<p className="">BootStrap</p>
						</div>
						<div className="flex items-center justify-end gap-6 mt-3 text-2xl text-white">
							<a
								href="https://github.com/mk-saadi/prohub"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaGithub />
								<span className="text-sm">Client</span>
							</a>
							<a
								href="https://peppy-meringue-c00170.netlify.app/"
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-center gap-2 duration-200 hover:text-orange-400"
							>
								<FaExternalLinkAlt />
								<span className="text-sm">Live</span>
							</a>
						</div>
					</div>
				</div>
			</Reveal>
		</div>
	);
};

export default Projects;
