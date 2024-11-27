import { ExternalLink, Github, Link, Server } from "lucide-react";
import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Projects = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<Fade duration={2500}>
			<div className="overflow-y-hidden">
				<div className="mb-2 text-para dark:text-gray-400">
					<h2 className="font-mono text-3xl font-medium uppercase dark:text-gray-200">Projects</h2>
					<p>Some of the projects I have completed</p>
				</div>
				<Slide
					direction="up"
					className="overflow-y-hidden"
				>
					<div className="flex flex-col items-center justify-center overflow-y-hidden">
						<div className="grid grid-cols-4 gap-2">
							{data.map((item) => (
								<div
									key={item.id}
									className="border rounded-sm shadow-md bg-black/40 group border-gray-900/10 dark:border-white/10"
								>
									<div className="relative w-full h-48 overflow-hidden rounded-sm cursor-pointer">
										<div className="absolute inset-0 duration-300 rounded-sm opacity-0 backdrop-blur-sm bg-black/50 group-hover:opacity-100">
											<a
												href={item.link}
												target="_blank"
												rel="noreferrer"
												className="flex items-center justify-center h-full font-sans text-base leading-5 text-center text-white gap-x-2"
												// className="flex items-center justify-center h-full font-mono text-xl text-white gap-x-2"
											>
												{/* <ExternalLink size={20} /> Visit */}
												{item.des}
											</a>
										</div>
										<img
											src={item.image}
											alt=""
											className="object-cover mb-4 rounded-sm w-fit h-fit"
										/>
									</div>
									<Slide direction="up">
										<div className="flex items-center justify-between p-2 text-gray-200 dark:text-gray-400">
											<h3 className="font-mono text-base font-medium dark:text-gray-200 whitespace-nowrap">
												{item.name}
											</h3>
											<div className="flex flex-col items-center justify-end w-full font-mono xl:flex-row gap-x-1">
												<a
													className="flex items-center justify-center px-3 py-1 text-white duration-300 border-t rounded-sm shadow-md shadow-black/40 border-white/60 hover:bg-red-600 dark:hover:bg-red-600 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950"
													href={item.link}
													title="visit link"
													target="_blank"
													rel="noreferrer"
												>
													<Link size={19} />
												</a>
												<a
													className="flex items-center justify-center px-3 py-1 text-white duration-300 border-t rounded-sm shadow-md shadow-black/40 border-white/60 hover:bg-red-600 dark:hover:bg-red-600 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950"
													href={item.github_client}
													title="github client repository"
													target="_blank"
													rel="noreferrer"
												>
													<Github size={19} />
												</a>
												{item.tech_backend && (
													<a
														className="flex items-center justify-center px-3 py-1 text-white duration-300 border-t rounded-sm shadow-md shadow-black/40 border-white/60 hover:bg-red-600 dark:hover:bg-red-600 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950"
														href={item.github_server}
														title="github server repository"
														target="_blank"
														rel="noreferrer"
													>
														<Server size={19} />
													</a>
												)}
											</div>
										</div>
									</Slide>
								</div>
							))}
						</div>
					</div>
				</Slide>
			</div>
		</Fade>
	);
};

export default Projects;
