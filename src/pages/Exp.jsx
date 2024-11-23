// /* eslint-disable react/prop-types */
// import { useEffect, useRef, useState } from "react";
// import "../styles/tabs.css";
// import Marquee from "react-fast-marquee";
// import { useToast } from "../../../../npm package/react-toast-master/src/ToastProvider";
// import sum from "../assets/summercamp-12.png";

// const Exp = () => {
// 	const tabsData = [
// 		{
// 			label: "Tab 1",
// 			content: <p>Content for Tab 1</p>,
// 			para: (
// 				<p>
// 					Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat deserunt corporis
// 					iste perferendis dolore cum rerum possimus natus iusto laborum, eaque minus, officiis at
// 					dolorem cumque exercitationem nisi? Pariatur illo aut, aperiam perferendis aliquid ut quos
// 					numquam earum quod labore at repudiandae tenetur deserunt modi eaque voluptatum. Eveniet
// 					consequatur cumque, doloremque alias in, est harum enim totam distinctio amet deserunt,
// 					voluptatum earum consectetur sapiente dolor saepe id? Incidunt similique quia sit sunt
// 					praesentium repellat ullam maiores reiciendis eligendi possimus doloremque quisquam
// 					tenetur, odit nostrum voluptatem ipsum facere magni debitis! Temporibus fuga, delectus qui
// 					minima ab ex eos, alias eius culpa nostrum asperiores aliquid praesentium? Iure
// 					consectetur asperiores repudiandae? Ipsum quasi iusto sunt itaque nisi saepe inventore
// 					maxime, minima provident porro. Voluptatum vitae, labore nihil unde molestiae quos.
// 					Numquam quae, illum nulla molestias blanditiis aspernatur dolorum obcaecati sed laudantium
// 					sequi ad expedita, et iusto minus quod fugiat totam odio dolorem, necessitatibus tempora.
// 					Quasi corporis adipisci quos culpa enim alias facilis temporibus quibusdam, rem similique
// 					ullam doloribus? Expedita unde maiores, tempora aperiam qui recusandae, ut vitae officia
// 					iure, rerum cum quas. Ducimus, explicabo. Quibusdam magnam ducimus quidem officiis iusto
// 					tempore, illum vel adipisci molestias minima debitis cupiditate, consectetur laboriosam
// 					repellat porro? Aperiam possimus dicta voluptates soluta veniam quidem officia sint vero
// 					reiciendis veritatis consectetur voluptatibus architecto esse molestias error, corporis
// 					distinctio nostrum amet, optio reprehenderit fuga velit. Eligendi distinctio corrupti
// 					nisi? Sunt, et similique. Molestias reiciendis perspiciatis assumenda vel expedita, sed
// 					minima repellat provident magnam dolor quasi possimus obcaecati optio illum?
// 				</p>
// 			),
// 		},
// 		{
// 			label: "Tab 2",
// 			content: <p>Content for Tab 2</p>,
// 			para: (
// 				<p>
// 					exercitationem nisi? Pariatur illo aut, aperiam perferendis aliquid ut quos numquam earum
// 					quod labore at repudiandae tenetur deserunt modi eaque voluptatum. Eveniet consequatur
// 					cumque, doloremque alias in, est harum enim totam distinctio amet deserunt, voluptatum
// 					earum consectetur sapiente dolor saepe id? Incidunt similique quia sit sunt praesentium
// 					repellat ullam maiores reiciendis eligendi possimus doloremque quisquam tenetur, odit
// 					nostrum voluptatem ipsum facere magni debitis! Temporibus fuga, delectus qui minima ab ex
// 					eos, alias eius culpa nostrum asperiores aliquid praesentium? Iure consectetur asperiores
// 					repudiandae? Ipsum quasi iusto sunt itaque nisi saepe inventore maxime, minima provident
// 					porro. Voluptatum vitae, labore nihil unde molestiae quos. Numquam quae, illum nulla
// 					molestias blanditiis aspernatur dolorum obcaecati sed laudantium sequi ad expedita, et
// 					iusto minus quod fugiat totam odio dolorem, necessitatibus tempora. Quasi corporis
// 					adipisci quos culpa enim alias facilis temporibus quibusdam, rem similique ullam
// 					doloribus? Expedita unde maiores, tempora aperiam qui recusandae, ut vitae officia iure,
// 					rerum cum quas. Ducimus, explicabo. Quibusdam magnam ducimus quidem officiis iusto
// 					tempore, illum vel adipisci molestias minima debitis cupiditate, consectetur laboriosam
// 					repellat porro? Aperiam possimus dicta voluptates soluta veniam quidem officia sint vero
// 					reiciendis veritatis consectetur voluptatibus architecto esse molestias error, corporis
// 					distinctio nostrum amet, optio reprehenderit fuga velit. Eligendi distinctio corrupti
// 					nisi? Sunt, et similique. Molestias reiciendis perspiciatis assumenda vel expedita, sed
// 					minima repellat provident magnam dolor quasi possimus obcaecati optio illum?
// 				</p>
// 			),
// 		},
// 		{
// 			label: "Tab 3",
// 			content: <p>Content for Tab 3</p>,
// 			para: (
// 				<p>
// 					nisi? Pariatur illo aut, aperiam perferendis aliquid ut quos numquam earum quod labore at
// 					repudiandae tenetur deserunt modi eaque voluptatum. Eveniet consequatur cumque, doloremque
// 					alias in, est harum enim totam distinctio amet deserunt, voluptatum earum consectetur
// 					sapiente dolor saepe id? Incidunt similique quia sit sunt praesentium repellat ullam
// 					maiores reiciendis eligendi possimus doloremque quisquam tenetur, odit nostrum voluptatem
// 					ipsum facere magni debitis! Temporibus fuga, delectus qui minima ab ex eos, alias eius
// 					culpa nostrum asperiores aliquid praesentium? Iure consectetur asperiores repudiandae?
// 					Ipsum quasi iusto sunt itaque nisi saepe inventore maxime, minima provident porro.
// 					Voluptatum vitae, labore nihil unde molestiae quos. Numquam quae, illum nulla molestias
// 					blanditiis aspernatur dolorum obcaecati sed laudantium sequi ad expedita, et iusto minus
// 					quod fugiat totam odio dolorem, necessitatibus tempora. Quasi corporis adipisci quos culpa
// 					enim alias facilis temporibus quibusdam, rem similique ullam doloribus? Expedita unde
// 					maiores, tempora aperiam qui recusandae, ut vitae officia iure, rerum cum quas. Ducimus,
// 					explicabo. Quibusdam magnam ducimus quidem officiis iusto tempore, illum vel adipisci
// 					molestias minima debitis cupiditate, consectetur laboriosam repellat porro? Aperiam
// 					possimus dicta voluptates soluta veniam quidem officia sint vero reiciendis veritatis
// 					consectetur voluptatibus architecto esse molestias error, corporis distinctio nostrum
// 					amet, optio reprehenderit fuga velit. Eligendi distinctio corrupti nisi? Sunt, et
// 					similique. Molestias reiciendis perspiciatis assumenda vel expedita, sed minima repellat
// 					provident magnam dolor quasi possimus obcaecati optio illum?
// 				</p>
// 			),
// 		},
// 	];

// 	return (
// 		<div
// 			className="relative min-h-screen overflow-hidden bg-cg bg-slate-700"
// 			// style={{
// 			// 	backgroundImage: sum,
// 			// }}
// 		>
// 			{/* <div className="relative min-h-screen overflow-hidden bg-[#fef6f1]"> */}
// 			{/* <div className="flex items-start justify-center max-h-screen overflow-hidden">
// 				<div className="opacity-80 select-none pointer-events-none absolute w-[200vw] h-[200vh] transform -rotate-45 -top-64 -translate-x-1/2 left-1/2">
// 					<div className="z-0 flex flex-col items-center justify-center w-full text-[#413831]">
// 						<Marquee
// 							speed={15}
// 							autoFill
// 							className="font-mono text-[10rem]"
// 						>
// 							Muhiuddin Khaled
// 						</Marquee>
// 						<Marquee
// 							speed={15}
// 							direction="right"
// 							autoFill
// 							className="text-[10rem] outlined"
// 						>
// 							Muhiuddin Khaled
// 						</Marquee>
// 						<Marquee
// 							speed={15}
// 							autoFill
// 							className="font-mono text-[10rem]"
// 						>
// 							Muhiuddin Khaled
// 						</Marquee>
// 						<Marquee
// 							speed={15}
// 							direction="right"
// 							autoFill
// 							className="text-[10rem] outlined"
// 						>
// 							Muhiuddin Khaled
// 						</Marquee>
// 						<Marquee
// 							speed={15}
// 							autoFill
// 							className="font-mono text-[10rem]"
// 						>
// 							Muhiuddin Khaled
// 						</Marquee>
// 					</div>
// 				</div>
// 			</div>
// 			<div className="relative z-10 flex items-center justify-center w-full h-screen">
// 				<h1 className="uppercase text-8xl font-[900] text-black font-playfair">
// 					Transform the world
// 				</h1>
// 			</div> */}
// 			<AnimatedTabs tabs={tabsData} />
// 		</div>
// 		// <div className="flex items-center justify-center h-screen">
// 		// 	<h1 className="uppercase text-8xl font-[900] text-black font-playfair">
// 		// 		Website Under Construction...
// 		// 	</h1>
// 		// </div>
// 	);
// };

// const AnimatedTabs = ({ tabs }) => {
// 	const [activeTab, setActiveTab] = useState(0);
// 	const [sliderStyle, setSliderStyle] = useState({});
// 	const tabRefs = useRef([]);
// 	const { toastMaster } = useToast();

// 	const pop = async () => {
// 		// const con = await toastMaster({
// 		// 	type: "confirmDark",
// 		// 	message: "heelo",
// 		// 	footer: "Couldn't purchase item due to bad internet connection.",
// 		// 	align: "left",
// 		// 	position: "center",
// 		// });

// 		// if (con) {
// 		// 	toastMaster({
// 		// 		type: "success",
// 		// 		message: "suc",
// 		// 	});
// 		// }
// 		toastMaster({
// 			type: "info",
// 			message: "Message from the_drunk_head",
// 			footer: (
// 				<p className="">
// 					Hey check out these two animes{" "}
// 					<span className="font-semibold text-blue-500 underline cursor-pointer">
// 						Mushoku Tensei: Jobless Reincarnation
// 					</span>{" "}
// 					and{" "}
// 					<span className="font-semibold text-blue-500 underline cursor-pointer">
// 						The Apothecary Diary
// 					</span>
// 					.
// 				</p>
// 			),
// 			radius: "md",
// 			position: "bottomRight",
// 			transition: "top",
// 			align: "left",
// 			shadow: "block",
// 		});
// 	};

// 	useEffect(() => {
// 		// Set initial slider position
// 		if (tabRefs.current[activeTab]) {
// 			const tabElement = tabRefs.current[activeTab];
// 			setSliderStyle({
// 				width: `${tabElement.offsetWidth}px`,
// 				left: `${tabElement.offsetLeft}px`,
// 			});
// 		}
// 	}, []);

// 	const handleTabClick = (index) => {
// 		if (index !== activeTab) {
// 			const tabElement = tabRefs.current[index];
// 			setSliderStyle({
// 				width: `${tabElement.offsetWidth}px`,
// 				left: `${tabElement.offsetLeft}px`,
// 			});
// 			setActiveTab(index);
// 		}
// 	};

// 	return (
// 		<div className="w-full max-w-2xl mx-auto antialiased">
// 			<div className="relative mb-4">
// 				<div className="grid grid-cols-3 border-b-[2px] border-black">
// 					{tabs.map((tab, index) => (
// 						<button
// 							key={index}
// 							ref={(el) => (tabRefs.current[index] = el)}
// 							className={`px-4 focus:outline-0 py-2 text-sm font-medium ${
// 								activeTab === index ? "text-white" : "text-black "
// 							}`}
// 							onClick={() => handleTabClick(index)}
// 						>
// 							{tab.label}
// 						</button>
// 					))}
// 				</div>
// 				<div
// 					className="absolute bottom-0 h-0.5 bg-white transition-all duration-300"
// 					style={sliderStyle}
// 				/>
// 			</div>
// 			<div className="mt-4">
// 				{tabs.map((tab, index) => (
// 					<div
// 						key={index}
// 						className={`transition-opacity duration-300 ${
// 							activeTab === index ? "opacity-100 text-black" : "opacity-0 hidden"
// 						}`}
// 					>
// 						<p className="text-3xl osake">{tab.content}</p>
// 						<button
// 							onClick={pop}
// 							className="px-1 text-red-500 bg-white rounded-sm shadow-md osake"
// 						>
// 							pop
// 						</button>
// 						<p className="text-gray-900">{tab.para}</p>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// };

// export default Exp;
import React, { useState, useEffect, useRef } from "react";

const TerminalPortfolio = () => {
	const [input, setInput] = useState("");
	const [output, setOutput] = useState([
		{
			type: "info",
			text: "Welcome to Portfolio Terminal v1.0.0",
		},
		{
			type: "info",
			text: 'Type "help" to see available commands.',
		},
	]);
	const bottomRef = useRef(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [output]);

	const commands = {
		help: () => ({
			type: "info",
			text: `Available commands:
\n• about - Learn about me
\n• skills - View my technical skills
\n• projects - See my projects
\n• contact - Get my contact information
\n• clear - Clear the terminal
\n• help - Show this help message`,
		}),
		about: () => ({
			type: "info",
			text: "Hi! I'm [Your Name], a software developer passionate about creating elegant solutions to complex problems.",
		}),
		skills: () => ({
			type: "info",
			text: `Technical Skills:
\n• Frontend: React, Vue.js, TypeScript
\n• Backend: Node.js, Python, SQL
\n• Tools: Git, Docker, AWS`,
		}),
		projects: () => ({
			type: "info",
			text: `Recent Projects:
\n1. Project Alpha - A React-based dashboard
\n2. Project Beta - An e-commerce platform
\n3. Project Gamma - Mobile app in React Native`,
		}),
		contact: () => ({
			type: "info",
			text: `Get in touch:
\n• Email: your.email@example.com
\n• GitHub: github.com/yourusername
\n• LinkedIn: linkedin.com/in/yourusername`,
		}),
		clear: () => {
			setOutput([]);
			return null;
		},
	};

	const handleCommand = (cmd) => {
		const trimmedCmd = cmd.trim().toLowerCase();

		if (trimmedCmd === "") return;

		setOutput((prev) => [...prev, { type: "command", text: `> ${cmd}` }]);

		const command = commands[trimmedCmd];

		if (command) {
			const result = command();
			if (result) {
				setOutput((prev) => [...prev, result]);
			}
		} else {
			setOutput((prev) => [
				...prev,
				{
					type: "error",
					text: `Command not found: ${cmd}. Type "help" for available commands.`,
				},
			]);
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === "Enter") {
			handleCommand(input);
			setInput("");
		}
	};

	return (
		<div className="min-h-screen p-4 bg-opacity-10">
			<div className="flex flex-col ">
				{output.map((line, index) => (
					<div
						key={index}
						className={`mb-1 whitespace-pre ${
							line.type === "error"
								? "text-red-500 "
								: line.type === "command"
								? "text-white "
								: "text-green-500 ml-4 "
						}`}
						style={{}}
					>
						{line.text}
					</div>
				))}
			</div>
			<div className="flex items-center">
				<span className="mr-2 text-white">{">"}</span>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyPress={handleKeyPress}
					className="flex-1 text-white bg-transparent border-none outline-none"
					autoFocus
				/>
			</div>
			<div ref={bottomRef} />
		</div>
	);
};

export default TerminalPortfolio;
