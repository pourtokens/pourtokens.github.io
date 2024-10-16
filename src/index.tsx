import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Toaster } from "./components/ui/sonner";

import App from "./App";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<div className="bg-gradient-to-b from-cyan-900 to-blue-900 text-white flex flex-col">
			<Header />
			<App />
			<Footer />
		</div>
		<Toaster />
	</React.StrictMode>
);
