import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

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
			<div>
				<form
					ref={form}
					onSubmit={sendEmail}
					className="col-span-2 bg-[#1e2021] rounded-e-md p-6"
				>
					<p className="text-2xl text-[#579981] font-bold -ml-4">In Touch</p>
					<div className="form-control">
						<label className="text-[#579981] label-text font-semibold mb-2">Name</label>
						<input
							type="text"
							name="from_name"
							className="text-slate-300 input rounded-sm bg-[#4b5154] mb-3"
						/>
					</div>

					<div className="form-control">
						<label className="text-[#579981] label-text font-semibold mb-2">Email</label>
						<input
							type="email"
							name="user_email"
							className="input rounded-sm bg-[#4b5154] mb-3 text-slate-300"
						/>
					</div>

					<div className="form-control">
						<label className="text-[#579981] label-text font-semibold mb-2">Subject</label>
						<input
							className="text-slate-300 input rounded-sm bg-[#4b5154] mb-3"
							type="text"
							name="user_subject"
						/>
					</div>

					<div className="form-control">
						<label className="text-[#579981] label-text font-semibold mb-2">Message</label>
						<textarea
							name="message"
							className="textarea textarea-lg rounded-sm bg-[#4b5154] mb-3 text-sm text-slate-300"
						/>
					</div>

					<div className="flex justify-end mt-3">
						<input
							type="submit"
							value="Send"
							className="mt-2 px-4 rounded-sm border-2 duration-200 border-[#579981] hover:border-[#f2754c] text-white bg-transparent cursor-pointer"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contacts;
