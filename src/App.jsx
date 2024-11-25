import Intro from "./components/Intro";
import img from "./assets/me.png";
import { PanelsTopLeft, Server } from "lucide-react";

const App = () => {
	return (
		<div className="flex flex-col items-center justify-between w-full h-full">
			<h1 className="flex items-center justify-center mb-6 font-mono text-6xl font-semibold tracking-tight xll:mt-28 gap-x-4 text-dhusor dark:text-gray-300">
				<span className="border-b-4 border-dhusor dark:border-gray-300">Muhiuddin</span> Khaled
			</h1>
			<div className="grid h-full grid-cols-4 font-mono text-dhusor dark:text-gray-300">
				{/* first column */}
				<div className="col-span-1">
					<h2>Services</h2>
					<ul className="flex flex-col gap-y-2">
						<li>
							<div className="flex items-center justify-start">
								<span className="p-1 bg-white rounded-sm">
									<PanelsTopLeft className="te" />
								</span>
								<h3>Frontend</h3>
							</div>
						</li>
						<li>
							<div className="flex items-center justify-start">
								<span className="p-1 bg-white rounded-sm">
									<Server className="te" />
								</span>
								<h3>Backend</h3>
							</div>
						</li>
					</ul>
				</div>
				{/* second column */}
				<div className="relative flex items-baseline justify-center w-full h-full col-span-2">
					<div className="pointer-events-none select-none">
						<div className="absolute bottom-0 right-0 z-10 w-full rounded-t-2xl h-96 bg-laal" />
						<img
							src={img}
							alt=""
							className="relative z-20 object-cover w-auto h-[32rem] "
						/>
					</div>
				</div>
				{/* third column */}
				<div className="col-span-1">
					<p>Web specialist based Bangladesh</p>
				</div>
			</div>
		</div>
	);
};

export default App;
