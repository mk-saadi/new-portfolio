import ass1 from "../assets/animefig.png";
import ass2 from "../assets/summercamp-12.png";
import ass3 from "../assets/assignment-10.png";
import "./project.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "react-awesome-reveal";

// const Projects = () => {
// 	return (
// 		<div className="grid grid-cols-1 gap-20 drop-shadow-md">
// 			{/* project 1 */}
// 			<div
// 				className="relative grid grid-cols-2"
// 				data-aos="fade-up"
// 				data-aos-offset="200"
// 				data-aos-duration="300"
// 			>
// 				<a
// 					href="https://animefig-3626c.web.app/"
// 					className="relative"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					data-aos="fade-left"
// 					data-aos-offset="200"
// 					data-aos-duration="500"
// 				>
// 					<img
// 						src={ass1}
// 						alt=""
// 						className="w-auto col-span-1 rounded-md cursor-pointer h-80 banner-image"
// 					/>
// 					<div className="gradient-overlay"></div>
// 				</a>

// 				<div className="z-20 col-span-1 text-right">
// 					<p className="text-[#fff]">Featured Project 01</p>
// 					<p className="mb-3 text-xl font-semibold text-white">
// 						DiFly
// 					</p>
// 					<p className="text-sm bg-white shadow-md rounded-sm py-4 pr-2 pl-3 text-gray-500 lg:max-w-[490px] absolute right-0 mt-3 z-30">
// 						animeFig Is a full-stack web application. Anyone logged
// 						in can view details of the figures or add new figures.
// 						Edit and delete is also implemented in the website. For
// 						styling Tailwind CSS and daisyUI were used.
// 					</p>
// 					<div className="text-slate-400 text-md lg:mt-[144px] flex justify-end gap-4">
// 						<p className="">React</p>
// 						<p className="">Node.js</p>
// 						<p className="">MongoDB</p>
// 						<p className="">Firebase</p>
// 					</div>
// 					<div className="flex items-center justify-end gap-6 mt-3 text-2xl text-white">
// 						<a
// 							href="https://github.com/mk-saadi/animeFig-Client"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							<FaGithub className="hover:text-[#f2754c] duration-200" />
// 						</a>
// 						<a
// 							href="https://animefig-3626c.web.app/"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							<FaExternalLinkAlt className="hover:text-[#f2754c] duration-200" />
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 			{/* project 2 */}
// 			<div
// 				className="relative grid grid-cols-2"
// 				data-aos="fade-up"
// 				data-aos-offset="200"
// 				data-aos-duration="500"
// 			>
// 				<a
// 					href="https://summercamp12-1ae5f.web.app/"
// 					className="relative order-2"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					data-aos="fade-right"
// 					data-aos-offset="200"
// 					data-aos-duration="500"
// 				>
// 					<img
// 						src={ass2}
// 						alt=""
// 						className="w-auto col-span-1 rounded-md cursor-pointer h-80 banner-image"
// 					/>
// 					<div className="gradient-overlay"></div>
// 				</a>

// 				<div className="z-20 order-1 col-span-1 text-left">
// 					<p className="text-[#579981]">Featured Project 02</p>
// 					<p className="mb-3 text-xl text-white">SoundWaves</p>
// 					<p className="text-sm bg-slate-700 shadow-md rounded-sm py-4 pr-2 pl-3 text-slate-400 lg:max-w-[490px] absolute left-0 mt-3 z-30">
// 						SoundWaves Is a full-stack web application with dynamic
// 						user based dashboard. Admin can promote or delete users
// 						at his will. Instructors can add or manage their
// 						classes. Students can choose classes and pay for that
// 						class using stripe.
// 					</p>
// 					<div className="text-slate-400 text-md lg:mt-[164px] flex justify-start gap-4">
// 						<p className="">React</p>
// 						<p className="">Node.js</p>
// 						<p className="">MongoDB</p>
// 						<p className="">Firebase</p>
// 						<p>JWT</p>
// 					</div>
// 					<div className="flex items-center justify-start gap-6 mt-3 text-2xl text-white">
// 						<a
// 							href="https://github.com/mk-saadi/SoundWaves-Client"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							<FaGithub className="hover:text-[#f2754c] duration-200" />
// 						</a>
// 						<a
// 							href="https://summercamp12-1ae5f.web.app/"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							<FaExternalLinkAlt className="hover:text-[#f2754c] duration-200" />
// 						</a>
// 					</div>
// 				</div>
// 			</div>

// 			{/* project 2 */}
// 			<div
// 				className="relative grid grid-cols-2"
// 				data-aos="fade-up"
// 				data-aos-offset="200"
// 				data-aos-duration="300"
// 			>
// 				<a
// 					href="https://animefig-3626c.web.app/"
// 					className="relative"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					data-aos="fade-left"
// 					data-aos-offset="200"
// 					data-aos-duration="500"
// 				>
// 					<img
// 						src={ass1}
// 						alt=""
// 						className="w-auto col-span-1 rounded-md cursor-pointer h-80 banner-image"
// 					/>
// 					<div className="gradient-overlay"></div>
// 				</a>

// 				<div className="z-20 col-span-1 text-right">
// 					<p className="text-[#579981]">Featured Project 03</p>
// 					<p className="mb-3 text-xl text-white">animeFig</p>
// 					<p className="text-sm bg-white shadow-md rounded-sm py-4 pr-2 pl-3 text-gray-500 lg:max-w-[490px] absolute right-0 mt-3 z-30">
// 						animeFig Is a full-stack web application. Anyone logged
// 						in can view details of the figures or add new figures.
// 						Edit and delete is also implemented in the website. For
// 						styling Tailwind CSS and daisyUI were used.
// 					</p>
// 					<div className="text-slate-400 text-md lg:mt-[144px] flex justify-end gap-4">
// 						<p className="">React</p>
// 						<p className="">Node.js</p>
// 						<p className="">MongoDB</p>
// 						<p className="">Firebase</p>
// 					</div>
// 					<div className="flex items-center justify-end gap-6 mt-3 text-2xl text-white">
// 						<a
// 							href="https://github.com/mk-saadi/animeFig-Client"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							<FaGithub className="hover:text-[#f2754c] duration-200" />
// 						</a>
// 						<a
// 							href="https://animefig-3626c.web.app/"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							<FaExternalLinkAlt className="hover:text-[#f2754c] duration-200" />
// 						</a>
// 					</div>
// 				</div>
// 			</div>

// 			{/* project 3 */}
// 			<div
// 				className="relative grid grid-cols-2"
// 				data-aos="fade-up"
// 				data-aos-offset="200"
// 				data-aos-duration="500"
// 			>
// 				<a
// 					href="https://summercamp12-1ae5f.web.app/"
// 					className="relative order-2"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					data-aos="fade-right"
// 					data-aos-offset="200"
// 					data-aos-duration="500"
// 				>
// 					<img
// 						src={ass2}
// 						alt=""
// 						className="w-auto col-span-1 rounded-md cursor-pointer h-80 banner-image"
// 					/>
// 					<div className="gradient-overlay"></div>
// 				</a>

// 				<div className="z-20 order-1 col-span-1 text-left">
// 					<p className="text-[#579981]">Featured Project 04</p>
// 					<p className="mb-3 text-xl text-white">SoundWaves</p>
// 					<p className="text-sm bg-slate-700 shadow-md rounded-sm py-4 pr-2 pl-3 text-slate-400 lg:max-w-[490px] absolute left-0 mt-3 z-30">
// 						SoundWaves Is a full-stack web application with dynamic
// 						user based dashboard. Admin can promote or delete users
// 						at his will. Instructors can add or manage their
// 						classes. Students can choose classes and pay for that
// 						class using stripe.
// 					</p>
// 					<div className="text-slate-400 text-md lg:mt-[164px] flex justify-start gap-4">
// 						<p className="">React</p>
// 						<p className="">Node.js</p>
// 						<p className="">MongoDB</p>
// 						<p className="">Firebase</p>
// 						<p>JWT</p>
// 					</div>
// 					<div className="flex items-center justify-start gap-6 mt-3 text-2xl text-white">
// 						<a
// 							href="https://github.com/mk-saadi/SoundWaves-Client"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							<FaGithub className="hover:text-[#f2754c] duration-200" />
// 						</a>
// 						<a
// 							href="https://summercamp12-1ae5f.web.app/"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							<FaExternalLinkAlt className="hover:text-[#f2754c] duration-200" />
// 						</a>
// 					</div>
// 				</div>
// 			</div>

// 			{/* project 4 */}
// 			<div
// 				className="relative grid grid-cols-2"
// 				data-aos="fade-up"
// 				data-aos-offset="200"
// 				data-aos-duration="500"
// 			>
// 				<a
// 					href="https://assignment-10-5ba07.web.app/"
// 					className="relative order-1 rounded-sm"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					data-aos="fade-left"
// 					data-aos-offset="200"
// 					data-aos-duration="500"
// 				>
// 					<img
// 						src={ass3}
// 						alt=""
// 						className="w-auto col-span-1 rounded-md cursor-pointer h-80 banner-image"
// 					/>
// 					<div className="gradient-overlay"></div>
// 				</a>
// 				<div className="z-20 order-2 col-span-1 text-right">
// 					<p className="text-[#579981]">Featured Project 05</p>
// 					<p className="mb-3 text-xl text-white">Smoki'n</p>
// 					<p className="text-sm bg-slate-700 shadow-md rounded-sm py-4 pr-2 pl-3 text-slate-400 lg:max-w-[490px] absolute right-0 mt-3 z-30">
// 						Smoki'n is a Single page React project. It's main
// 						feature is it's firebase integration, dynamic url.
// 					</p>
// 					<div className="text-slate-400 text-md lg:mt-[104px] flex justify-end gap-4">
// 						<p className="">React</p>
// 						<p className="">Firebase</p>
// 						<p className="">Tailwind</p>
// 					</div>
// 					<div className="flex items-center justify-end gap-6 mt-3 text-2xl text-white">
// 						<a
// 							href="https://github.com/mk-saadi/smokin-Client"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							<FaGithub className="hover:text-[#f2754c] duration-200" />
// 						</a>
// 						<a
// 							href="https://assignment-10-5ba07.web.app/"
// 							target="_blank"
// 							rel="noopener noreferrer"
// 						>
// 							<FaExternalLinkAlt className="hover:text-[#f2754c] duration-200" />
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

const Projects = () => {
	return (
		<div>
			<Reveal
				cascade
				triggerOnce
				damping={0.1}
				className="grid grid-cols-1 drop-shadow-md"
			>
				{/* project 1 */}
				<div className="relative grid grid-cols-2 mb-8">
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
							Featured Project 01
						</p>
						<p className="mb-3 text-xl font-semibold text-white">
							DiFly
						</p>
						<p className="text-sm bg-white shadow-md rounded-sm py-4 pr-2 pl-3 text-gray-500 lg:max-w-[490px] absolute right-0 mt-3 z-30">
							animeFig Is a full-stack web application. Anyone
							logged in can view details of the figures or add new
							figures. Edit and delete is also implemented in the
							website. For styling Tailwind CSS and daisyUI were
							used.
						</p>
						<p className="text-sm bg-white shadow-md rounded-sm py-4 pr-2 pl-3 text-gray-500 lg:max-w-[490px]mt-3">
							animeFig Is a full-stack web application. Anyone
							logged in can view details of the figures or add new
							figures. Edit and delete is also implemented in the
							website. For styling Tailwind CSS and daisyUI were
							used.
						</p>
						<div className="flex justify-end gap-4 text-sm text-gray-300">
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
				</div>
				{/* project 2 */}
				<div className="relative grid grid-cols-2 mb-8">
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
						<p className="text-[#579981]">Featured Project 02</p>
						<p className="mb-3 text-xl text-white">SocialLink</p>
						<p className="text-sm bg-slate-700 shadow-md rounded-sm py-4 pr-2 pl-3 text-slate-400 lg:max-w-[490px] absolute left-0 mt-3 z-30">
							SoundWaves Is a full-stack web application with
							dynamic user based dashboard. Admin can promote or
							delete users at his will. Instructors can add or
							manage their classes. Students can choose classes
							and pay for that class using stripe.
						</p>
						<div className="text-slate-400 text-md lg:mt-[164px] flex justify-start gap-4">
							<p className="">React</p>
							<p className="">Node.js</p>
							<p className="">MongoDB</p>
							<p className="">Firebase</p>
							<p>JWT</p>
						</div>
						<div className="flex items-center justify-start gap-6 mt-3 text-2xl text-white">
							<a
								href="https://github.com/mk-saadi/SoundWaves-Client"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub className="duration-200 hover:text-orange-400" />
							</a>
							<a
								href="https://summercamp12-1ae5f.web.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaExternalLinkAlt className="duration-200 hover:text-orange-400" />
							</a>
						</div>
					</div>
				</div>

				{/* project 3 */}
				<div className="relative grid grid-cols-2 mb-8">
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
						<p className="text-[#579981]">Featured Project 03</p>
						<p className="mb-3 text-xl text-white">animeFig</p>
						<p className="text-sm bg-white shadow-md rounded-sm py-4 pr-2 pl-3 text-gray-500 lg:max-w-[490px] absolute right-0 mt-3 z-30">
							animeFig Is a full-stack web application. Anyone
							logged in can view details of the figures or add new
							figures. Edit and delete is also implemented in the
							website. For styling Tailwind CSS and daisyUI were
							used.
						</p>
						<div className="text-slate-400 text-md lg:mt-[144px] flex justify-end gap-4">
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
				</div>

				{/* project 3 */}
				<div className="relative grid grid-cols-2 mb-8">
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
						<p className="text-[#579981]">Featured Project 04</p>
						<p className="mb-3 text-xl text-white">SoundWaves</p>
						<p className="text-sm bg-slate-700 shadow-md rounded-sm py-4 pr-2 pl-3 text-slate-400 lg:max-w-[490px] absolute left-0 mt-3 z-30">
							SoundWaves Is a full-stack web application with
							dynamic user based dashboard. Admin can promote or
							delete users at his will. Instructors can add or
							manage their classes. Students can choose classes
							and pay for that class using stripe.
						</p>
						<div className="text-slate-400 text-md lg:mt-[164px] flex justify-start gap-4">
							<p className="">React</p>
							<p className="">Node.js</p>
							<p className="">MongoDB</p>
							<p className="">Firebase</p>
							<p>JWT</p>
						</div>
						<div className="flex items-center justify-start gap-6 mt-3 text-2xl text-white">
							<a
								href="https://github.com/mk-saadi/SoundWaves-Client"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub className="duration-200 hover:text-orange-400" />
							</a>
							<a
								href="https://summercamp12-1ae5f.web.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaExternalLinkAlt className="duration-200 hover:text-orange-400" />
							</a>
						</div>
					</div>
				</div>

				{/* project 4 */}
				<div className="relative grid grid-cols-2 mb-8">
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
						<p className="text-[#579981]">Featured Project 05</p>
						<p className="mb-3 text-xl text-white">Smoki'n</p>
						<p className="text-sm bg-slate-700 shadow-md rounded-sm py-4 pr-2 pl-3 text-slate-400 lg:max-w-[490px] absolute right-0 mt-3 z-30">
							Smoki'n is a Single page React project. It's main
							feature is it's firebase integration, dynamic url.
						</p>
						<div className="text-slate-400 text-md lg:mt-[104px] flex justify-end gap-4">
							<p className="">React</p>
							<p className="">Firebase</p>
							<p className="">Tailwind</p>
						</div>
						<div className="flex items-center justify-end gap-6 mt-3 text-2xl text-white">
							<a
								href="https://github.com/mk-saadi/smokin-Client"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub className="duration-200 hover:text-orange-400" />
							</a>
							<a
								href="https://assignment-10-5ba07.web.app/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaExternalLinkAlt className="duration-200 hover:text-orange-400" />
							</a>
						</div>
					</div>
				</div>
			</Reveal>
		</div>
	);
};

export default Projects;
