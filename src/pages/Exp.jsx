import { useEffect, useRef, useState } from "react";
// import "../styles/tabs.css";

const Exp = () => {
	const tabsData = [
		{ label: "Tab 1", content: <p>Content for Tab 1</p> },
		{ label: "Tab 2", content: <p>Content for Tab 2</p> },
		{ label: "Tab 3", content: <p>Content for Tab 3</p> },
	];

	return (
		<div className="p-4">
			<AnimatedTabs tabs={tabsData} />
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
