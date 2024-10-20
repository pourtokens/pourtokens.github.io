import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import { Toaster } from "./components/ui/sonner";
import GAnalytics from "./components/analytics/GAnalytics";
import NotFound from "./components/not-found/NotFound";
import App from "./App";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<div className="bg-gradient-to-b from-cyan-900 to-blue-900 text-white">
			<Router>
				<GAnalytics />
				<Routes>
					<Route path="/" element={<App />} />
					{/* <Route path="/:tokenName" element={<TokenPage />} />{" "}
					<Route path="/payment" element={<Payment />} />
					<Route path="/success" element={<Success />} /> */}
					<Route path="*" element={<NotFound />} />{" "}
				</Routes>
			</Router>
		</div>
		<Toaster />
	</React.StrictMode>
);
