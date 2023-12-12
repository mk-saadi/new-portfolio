import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Toast from "../reUse/Toast";
import useToast from "../reUse/useToast";

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
		<div className="z-20 grid grid-cols-1 overflow-hidden md:grid-cols-3 rounded-sm mb-28 lg:min-w-[820px] shadow-md drop-shadow-sm">
			{toastType && (
				<Toast
					type={toastType}
					message={toastMessage}
					onHide={hideToast}
				/>
			)}
			<div className="bg-orange-400 lg:rounded-s-md ">
				<p className="flex justify-end px-6 pt-6 -mr-4 text-2xl font-bold text-slate-100">
					03. Let's Get
				</p>
				<div className="p-4 text-sm">
					<p className="text-sm lg:text-left text-slate-200">
						If you have a question, want to start a project, or
						simply want to connect, Feel free to send me a message
						in the contact form.
					</p>
					<p className="flex flex-col gap-1 mt-7 text-slate-200">
						<FaMapLocationDot className="text-2xl md:text-xl" />
						Gopalganj, Bangladesh
					</p>
					<p className="flex flex-col gap-1 my-3 text-slate-200">
						<MdEmail className="text-2xl md:text-xl" />
						mksaadi820@gmail.com
					</p>
					<p className="flex flex-col gap-1 my-3 text-slate-200">
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
				className="col-span-2 p-6 bg-white rounded-e-md"
			>
				<p className="-ml-4 text-2xl font-bold text-orange-400">
					In Touch
				</p>
				<div className="form-control">
					<label className="mb-2 font-semibold text-orange-400 label-text">
						Name
					</label>
					<input
						type="text"
						name="to_name"
						className="mb-3 text-white bg-gray-600 rounded-sm input"
					/>
				</div>

				<div className="form-control">
					<label className="mb-2 font-semibold text-orange-400 label-text">
						Email
					</label>
					<input
						type="email"
						name="from_email"
						className="mb-3 text-white bg-gray-600 rounded-sm input"
					/>
				</div>

				<div className="form-control">
					<label className="mb-2 font-semibold text-orange-400 label-text">
						Message
					</label>
					<textarea
						name="message"
						className="mb-3 text-sm text-white bg-gray-600 rounded-sm textarea textarea-lg h-[100px] focus:h-[150px] duration-75"
					/>
				</div>

				<div className="flex justify-end mt-3">
					<input
						type="submit"
						value="Send"
						className="mt-2 px-4 rounded-sm border-2 duration-200 border-orange-400 text-orange-400 hover:border-[#f2754c]  bg-transparent cursor-pointer hover:bg-orange-400 hover:text-white"
					/>
				</div>
			</form>
		</div>
	);
};

export default Contact;
