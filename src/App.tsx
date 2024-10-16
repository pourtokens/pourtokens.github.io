import Bundles from "./components/about/Bundles";
import Offers from "./components/about/Offers";

const App = () => {
	return (
		<div className="container mx-auto px-4 py-6 flex-grow max-w-5xl">
			<Offers />
			<Bundles />

			<section className="mb-12">
				<h2 className="text-3xl font-bold mb-4">
					Say Goodbye to Faucet Frustration
				</h2>
				<p className="mb-4">
					We've all been there – clicking endlessly on faucet buttons,
					waiting for timers to run out, and still receiving barely
					enough tokens to do anything meaningful.
				</p>
				<p className="mb-4">
					Pour Tokens was built to change all of that. Whether you're
					a developer, airdrop hunter, or just exploring blockchain,
					we've made it fast and simple for you to get what you need.
				</p>
				<p className="text-xl font-semibold">
					Ready for your token pour? Let's go!
				</p>
			</section>
		</div>
	);
};

export default App;
