import { Info } from "lucide-react";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardHeader,
	CardFooter,
	CardTitle,
	CardDescription,
} from "../ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../../components/ui/tooltip";

import sendTransaction from "../../components/wallet/sendTransaction";
import pricing from "../../pricing.json";

type Token = {
	id: number;
	token: string;
	bundles: Bundle[];
	lowSupplyThreshold: number;
};

type Bundle = {
	amount: number;
	priceUSD: number;
};

const tokens: Token[] = pricing;

const Bundles = () => {
	return (
		<>
			<section className="mb-12">
				<h2 className="text-3xl font-bold mb-6">
					Need More? We've Got Bundles!
				</h2>
				<p className="mb-6">
					Why wait around for tiny token drips when you can get a real
					pour? Check out our sweet bundles:
				</p>

				{/* <WalletConnection /> */}

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
					{tokens.map((token) =>
						token.bundles.map((bundle, index) => (
							<Card
								key={`${token.token}-${index}`}
								className="bg-purple-900/30 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300"
							>
								<CardHeader className="p-4">
									<CardTitle className="text-lg font-bold text-white">
										{bundle.amount} {token.token}
									</CardTitle>
									<CardDescription className="text-sm text-gray-400">
										Tokens for {token.token} Testnet
									</CardDescription>
								</CardHeader>
								<CardContent className="p-4 pt-0">
									<p className="text-2xl font-bold text-blue-500">
										${bundle.priceUSD} USD
									</p>
									<p className="text-blue-500">
										in value{" "}
										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger>
													<Info
														className="inline-block"
														size={16}
													/>
												</TooltipTrigger>
												<TooltipContent>
													Lol
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</p>
								</CardContent>
								<CardFooter className="p-4 pt-0">
									<Button
										onClick={() =>
											sendTransaction({
												toAccount: process.env
													.REACT_APP_ERC_20_ADDRESS as string,
												gas: Number(21000).toString(16),
												gasPrice:
													Number(2500000).toString(
														16
													),
												amount: 1900000000000000,
											})
										}
										className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm py-1 transition-all duration-300"
									>
										Get Tokens
									</Button>
								</CardFooter>
							</Card>
						))
					)}
				</div>
			</section>

			<section className="mb-16 bg-gradient-to-r from-cyan-600 to-blue-700 p-8 rounded-lg shadow-md">
				<h2 className="text-3xl font-bold mb-6 text-center">
					How It Works:
				</h2>
				<div className="grid md:grid-cols-2 gap-8 items-center">
					<ol className="list-decimal pl-6 space-y-4 text-lg">
						<li>Pick your bundle</li>
						<li>
							Enter your wallet address where you want your tokens
						</li>
						<li>Select your desired network and token</li>
						<li>Get a fresh pour of tokens – it's that easy!</li>
					</ol>
					<img
						src="/placeholder.svg?height=300&width=400"
						alt="How Pour Tokens Works"
						className="rounded-lg shadow-lg"
					/>
				</div>
			</section>
		</>
	);
};

export default Bundles;
