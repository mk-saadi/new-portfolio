import { useRef } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import pdf from "./assets/resume.pdf";
import "./app.css";
import Projects from "./component/Projects";
import About from "./component/About";
import Intro from "./component/Intro";

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
		<div className="relative noise background">
			<Header
				navigateToSection={navigateToSection}
				aboutRef={aboutRef}
				projectsRef={projectsRef}
				contactRef={contactRef}
			/>
			<div className="max-w-[820px] mx-auto relative z-30">
				<Intro
					scrollToFooter={scrollToFooter}
					pdf={pdf}
				/>

				<section
					ref={aboutRef}
					className="flex items-center justify-center min-h-[70vh] mb-[300px] pt-10"
				>
					<About />
				</section>

				<section
					ref={projectsRef}
					className="items-center justify-center min-h-[70vh] pt-20"
				>
					<div className="text-left mb-14">
						<p className="text-[#579981] text-xl">
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
					className="flex items-center justify-center mt-[300px] pt-20"
				>
					<Footer />
				</footer>
			</div>

			<div className="absolute bottom-0 right-0 z-10 w-screen h-48 text-center bg-slate-800"></div>
		</div>
	);
}

export default App;
