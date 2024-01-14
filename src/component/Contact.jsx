import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Toast from "../reUse/Toast";
import useToast from "../reUse/useToast";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
	const form = useRef();
	const { toastType, toastMessage, showToast, hideToast } = useToast();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_at3kvap",
				"template_cmkfl3h",
				form.current,
				"AWTDDzD1prNjlGP-F"
			)
			.then(
				(result) => {
					if (result.status === 200) {
						showToast("success", "Email sent successfully");
						e.target.reset();
					}
				},
				(err) => {
					showToast(
						"success",
						"Couldn't send email. Please try again"
					);
				}
			);
	};

	return (
		<Fade
			triggerOnce
			damping={0.1}
		>
			<div className="z-20 grid grid-cols-1 overflow-hidden md:grid-cols-3 rounded-sm mb-28 lg:min-w-[820px] shadow-md drop-shadow-sm">
				{toastType && (
					<Toast
						type={toastType}
						message={toastMessage}
						onHide={hideToast}
					/>
				)}
				<div className="bg-orange-400 rounded-t-md md:rounded-s-md md:rounded-r-none">
					<p className="flex justify-start px-6 pt-6 text-2xl font-bold md:justify-end md:-mr-4 text-slate-100">
						03. Let's Get
					</p>
					<div className="p-4 text-sm">
						<p className="text-sm lg:text-left text-slate-200">
							If you have a question, want to start a project, or
							simply want to connect, Feel free to send me a
							message in the contact form.
						</p>
						<p className="flex flex-row gap-3 md:flex-col md:gap-1 mt-7 text-slate-200">
							<FaMapLocationDot className="text-2xl md:text-xl" />
							Gopalganj, Bangladesh
						</p>
						<p className="flex flex-row gap-3 my-3 md:flex-col md:gap-1 text-slate-200">
							<MdEmail className="text-2xl md:text-xl" />
							mksaadi820@gmail.com
						</p>
						<p className="flex flex-row gap-3 my-3 md:flex-col md:gap-1 text-slate-200">
							<FaPhoneAlt className="text-2xl md:text-xl" />
							+8801835368886
						</p>
						<hr />
						{/* <div className="flex items-center justify-center gap-4 mt-6 text-2xl text-white lg:text-3xl">
						<a
							href="https://www.linkedin.com/in/mk-saadi-46a0aa242/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://github.com/mk-saadi"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
						<a
							href="https://www.facebook.com/mk.saadi.7/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaFacebook />
						</a>
					</div> */}
					</div>
				</div>

				<form
					ref={form}
					onSubmit={sendEmail}
					className="col-span-2 p-2 bg-white md:p-6 rounded-b-md md:rounded-e-md md:rounded-b-none md:rounded-br-md"
				>
					<p className="text-2xl font-bold text-orange-400 md:-ml-4">
						In Touch
					</p>
					<Fade
						cascade
						damping={0.3}
						triggerOnce
					>
						<div className="form-control">
							<label className="mb-2 font-semibold text-orange-400 label-text">
								Name
							</label>
							<input
								type="text"
								name="to_name"
								required
								className="p-1 mb-3 text-sm text-white bg-gray-600 rounded-sm input md:p-4"
							/>
						</div>

						<div className="form-control">
							<label className="mb-2 font-semibold text-orange-400 label-text">
								Email
							</label>
							<input
								type="email"
								name="from_email"
								required
								className="p-1 mb-3 text-sm text-white bg-gray-600 rounded-sm input md:p-4"
							/>
						</div>

						<div className="form-control">
							<label className="mb-2 font-semibold text-orange-400 label-text">
								Message
							</label>
							<textarea
								name="message"
								required
								className="mb-3 text-sm text-white bg-gray-600 rounded-sm textarea textarea-lg p-1 md:p-4 h-[120px]"
							/>
						</div>
					</Fade>

					<div className="flex justify-end mt-3">
						<input
							type="submit"
							value="Send"
							className="mt-2 px-4 rounded-sm border-2 duration-200 border-orange-400 text-orange-400 hover:border-[#f2754c]  bg-transparent cursor-pointer hover:bg-orange-400 hover:text-white"
						/>
					</div>
				</form>
			</div>
		</Fade>
	);
};

export default Contact;
