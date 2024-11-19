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

	// Check scroll position and toggle button visibility
	useEffect(() => {
		const toggleVisibility = () => {
			// Show button when user has scrolled down 300 pixels
			if (window.scrollY > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		// Add scroll event listener
		window.addEventListener("scroll", toggleVisibility);

		// Clean up the event listener
		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	// Only render if isVisible is true
	if (!isVisible) return null;

	return (
		<button
			onClick={scrollToTop}
			className="fixed p-3 transition-colors bg-white border rounded-full shadow-lg border-gray-900/30 bottom-4 right-4 dark:bg-black dark:border-white/30"
		>
			<ChevronUpIcon className="text-gray-900 dark:text-white" />
		</button>
	);
};

export default UpScroll;
