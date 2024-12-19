import { Forward } from "lucide-react";
import { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { useToast } from "react-toast-master";

const Contacts = () => {
	const { toastMaster } = useToast();
	const [isSending, setIsSending] = useState(false);

	const sendEmail = async (e) => {
		e.preventDefault();

		toastMaster({
			type: "loadingDark",
			message: "Sending email...",
			bg: "white",
			position: "bottomLeft",
			transition: "top",
		});
		setIsSending(true);

		const form = e.target;
		const name = form.to_name.value;
		const email = form.from_email.value;
		const message = form.user_subject.value;
		const subject = form.message.value;

		const templateParams = {
			to_name: name,
			from_email: email,
			user_subject: message,
			message: subject,
			createdAt: new Date().toLocaleString("en-US", {
				timeZone: "Asia/Dhaka",
				hour12: false,
			}),
		};

		try {
			const response = await fetch(`${import.meta.env.VITE_URL}/all_mails`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(templateParams),
			});

			const data = await response.json();

			if (data.acknowledged) {
				toastMaster({
					type: "successDark",
					message: "Email sent successfully",
					bg: "white",
					position: "bottomLeft",
					transition: "top",
				});
			} else {
				throw new Error("Email not acknowledged");
			}
		} catch (error) {
			toastMaster({
				type: "errorDark",
				message: "Error sending email",
				footer: "Couldn't send email, please try again.",
				bg: "white",
				position: "bottomLeft",
				transition: "top",
			});
		} finally {
			setIsSending(false);
		}
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
						onSubmit={sendEmail}
						className="flex flex-col justify-start gap-y-2 text-para dark:text-gray-400"
					>
						<div className="flex flex-col justify-start gap-y-1">
							<label>Name</label>
							<input
								type="text"
								name="to_name"
								className="px-2 py-1 text-white rounded-sm shadow-md focus:outline-0 dark:text-gray-400 bg-black/40"
							/>
						</div>
						<div className="flex flex-col justify-start gap-y-1">
							<label>Email</label>
							<input
								type="email"
								name="from_email"
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
								<button
									type="submit"
									className={`flex items-center justify-center px-6 dark:border-white/20 py-2 font-sans text-lg font-medium text-white duration-300 border-t border-gray-900 rounded-sm shadow-md cursor-pointer whitespace-nowrap gap-x-2 focus:outline-0 
									${
										isSending
											? "bg-dhusor dark:bg-gray-600 cursor-not-allowed"
											: "bg-dhusor dark:bg-gray-950 hover:bg-red-600 dark:hover:bg-red-600"
									}
										`}
									disabled={isSending}
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
