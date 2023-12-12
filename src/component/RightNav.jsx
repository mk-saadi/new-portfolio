import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const RightNav = () => {
	return (
		<div className="flex flex-col items-center justify-end h-screen mb-28">
			<div className="flex flex-col gap-6 px-1 py-6 text-2xl text-orange-400 bg-white rounded-md shadow-md drop-shadow-md lg:text-3xl ">
				<div className="icon-box">
					<div className="icon icon__cow">
						<div className="tooltip tooltip__cow">
							Go to my LinkedIn profile
						</div>
						<a
							href="https://www.linkedin.com/in/mk-saadi-46a0aa242/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin />
						</a>
					</div>
				</div>
				<div className="icon-box">
					<div className="icon icon__cow">
						<div className="tooltip tooltip__cow">
							Go to my Github profile
						</div>
						<a
							href="https://github.com/mk-saadi"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
					</div>
				</div>
				<div className="icon-box">
					<div className="icon icon__cow">
						<div className="tooltip tooltip__cow">
							Go to my Facebook profile
						</div>
						<a
							href="https://www.facebook.com/mk.saadi.7/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebook />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightNav;
