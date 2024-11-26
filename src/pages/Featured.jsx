import { Github, Link } from "lucide-react";
import { useEffect, useState } from "react";

const Featured = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setData(data.slice(0, 3)));
	}, []);

	return (
		<div className="h-full overflow-hidden text-para dark:text-gray-400">
			<h2 className="font-mono text-2xl font-medium">featured</h2>
			<p>Below are some of my best projects</p>
			<div className="flex items-center justify-center">
				<div className="grid grid-cols-3 gap-x-4">
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
										className="flex items-center justify-center h-full font-mono text-2xl text-white"
									>
										Visit
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
									<p className="leading-5">{item.des}</p>
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
								<div className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-full font-mono gap-y-2">
									<button className="flex items-center justify-center w-full py-2 font-sans text-base font-medium text-white border-t border-gray-900 rounded-sm whitespace-nowrap gap-x-2 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950">
										<Link size={20} /> Link
									</button>
									<div className="flex items-center justify-center w-full gap-x-2">
										<button className="flex items-center justify-center w-full py-2 font-sans text-base font-medium text-white border-t border-gray-900 rounded-sm whitespace-nowrap gap-x-2 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950">
											<Github size={20} /> Client
										</button>
										<button className="flex items-center justify-center w-full py-2 font-sans text-base font-medium text-white border-t border-gray-900 rounded-sm whitespace-nowrap gap-x-2 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950">
											<Github size={20} /> Server
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Featured;
