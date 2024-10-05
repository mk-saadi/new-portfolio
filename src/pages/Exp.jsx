import { useEffect, useRef, useState } from "react";
import "../styles/tabs.css";
import Marquee from "react-fast-marquee";

const Exp = () => {
	const tabsData = [
		{ label: "Tab 1", content: <p>Content for Tab 1</p> },
		{ label: "Tab 2", content: <p>Content for Tab 2</p> },
		{ label: "Tab 3", content: <p>Content for Tab 3</p> },
	];

	return (
		// <div className="relative min-h-screen overflow-hidden bg-[#fef6f1]">
		// 	<div className="flex items-start justify-center max-h-screen overflow-hidden">
		// 		<div className="opacity-80 select-none pointer-events-none absolute w-[200vw] h-[200vh] transform -rotate-45 -top-64 -translate-x-1/2 left-1/2">
		// 			<div className="z-0 flex flex-col items-center justify-center w-full text-[#413831]">
		// 				<Marquee
		// 					speed={15}
		// 					autoFill
		// 					className="font-mono text-[10rem]"
		// 				>
		// 					Muhiuddin Khaled
		// 				</Marquee>
		// 				<Marquee
		// 					speed={15}
		// 					direction="right"
		// 					autoFill
		// 					className="text-[10rem] outlined"
		// 				>
		// 					Muhiuddin Khaled
		// 				</Marquee>
		// 				<Marquee
		// 					speed={15}
		// 					autoFill
		// 					className="font-mono text-[10rem]"
		// 				>
		// 					Muhiuddin Khaled
		// 				</Marquee>
		// 				<Marquee
		// 					speed={15}
		// 					direction="right"
		// 					autoFill
		// 					className="text-[10rem] outlined"
		// 				>
		// 					Muhiuddin Khaled
		// 				</Marquee>
		// 				<Marquee
		// 					speed={15}
		// 					autoFill
		// 					className="font-mono text-[10rem]"
		// 				>
		// 					Muhiuddin Khaled
		// 				</Marquee>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	{/* <AnimatedTabs tabs={tabsData} /> */}
		// 	<div className="relative z-10 flex items-center justify-center w-full h-screen">
		// 		<h1 className="uppercase text-8xl font-[900] text-black font-playfair">
		// 			Transform the world
		// 		</h1>
		// 	</div>
		// </div>
		<div className="flex items-center justify-center h-screen">
			<h1 className="uppercase text-8xl font-[900] text-black font-playfair">
				Website Under Construction...
			</h1>
		</div>
	);
};

const AnimatedTabs = ({ tabs }) => {
	const [activeTab, setActiveTab] = useState(0);
	const [sliderStyle, setSliderStyle] = useState({});
	const tabRefs = useRef([]);

	useEffect(() => {
		// Set initial slider position
		if (tabRefs.current[activeTab]) {
			const tabElement = tabRefs.current[activeTab];
			setSliderStyle({
				width: `${tabElement.offsetWidth}px`,
				left: `${tabElement.offsetLeft}px`,
			});
		}
	}, []);

	const handleTabClick = (index) => {
		if (index !== activeTab) {
			const tabElement = tabRefs.current[index];
			setSliderStyle({
				width: `${tabElement.offsetWidth}px`,
				left: `${tabElement.offsetLeft}px`,
			});
			setActiveTab(index);
		}
	};

	return (
		<div className="w-full max-w-2xl mx-auto">
			<div className="relative mb-4">
				<div className="flex border-b border-gray-200">
					{tabs.map((tab, index) => (
						<button
							key={index}
							ref={(el) => (tabRefs.current[index] = el)}
							className={`px-4 py-2 text-sm font-medium ${
								activeTab === index ? "text-blue-600" : "text-gray-500 hover:text-gray-700"
							}`}
							onClick={() => handleTabClick(index)}
						>
							{tab.label}
						</button>
					))}
				</div>
				<div
					className="absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out"
					style={sliderStyle}
				/>
			</div>
			<div className="mt-4">
				{tabs.map((tab, index) => (
					<div
						key={index}
						className={`transition-opacity duration-300 ${
							activeTab === index ? "opacity-100" : "opacity-0 hidden"
						}`}
					>
						{tab.content}
					</div>
				))}
			</div>
		</div>
	);
};

export default Exp;
