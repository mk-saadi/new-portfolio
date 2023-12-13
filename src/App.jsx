import { useRef } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import pdf from "./assets/resume.pdf";
import "./app.css";
import Projects from "./component/Projects";
import About from "./component/About";
import Intro from "./component/Intro";
import RightNav from "./component/RightNav";

function App() {
	const aboutRef = useRef(null);
	const projectsRef = useRef(null);
	const contactRef = useRef(null);

	const navigateToSection = (ref) => {
		ref.current.scrollIntoView({ behavior: "smooth" });
	};

	const scrollToFooter = () => {
		document.getElementById("foot").scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<div className="relative noise background max-w-[1920px] mx-auto">
			<Header
				navigateToSection={navigateToSection}
				aboutRef={aboutRef}
				projectsRef={projectsRef}
				contactRef={contactRef}
			/>

			<div className="fixed bottom-0 z-50 hidden md:right-3 lg:right-auto lg:left-3 md:block">
				<RightNav />
			</div>

			<div className="max-w-[820px] mx-auto relative z-30">
				<Intro
					scrollToFooter={scrollToFooter}
					pdf={pdf}
				/>

				<section
					ref={aboutRef}
					className="flex items-center justify-center min-h-[40vh] mb-[300px] pt-10"
				>
					<About />
				</section>

				<section
					ref={projectsRef}
					className="items-center justify-center min-h-[70vh] pt-20"
				>
					<div className="text-left mb-14">
						<p className="text-xl text-orange-700">
							02.{" "}
							<span className="text-white">
								Some of my projects
							</span>
						</p>
					</div>
					<div>
						<Projects />
					</div>
				</section>

				<footer
					ref={contactRef}
					id="foot"
					className="flex items-center justify-center mt-[300px] pt-20 mx-2 md:mx-4 lg:mx-0"
				>
					<Footer />
				</footer>
			</div>

			<div className="absolute bottom-0 right-0 z-10 w-screen text-center bg-slate-800">
				<p className="pt-32 pb-4 text-sm text-center text-white">
					<span>
						&copy;{new Date().getFullYear()} Muhiuddin Khaled
					</span>
				</p>
			</div>
		</div>
	);
}

export default App;
