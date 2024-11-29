import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Forward } from "lucide-react";
import { Fade, Slide } from "react-awesome-reveal";
import { useToast } from "react-toast-master";

const Contacts = () => {
	const form = useRef();
	const { toastMaster } = useToast();

	const sendEmail = (e) => {
		e.preventDefault();

		toastMaster({
			type: "loadingDark",
			message: "Sending email",
			footer: "Please wait, it might take a few seconds",
			bg: "white",
			position: "bottomLeft",
			transition: "top",
		});

		emailjs
			.send(
				import.meta.env.VITE_SERVICE,
				import.meta.env.VITE_TEMPLATE,
				form.current,
				import.meta.env.VITE_ID
			)
			.then(
				(result) => {
					e.target.reset();
					toastMaster({
						type: "successDark",
						message: "Email sent successfully",
						bg: "white",
						position: "bottomLeft",
						transition: "top",
					});
				},
				(error) => {
					toastMaster({
						type: "errorDark",
						message: "Error sending email",
						bg: "white",
						position: "bottomLeft",
						transition: "top",
					});
				}
			);
	};
	return (
		<div>
			<Fade
				duration={2500}
				triggerOnce
			>
				<div className="mb-2 text-para dark:text-gray-400">
					<h2 className="font-mono text-3xl font-medium uppercase text-dhusor dark:text-gray-200">
						Send me a message
					</h2>
					<p>Got a question or proposal, or just want to say hello? Go ahead.</p>
				</div>
				<Slide
					direction="up"
					triggerOnce
				>
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
								className="px-2 py-1 text-white rounded-sm shadow-md focus:outline-0 dark:text-gray-400 bg-black/40"
							/>
						</div>
						<div className="flex flex-col justify-start gap-y-1">
							<label>Email</label>
							<input
								type="email"
								name="user_email"
								className="px-2 py-1 text-white rounded-sm shadow-md focus:outline-0 bg-black/40 dark:text-gray-400"
							/>
						</div>
						<div className="flex flex-col justify-start gap-y-1">
							<label>Subject</label>
							<input
								className="px-2 py-1 text-white rounded-sm shadow-md focus:outline-0 dark:text-gray-400 bg-black/40"
								type="text"
								name="user_subject"
							/>
						</div>
						<div className="flex flex-col justify-start gap-y-1">
							<label>Message</label>
							<textarea
								name="message"
								rows="6"
								className="px-2 py-1 text-white rounded-sm shadow-md focus:outline-0 bg-black/40 dark:text-gray-400"
							/>
						</div>
						<Slide
							direction="up"
							triggerOnce
						>
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
