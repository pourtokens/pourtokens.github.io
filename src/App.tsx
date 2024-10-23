import { useRef } from "react";

import Header from "./components/header/Header";
import TokenOffers from "./components/home/TokenOffers";
import HowItWorks from "./components/home/HowItWorks";
import WhatWeOffer from "./components/home/WhatWeOffer";
import TokenCTA from "./components/home/TokenCTA";

const App = () => {
	const tokenRef = useRef<HTMLDivElement>(null);

	return (
		<div className="flex-grow">
			<Header tokenRef={tokenRef} />
			<WhatWeOffer />
			<TokenOffers ref={tokenRef} />
			<HowItWorks />
			<TokenCTA tokenRef={tokenRef} />
		</div>
	);
};

export default App;
