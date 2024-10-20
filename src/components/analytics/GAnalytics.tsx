import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

if (process.env.NODE_ENV === "production") {
	ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID as string);
}

const Analytics = () => {
	const location = useLocation();

	useEffect(() => {
		ReactGA.send({ hitType: "pageview", page: location.pathname });
	}, [location]);

	return null;
};

export default Analytics;
