import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import { Toaster } from "./components/ui/sonner";
import GAnalytics from "./components/analytics/GAnalytics";

import App from "./App";
import TokenPage from "./components/token/TokenPage";
import Footer from "./components/footer/Footer";
import NotFoundPage from "./components/not-found/NotFoundPage";
import { ScrollToTop } from "./lib/utils";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<div className="min-h-dvh flex flex-col justify-between bg-gradient-to-b from-cyan-900 to-blue-900 text-white">
			<Router>
				<ScrollToTop />
				<GAnalytics />
				<Routes>
					<Route path="/" element={<App />} />
					{/* <Route path="/tokens" element={<TokensPage />} />*/}
					<Route path="/token/:tokenName" element={<TokenPage />} />
					<Route path="*" element={<NotFoundPage />} />{" "}
				</Routes>
				<Footer />
			</Router>
		</div>
		<Toaster />
	</React.StrictMode>
);
