import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<main className="flex flex-col xl:overflow-hidden w-full xl:h-screen bg-[#e0e0e0] bg-wavy-light dark:bg-wavy-dark dark:bg-[#000000]">
			<div className="max-w-[1440px] mx-auto flex-grow flex flex-col">
				<Navbar />
				<section className="flex-grow mx-2 mt-2 mb-8 xl:mb-0 lg:mx-10">
					<Outlet />
				</section>
			</div>
		</main>
	);
};

export default Layout;
