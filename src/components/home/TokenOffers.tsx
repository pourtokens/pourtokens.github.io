import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { HandCoins } from "lucide-react";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

const TokenOffers = forwardRef<HTMLElement>((props, ref) => {
	return (
		<section className="text-neutral-200 py-20 max-md:px-12" ref={ref}>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
					Available Tokens
				</h2>

				<p className="text-xl text-center mb-12 max-w-2xl mx-auto">
					Why wait around for tiny token drips when you can get a real
					pour?
				</p>

				<p className="text-xl text-center mb-12 max-w-2xl mx-auto">
					Check out the tokens in store:
				</p>

				<div className="flex flex-col flex-wrap sm:flex-row gap-8 justify-center">
					{[
						{
							name: "holeskyETH",
							label: "holesky-eth",
							network: "Holesky Testnet",
						},
						{
							name: "sepoliaETH",
							label: "sepolia-eth",
							network: "Sepolia Testnet",
						},
						{
							name: "BERA",
							label: "bera",
							network: "Berachain bArtio",
						},
						{
							name: "IP",
							label: "ip",
							network: "Story Testnet",
						},
						{
							name: "LUMIA",
							label: "lumia",
							network: "LUMIA Testnet",
						},
					].map((token, index) => (
						<Card
							key={index}
							className="w-full sm:w-[240px] bg-transparent border-2 border-blue-500 text-neutral-200 transition-all duration-300 transform hover:scale-105 rounded-xl"
						>
							<CardContent className="p-6 flex flex-col items-center">
								<HandCoins className="w-16 h-16 mb-4 text-pink-600" />
								<h3 className="text-3xl font-bold mb-2">
									{token.name}
								</h3>

								<p className="text-lg mb-4 text-gray-300 text-center">
									{token.network}
								</p>

								<p className="text-sm mb-4 text-gray-400 italic text-center">
									Receive testnet tokens instantly with no
									hassle.
								</p>

								<Link to={`/token/${token.label}`}>
									<Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-neutral-200 font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out">
										Get {token.name}
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
	);
});

export default TokenOffers;
