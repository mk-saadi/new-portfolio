import Navbar from "./components/Navbar";
import UpScroll from "./components/UpScroll";

const App = () => {
	return (
		<div className="relative min-h-screen bg-white dark:bg-black">
			<Navbar />
			<div className="h-[200vh] mx-10 pt-48">
				<h1>man</h1>
				<UpScroll />
			</div>
		</div>
	);
};

export default App;
