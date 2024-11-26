import { useEffect, useState } from "react";

const Featured = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setData(data.slice(0, 3)));
	}, []);

	return (
		<div className="h-full border text-para dark:text-gray-400">
			<h2 className="font-mono text-2xl font-medium">featured</h2>
			<p>Below are some of my best projects</p>
			<div className="flex items-center justify-center">
				<div className="grid grid-cols-3 gap-x-4">
					{data.map((item) => (
						<div
							key={item.id}
							className="flex flex-col border rounded-md border-gray-900/10 dark:border-white/10 gap-y-2"
						>
							<div className="relative w-full h-56 overflow-hidden rounded-md cursor-pointer group">
								<div className="absolute inset-0 duration-300 opacity-0 backdrop-blur-sm bg-black/50 group-hover:opacity-100">
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
									className="object-cover mb-4 rounded-md"
								/>
							</div>
							<div className="p-4">
								<h3 className="font-mono text-2xl font-medium">{item.name}</h3>
								<p>{item.des}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Featured;
