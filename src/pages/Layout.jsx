import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<main className="w-full h-screen bg-[#e0e0e0] bg-wavy-light dark:bg-wavy-dark dark:bg-[#000000]">
			<div className="max-w-[1440px] mx-auto h-full">
				<Navbar />
				<section className="mx-10">
					<Outlet />
				</section>
			</div>
		</main>
	);
};

export default Layout;
