import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Exp from "./pages/Exp";
import { ToastProvider } from "../../../npm package/react-toast-master/src/ToastProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ToastProvider>
			<div className="flex flex-col min-h-screen">
				<Exp />
			</div>
		</ToastProvider>
	</React.StrictMode>
);
