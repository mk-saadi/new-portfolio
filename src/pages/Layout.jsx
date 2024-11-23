import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<main className="h-screen bg-[#e0e0e0] bg-wavy-light dark:bg-wavy-dark dark:bg-[#000000]">
			<Navbar />
			<section className="mx-10">
				<Outlet />
			</section>
		</main>
	);
};

export default Layout;
