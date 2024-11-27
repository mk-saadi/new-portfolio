import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastProvider } from "react-toast-master";
import App from "./App";
import Featured from "./pages/Featured";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
			{
				path: "/featured",
				element: <Featured />,
			},
			{
				path: "/projects",
				element: <Projects />,
			},
			{
				path: "/contacts",
				element: <Contacts />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ToastProvider>
			<RouterProvider router={router} />
		</ToastProvider>
	</React.StrictMode>
);
