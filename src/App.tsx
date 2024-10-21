import Header from "./components/header/Header";
import Bundles from "./components/home/Bundles";
import Offers from "./components/home/Offers";
import CTA from "./components/home/CTA";
import { useRef } from "react";

const App = () => {
	const tokenRef = useRef<HTMLDivElement>(null);

	return (
		<div className="flex-grow">
			<Header tokenRef={tokenRef} />
			<Offers />
			<Bundles ref={tokenRef} />
			<CTA tokenRef={tokenRef} />
		</div>
	);
};

export default App;
