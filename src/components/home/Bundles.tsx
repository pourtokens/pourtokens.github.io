import { Check, HandCoins, Network, Package, Wallet } from "lucide-react";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

// import sendTransaction from "../../components/wallet/sendTransaction";
// import pricing from "../../pricing.json";

// type Token = {
// 	id: number;
// 	token: string;
// 	bundles: Bundle[];
// 	lowSupplyThreshold: number;
// };

// type Bundle = {
// 	amount: number;
// 	priceUSD: number;
// };

// const tokens: Token[] = pricing;

const Bundles = () => {
	return (
		<>
			{/* <WalletConnection /> */}
			<section className="text-white py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
						Our Bundles
					</h2>

					<p className="text-xl text-center mb-12 max-w-2xl mx-auto">
						Why wait around for tiny token drips when you can get a
						real pour? Check out our sweet bundles:
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{ tokens: 100, currency: "Lumia", price: 5 },
							{ tokens: 50, currency: "Lumia", price: 3 },
							{ tokens: 10, currency: "BERA", price: 5 },
							{ tokens: 5, currency: "BERA", price: 3 },
						].map((bundle, index) => (
							<Card
								key={index}
								className="bg-gradient-to-br from-cyan-800 to-blue-800 border-2 border-cyan-500 hover:border-cyan-400 text-zinc-900 transition-all duration-300 transform hover:scale-105"
							>
								<CardContent className="p-6 flex flex-col items-center">
									<HandCoins className="w-16 h-16 mb-4 text-cyan-400" />
									<h3 className="text-2xl font-bold mb-2">
										{bundle.tokens} {bundle.currency}
									</h3>

									<p className="text-lg mb-4">
										for the value of ${bundle.price} USD
									</p>

									<Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
										Get This Bundle
									</Button>
								</CardContent>
							</Card>
						))}
					</div>

					<p className="text-xl text-center mt-12">
						Pick the bundle that suits your needs, and you're good
						to go!
					</p>
				</div>
			</section>

			<section className="bg-gradient-to-b from-cyan-900 to-blue-900 text-white py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
						How It Works
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{ icon: Package, text: "Pick your bundle" },
							{
								icon: Wallet,
								text: "Enter your wallet address where you want your tokens",
							},
							{
								icon: Network,
								text: "Select your desired network and token",
							},
							{
								icon: Check,
								text: "Get a fresh pour of tokens",
							},
						].map((step, index) => (
							<div
								key={index}
								className="flex flex-col items-center text-center"
							>
								<div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
									<step.icon className="w-8 h-8 text-white" />
								</div>

								<p className="text-lg font-semibold">
									{index + 1}. {step.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Bundles;
