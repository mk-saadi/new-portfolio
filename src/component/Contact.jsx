import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaGithub, FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaPhone, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		// emailjs
		// .sendForm(
		// 	"service_at3kvap",
		// 	// "template_rrsov4c",
		// 	"template_du1zsn7",
		// 	form.current,
		// 	"AWTDDzD1prNjlGP-F"
		// )
		emailjs
			.send(
				"service_at3kvap",
				"template_du1zsn7",
				form.current,
				"AWTDDzD1prNjlGP-F"
			)
			.then(
				(result) => {
					console.log(result.text);
					alert("email sent successfully");
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
					alert("please try again");
				}
			);
	};

	return (
		<div className="z-20 grid grid-cols-1 overflow-hidden md:grid-cols-3 rounded-sm mb-28 lg:min-w-[820px] shadow-md drop-shadow-sm">
			<div className="bg-[#f2754c] lg:rounded-s-md ">
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
					<div className="flex items-center justify-center gap-4 mt-6 text-2xl text-white lg:text-3xl">
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
					</div>
				</div>
			</div>

			<form
				ref={form}
				onSubmit={sendEmail}
				className="col-span-2 p-6 bg-white rounded-e-md"
			>
				<p className="text-2xl text-[#579981] font-bold -ml-4">
					In Touch
				</p>
				<div
					className="form-control"
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-duration="500"
				>
					<label className="text-[#579981] label-text font-semibold mb-2">
						Name
					</label>
					<input
						type="text"
						name="from_name"
						className="text-slate-300 input rounded-sm bg-[#4b5154] mb-3"
					/>
				</div>

				<div
					className="form-control"
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-duration="500"
				>
					<label className="text-[#579981] label-text font-semibold mb-2">
						Email
					</label>
					<input
						type="email"
						name="user_email"
						className="input rounded-sm bg-[#4b5154] mb-3 text-slate-300"
					/>
				</div>

				<div
					className="form-control"
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-duration="500"
				>
					<label className="text-[#579981] label-text font-semibold mb-2">
						Subject
					</label>
					<input
						className="text-slate-300 input rounded-sm bg-[#4b5154] mb-3"
						type="text"
						name="user_subject"
					/>
				</div>

				<div
					className="form-control"
					data-aos="fade-up"
					data-aos-offset="200"
					data-aos-duration="500"
				>
					<label className="text-[#579981] label-text font-semibold mb-2">
						Message
					</label>
					<textarea
						name="message"
						className="textarea textarea-lg rounded-sm bg-[#4b5154] mb-3 text-sm text-slate-300"
					/>
				</div>

				<div className="flex justify-end mt-3">
					<input
						type="submit"
						value="Send"
						className="mt-2 px-4 rounded-sm border-2 duration-200 border-[#579981] hover:border-[#f2754c] text-[#f2754c] bg-transparent cursor-pointer"
					/>
				</div>
			</form>
		</div>
	);
};

export default Contact;
