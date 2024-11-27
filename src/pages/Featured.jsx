import { ExternalLink, Github, Link } from "lucide-react";
import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Featured = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				const response = await fetch("data.json");
				const jsonData = await response.json();
				setData(jsonData.slice(0, 3));
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<Fade duration={2500}>
			<div className="h-full overflow-hidden text-para dark:text-gray-400">
				<h2 className="font-mono text-3xl font-medium uppercase">Featured</h2>
				<p className="mb-2">Below are 3 of my best projects</p>
				<Slide
					direction="up"
					className="flex items-center justify-center"
				>
					{loading ? (
						<div className="grid w-full grid-cols-3 gap-x-4">
							<div>Loading</div>
							<div>Loading</div>
							<div>Loading</div>
						</div>
					) : (
						// Your data rendering
						<div className="grid grid-cols-3 gap-x-4">
							{data.map((item) => (
								<div
									key={item.id}
									className="flex flex-col overflow-hidden border rounded-md shadow-md group bg-black/40 border-gray-900/10 dark:border-white/10"
								>
									<div className="relative w-full h-56 overflow-hidden rounded-md cursor-pointer">
										<div className="absolute inset-0 duration-300 rounded-md opacity-0 backdrop-blur-sm bg-black/50 group-hover:opacity-100">
											<a
												href={item.link}
												target="_blank"
												rel="noreferrer"
												className="flex items-center justify-center h-full font-mono text-2xl text-white gap-x-2"
											>
												<ExternalLink size={26} /> Visit
											</a>
										</div>
										<img
											src={item.image}
											alt={item.name}
											className="object-cover rounded-md"
										/>
									</div>
									<div className="relative p-2">
										<div className="flex flex-col h-[16.5rem] gap-y-1">
											<div className="flex items-center justify-between">
												<h3 className="font-mono text-2xl font-medium">
													{item.name}
												</h3>
												<p className="text-base">{item.stack}</p>
											</div>
											<p className="text-sm leading-5">{item.des}</p>
											<p
												className="line-clamp-1"
												title={item.tech_frontend}
											>
												Frontend: {item.tech_frontend}
											</p>
											{item.tech_backend && (
												<p
													className="line-clamp-1"
													title={item.tech_backend}
												>
													Backend: {item.tech_backend}
												</p>
											)}
										</div>
										<div className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-full font-mono gap-y-1">
											<a
												className="flex items-center justify-center w-full py-2 font-sans text-base font-medium text-white border-t border-gray-900 rounded-sm whitespace-nowrap gap-x-2 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950"
												href={item.link}
												target="_blank"
												rel="noreferrer"
											>
												<Link size={20} /> Link
											</a>
											<div className="flex items-center justify-center w-full gap-x-1">
												<a
													className="flex items-center justify-center w-full py-2 font-sans text-base font-medium text-white border-t border-gray-900 rounded-sm whitespace-nowrap gap-x-2 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950"
													href={item.github_client}
													target="_blank"
													rel="noreferrer"
												>
													<Github size={20} /> Client
												</a>
												{item.tech_backend && (
													<a
														className="flex items-center justify-center w-full py-2 font-sans text-base font-medium text-white border-t border-gray-900 rounded-sm whitespace-nowrap gap-x-2 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950"
														href={item.github_server}
														target="_blank"
														rel="noreferrer"
													>
														<Github size={20} /> Server
													</a>
												)}
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
					)}
					{/* <div className="grid grid-cols-3 gap-x-4">
						{data.map((item) => (
							<div
								key={item.id}
								className="flex flex-col overflow-hidden border rounded-md border-gray-900/10 dark:border-white/10"
							>
								<div className="relative w-full h-56 overflow-hidden rounded-md cursor-pointer group">
									<div className="absolute inset-0 duration-300 rounded-md opacity-0 backdrop-blur-sm bg-black/50 group-hover:opacity-100">
										<a
											href={item.link}
											target="_blank"
											rel="noreferrer"
											className="flex items-center justify-center h-full font-mono text-2xl text-white gap-x-2"
										>
											<ExternalLink size={26} /> Visit
										</a>
									</div>
									<img
										src={item.image}
										alt={item.name}
										className="object-cover rounded-md"
									/>
								</div>
								<div className="relative p-2">
									<div className="flex flex-col h-[16.5rem] gap-y-1">
										<div className="flex items-center justify-between">
											<h3 className="font-mono text-2xl font-medium">{item.name}</h3>
											<p className="text-base">{item.stack}</p>
										</div>
										<p className="text-sm leading-5">{item.des}</p>
										<p
											className="line-clamp-1"
											title={item.tech_frontend}
										>
											Frontend: {item.tech_frontend}
										</p>
										{item.tech_backend && (
											<p
												className="line-clamp-1"
												title={item.tech_backend}
											>
												Backend: {item.tech_backend}
											</p>
										)}
									</div>
									<div className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-full font-mono gap-y-1">
										<a
											className="flex items-center justify-center w-full py-2 font-sans text-base font-medium text-white border-t border-gray-900 rounded-sm whitespace-nowrap gap-x-2 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950"
											href={item.link}
											target="_blank"
											rel="noreferrer"
										>
											<Link size={20} /> Link
										</a>
										<div className="flex items-center justify-center w-full gap-x-1">
											<a
												className="flex items-center justify-center w-full py-2 font-sans text-base font-medium text-white border-t border-gray-900 rounded-sm whitespace-nowrap gap-x-2 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950"
												href={item.github_client}
												target="_blank"
												rel="noreferrer"
											>
												<Github size={20} /> Client
											</a>

											{item.tech_backend && (
												<a
													className="flex items-center justify-center w-full py-2 font-sans text-base font-medium text-white border-t border-gray-900 rounded-sm whitespace-nowrap gap-x-2 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950"
													href={item.github_server}
													target="_blank"
													rel="noreferrer"
												>
													<Github size={20} /> Server
												</a>
											)}
										</div>
									</div>
								</div>
							</div>
						))}
					</div> */}
				</Slide>
			</div>
		</Fade>
	);
};

export default Featured;
