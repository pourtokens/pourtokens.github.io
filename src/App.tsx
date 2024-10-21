import Header from "./components/header/Header";
import Bundles from "./components/home/Bundles";
import Offers from "./components/home/Offers";
import CTA from "./components/home/CTA";

const App = () => {
	return (
		<div className="flex-grow">
			<Header />
			<Offers />
			<Bundles />
			<CTA />
		</div>
	);
};

export default App;
