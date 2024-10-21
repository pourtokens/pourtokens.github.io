import { Link } from "react-router-dom";
import { Check, HandCoins, Network, Package, Wallet } from "lucide-react";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const Bundles = () => {
	return (
		<>
			{/* <WalletConnection /> */}
			<section className="text-white py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
						Available Tokens
					</h2>

					<p className="text-xl text-center mb-12 max-w-2xl mx-auto">
						Why wait around for tiny token drips when you can get a
						real pour?
					</p>

					<p className="text-xl text-center mb-12 max-w-2xl mx-auto">
						Check out the tokens in store:
					</p>

					<div className="flex flex-col flex-wrap sm:flex-row gap-8 justify-center">
						{[
							{ name: "LUMIA", price: 0 },
							{ name: "BERA", price: 0 },
						].map((token, index) => (
							<Card
								key={index}
								className="w-full sm:w-[230px] bg-gradient-to-br from-cyan-800 to-blue-800 border-2 border-cyan-500 hover:border-cyan-400 text-zinc-900 transition-all duration-300 transform hover:scale-105"
							>
								<CardContent className="p-6 flex flex-col items-center">
									<HandCoins className="w-16 h-16 mb-4 text-cyan-400" />
									<h3 className="text-2xl font-bold mb-2">
										{token.name}
									</h3>

									<p className="text-lg mb-4">
										For{" "}
										{token.price === 0
											? "Free"
											: token.price}
									</p>

									<Link
										to={`/token/${token.name.toLowerCase()}`}
									>
										<Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
											Get ${token.name}
										</Button>
									</Link>
								</CardContent>
							</Card>
						))}
					</div>

					<p className="text-xl text-center mt-12">
						Pick the tokens you need, and you're good to go!
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
							{
								icon: Package,
								text: "Pick your token and amount",
							},
							{
								icon: Wallet,
								text: "Enter a wallet address where you want your tokens",
							},
							{
								icon: Network,
								text: "Select your desired network and payment option",
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
