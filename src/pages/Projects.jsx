import { useEffect, useState } from "react";

const Projects = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div className="flex flex-col items-center justify-center overflow-y-auto">
			<h2 className="text-2xl font-medium font">Some of the projects I have completed</h2>
			<div>
				{data.map((item) => (
					<div key={item.id}>
						<img
							src={item.image}
							alt=""
							className="object-cover h-full mb-4 rounded-md w-96"
						/>
						<h3>{item.name}</h3>
						<p>{item.des}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
