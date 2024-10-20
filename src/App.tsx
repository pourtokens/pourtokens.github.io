import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
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
			<Footer />
		</div>
	);
};

export default App;
