import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Forward } from "lucide-react";
import { Fade, Slide } from "react-awesome-reveal";

const Contacts = () => {
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
		emailjs.send("service_at3kvap", "template_du1zsn7", form.current, "AWTDDzD1prNjlGP-F").then(
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
		<div>
			<Fade duration={2500}>
				<div className="mb-2 text-para dark:text-gray-400">
					<h2 className="font-mono text-3xl font-medium uppercase text-dhusor dark:text-gray-200">
						Send me a message
					</h2>
					<p>Got a question or proposal, or just want to say hello? Go ahead.</p>
				</div>
				<Slide direction="up">
					<form
						ref={form}
						onSubmit={sendEmail}
						className="flex flex-col justify-start gap-y-2 text-para dark:text-gray-400"
					>
						<div className="flex flex-col justify-start gap-y-1">
							<label>Name</label>
							<input
								type="text"
								name="from_name"
								className="rounded-sm shadow-md focus:outline-0 text-slate-300 bg-black/40"
							/>
						</div>
						<div className="flex flex-col justify-start gap-y-1">
							<label>Email</label>
							<input
								type="email"
								name="user_email"
								className="rounded-sm shadow-md focus:outline-0 bg-black/40 text-slate-300"
							/>
						</div>
						<div className="flex flex-col justify-start gap-y-1">
							<label>Subject</label>
							<input
								className="rounded-sm shadow-md focus:outline-0 text-slate-300 bg-black/40"
								type="text"
								name="user_subject"
							/>
						</div>
						<div className="flex flex-col justify-start gap-y-1">
							<label>Message</label>
							<textarea
								name="message"
								rows="8"
								className="text-sm rounded-sm shadow-md focus:outline-0 bg-black/40 text-slate-300"
							/>
						</div>
						<Slide direction="up">
							<div className="flex justify-end mt-3">
								{/* <input
							type="submit"
							value="Send"
							className="flex items-center justify-center px-6 py-2 font-sans text-lg font-medium text-white duration-300 border-t border-gray-900 rounded-sm shadow-md cursor-pointer hover:bg-red-600 dark:hover:bg-red-600 whitespace-nowrap gap-x-2 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950"
						/> */}
								<button
									type="submit"
									className="flex items-center justify-center px-6 py-2 font-sans text-lg font-medium text-white duration-300 border-t border-gray-900 rounded-sm shadow-md cursor-pointer hover:bg-red-600 dark:hover:bg-red-600 whitespace-nowrap gap-x-2 focus:outline-0 dark:border-white/20 bg-dhusor dark:bg-gray-950"
								>
									<Forward /> Send
								</button>
							</div>
						</Slide>
					</form>
				</Slide>
			</Fade>
		</div>
	);
};

export default Contacts;
