import { ChevronUpIcon } from "lucide-react";
import { useState, useEffect } from "react";

const UpScroll = () => {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	if (!isVisible) return null;

	return (
		<button
			onClick={scrollToTop}
			className="fixed p-3 duration-300 bg-white border rounded-full shadow-lg border-gray-900/30 bottom-4 right-4 dark:bg-black dark:border-white/30"
		>
			<ChevronUpIcon className="text-gray-900 dark:text-white" />
		</button>
	);
};

export default UpScroll;
