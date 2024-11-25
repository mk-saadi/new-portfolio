import Intro from "./components/Intro";
import img from "./assets/me.png";

const App = () => {
	return (
		<div className="flex flex-col items-center justify-between w-full h-full">
			<h1 className="flex items-center justify-center text-6xl font-bold text-dhursor">
				Muhiuddin <span>Khaled</span>
			</h1>
			<div className="flex justify-between h-full">
				<div>
					<p>info</p>
				</div>
				<div className="relative flex items-baseline justify-center h-full w-fit">
					<div className="">
						<div className="absolute bottom-0 right-0 z-10 w-full rounded-t-2xl h-96 bg-laal" />
						<img
							src={img}
							alt=""
							className="relative z-20 object-cover w-auto h-[32rem] "
						/>
					</div>
				</div>
				<div>
					<p>skills</p>
				</div>
			</div>
		</div>
	);
};

export default App;
