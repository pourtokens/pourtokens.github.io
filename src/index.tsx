import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import { Toaster } from "./components/ui/sonner";

import GAnalytics from "./components/analytics/GAnalytics";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import App from "./App";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<div className="bg-gradient-to-b from-cyan-900 to-blue-900 text-white flex flex-col">
			<Header />
			<Router>
				<GAnalytics />
				<App />
			</Router>
			<Footer />
		</div>
		<Toaster />
	</React.StrictMode>
);
