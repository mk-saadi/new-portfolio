import pro from "../../src/assets/IMG_20221227_203719 j(2).jpg";
import { BiSolidRightArrow } from "react-icons/bi";
import Reveal from "react-awesome-reveal";

const About = () => {
	return (
		<div className="grid grid-cols-1 text-left lg:grid-cols-3">
			<div className="order-2 col-span-2 lg:order-1">
				<p className="text-[#579981] font-sans text-xl text-left">
					01. <span className="text-white">About Me</span>
				</p>
				<div className="text-gray-300 lg:mr-8 mt-14">
					Hi, My name is Muhiuddin Khaled and I enjoy creating things
					that I like. <br /> I started learning web development in
					January 2023 and after learning for more than 6 months I am
					ready to start working in the real world.
				</div>
				<p className="mt-5 mr-10 text-slate-400">
					Some of the web technology that I'm familiar with are:
				</p>
				<div className="grid grid-cols-2 mx-8 mt-2 text-left text-slate-400">
					<div>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-[#579981] text-xs" />{" "}
							JavaScript (ES6+)
						</p>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-[#579981] text-xs" />{" "}
							React
						</p>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-[#579981] text-xs" />{" "}
							Firebase
						</p>
					</div>
					<div>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-[#579981] text-xs" />{" "}
							Node.js
						</p>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-[#579981] text-xs" />{" "}
							MongoDB
						</p>
						<p className="flex items-center gap-2 text-left">
							<BiSolidRightArrow className="text-[#579981] text-xs" />{" "}
							Express
						</p>
					</div>
				</div>
			</div>
			<Reveal
				triggerOnce
				className="relative order-1 mt-16 lg:order-2 noise"
			>
				<img
					src={pro}
					alt=""
					className="rounded-md shadow-md grayscale"
				/>
				<div
					className="shadow-md drop-shadow-md"
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						backgroundColor: "#f2754c",
						mixBlendMode: "multiply",
						borderRadius: "4px",
					}}
				></div>
			</Reveal>
		</div>
	);
};

export default About;
