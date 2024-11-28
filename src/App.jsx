import Intro from "./components/Intro";
import img from "./assets/me.png";
import { Download, PanelsTopLeft, Send, Server } from "lucide-react";
import { Link } from "react-router-dom";
import pdf from "./assets/resume.pdf";
import { Fade, Slide } from "react-awesome-reveal";

const App = () => {
	return (
		<Fade duration={2500}>
			<div className="flex flex-col items-center justify-between w-full h-full">
				<h1 className="flex items-center justify-center mb-6 font-mono text-6xl font-semibold tracking-tight xll:mt-16 gap-x-4 text-dhusor dark:text-gray-200">
					<span className="uppercase border-b-4 border-dhusor dark:border-gray-300">Muhiuddin</span>{" "}
					Khaled
				</h1>
				<Slide direction="up">
					<div className="grid h-full grid-cols-4 font-mono text-dhusor dark:text-gray-200">
						{/* first column */}
						<div className="col-span-1 xl:mt-[4rem]">
							<h2 className="text-2xl font-medium text-dhusor dark:text-gray-200">Services</h2>
							<ul className="flex flex-col mt-4 gap-y-6">
								<li>
									<div className="flex items-center justify-start gap-x-3">
										<span className="p-2 bg-white border-t rounded-sm dark:border-white/20 dark:text-gray-300 dark:bg-gray-950">
											<PanelsTopLeft className="te" />
										</span>
										<h3 className="text-lg font-medium text-dhusor dark:text-gray-200">
											Frontend
										</h3>
									</div>
									<div className="">
										<p className="font-sans text-base text-para dark:text-gray-400">
											Some of the frontend technologies I use:
										</p>
										<ul className="grid grid-cols-2 font-sans text-base text-para dark:text-gray-400">
											<li>HTML</li>
											<li>CSS</li>
											<li>JavaScript</li>
											<li>React</li>
											<li>NextJS</li>
											<li>Tailwind</li>
											<li>BootStrap</li>
										</ul>
									</div>
								</li>
								<li>
									<div className="flex items-center justify-start gap-x-3">
										<span className="p-2 bg-white border-t rounded-sm dark:border-white/20 dark:text-gray-300 dark:bg-gray-950">
											<Server className="te" />
										</span>
										<h3 className="text-lg font-medium text-dhusor dark:text-gray-200">
											Backend
										</h3>
									</div>
									<div className="">
										<p className="font-sans text-base text-para dark:text-gray-400">
											Some of the backend technologies I use:
										</p>
										<ul className="grid grid-cols-2 font-sans text-base text-para dark:text-gray-400">
											<li>Express</li>
											<li>Node</li>
											<li>MongoDB</li>
											<li>Firebase</li>
										</ul>
									</div>
								</li>
							</ul>
						</div>
						{/* second column */}
						<div className="relative flex items-baseline justify-center w-full h-full col-span-2">
							<div className="relative pointer-events-none select-none">
								<img
									src={img}
									alt=""
									className="relative dark:grayscale z-20 object-cover w-auto h-[32rem]"
								/>
								<div className="absolute inset-0 z-10 mt-32 border-t shadow-xl border-white/20 rounded-t-2xl bg-biscuit dark:bg-black" />
							</div>
						</div>
						{/* third column */}
						<div className="col-span-1 xl:mt-[4rem]">
							<h2 className="font-mono text-2xl font-medium text-dhusor dark:text-gray-200">
								Web specialist based in Bangladesh
							</h2>
							<p className="mt-4 font-sans text-base text-para dark:text-gray-400">
								As a MERN stack web developer, I&apos;m on a mission to create digital
								experiences that leave a lasting impact.
								<br />
								<br />
								My focus is on building applications that not only meet functional
								requirements but also provide a delightful user experience.
							</p>
							<Slide direction="up">
								<div className="flex items-center justify-start mt-6 gap-x-4">
									<Link
										to="/contacts"
										className="flex items-center justify-center px-6 py-2 font-sans text-lg font-medium text-white border-t border-gray-900 rounded-sm shadow-md whitespace-nowrap gap-x-2 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950"
									>
										<Send size={20} />
										Hire me
									</Link>
									<button
										onClick={() => {
											const link = document.createElement("a");
											link.href = pdf;
											link.download = "Muhiuddin_Khaled.pdf";
											link.click();
										}}
										className="flex items-center justify-center px-6 py-2 font-sans text-lg font-medium text-white border-t border-gray-900 rounded-sm shadow-md whitespace-nowrap gap-x-2 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950"
									>
										<Download size={20} />
										Resume
									</button>
								</div>
							</Slide>
						</div>
					</div>
				</Slide>
			</div>
		</Fade>
	);
};

export default App;
