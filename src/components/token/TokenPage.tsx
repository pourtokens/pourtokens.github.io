import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Check, Info, Network, Package, Wallet } from "lucide-react";

import { Card, CardContent } from "../ui/card";
import { Slider } from "../ui/slider";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

import Navbar from "../../components/header/Navbar";
import PaymentDialog from "./payment/PaymentDialog";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";

type TransactionToken = "USDC" | "USDT";

type TokenInfo = {
	[key: string]: {
		name: string;
		description: string;
		testnet: string;
		maxAmount: number;
	};
};

const TokenPage = () => {
	const { tokenName } = useParams<{ tokenName: string }>();

	const [requestTokenAmount, setRequestTokenAmount] = useState<number>(0);
	const [paymentCurrency, setPaymentCurrency] = useState<string>("USDC");

	const navigate = useNavigate();

	const handleRequestAmountChange = (value: any[]) => {
		setRequestTokenAmount(value[0]);
	};

	const handlePaymentCurrencyChange = (value: string) => {
		if (value) setPaymentCurrency(value);
	};

	const tokenInfo: TokenInfo = useMemo(
		() => ({
			lumia: {
				name: "LUMIA",
				description:
					"Lumia is a Layer 2 blockchain platform built on the Polygon Chain Development Kit (CDK), designed to integrate Real-World Assets (RWAs) into decentralized finance (DeFi). It enhances liquidity and capital efficiency through its native module, Lumia Stream, and is equipped for scalability and interoperability with solutions like NearDA and Polygon AggLayer. Lumia ensures security via a decentralized sequencer network and prioritizes user experience with features like Account Abstraction and PolygonID. It also offers advanced yield optimization strategies and is positioned as a leader in the tokenized RWA industry.",
				testnet: "Lumia Testnet",
				maxAmount: 100,
			},
			bera: {
				name: "BERA",
				description:
					"Berachain is a Layer-1 blockchain fully compatible with the Ethereum Virtual Machine (EVM), designed to enhance decentralized finance (DeFi) applications. It stands out with its Proof of Liquidity (PoL) consensus mechanism, which rewards stakers for providing liquidity, thereby improving security and stability. The BeaconKit Framework, built using the Cosmos SDK, allows for modular EVM-compatible development, supporting both Layer-1 and Layer-2 solutions. Originally an NFT project, Berachain has evolved into a platform aimed at defragmenting liquidity, incentivizing DeFi development, and offering high accessibility for Ethereum-based projects.",
				testnet: "Berachain bArtio",
				maxAmount: 10,
			},
			story: {
				name: "STORY",
				description: "STORY description",
				testnet: "Story Testnet",
				maxAmount: 10,
			},
			sepoliaEth: {
				name: "sepoliaETH",
				description: "sepoliaETH description",
				testnet: "Sepolia Testnet",
				maxAmount: 10,
			},
		}),
		[]
	);

	useEffect(() => {
		if (!tokenName) {
			navigate("/bundles");
		}

		if (!tokenInfo[tokenName as keyof TokenInfo]) {
			navigate("/not-found");
		}
	}, [tokenName, tokenInfo, navigate]);

	const token = tokenName ? tokenInfo[tokenName] : null;

	return (
		<>
			<Navbar />
			<div className="container mx-auto px-10 py-8">
				<h1 className="text-3xl font-bold mb-6">{token?.name}</h1>

				<div className="flex flex-col-reverse md:flex-row gap-8">
					<div className="w-full md:w-1/2">
						<Card className="bg-gradient-to-br from-cyan-800 to-blue-800 border-2 border-cyan-500 text-white mb-8">
							<CardContent className="p-6">
								<h2 className="text-2xl font-bold mb-4">
									About Faucets and Pour Tokens
								</h2>
								<p className="mb-4">
									Faucets drip testnet tokens to anyone who
									requests them, usually for free. Most
									faucets, however, limit the number of tokens
									you can receive and may restrict how often
									you can request them. They often involve
									completing tasks like solving CAPTCHAs or
									linking social accounts (GitHub, Discord,
									X), which can be time-consuming.
								</p>
								<h3 className="text-xl font-bold mb-2">
									How is Pour Tokens Different?
								</h3>
								<p>
									At Pour Tokens, we offer a premium service
									to help you get a large sum of testnet
									tokens quickly and easily. Instead of
									jumping through hoops or dealing with
									delays, we provide tokens without the
									typical hassles:
								</p>
								<ul className="list-disc list-inside mt-2 text-lg">
									<li>no CAPTCHAs</li>
									<li>no social media logins</li>
									<li>
										no limitations on how often you can
										request them
									</li>
								</ul>
								<p className="mt-4">
									We do charge a{" "}
									<strong>one-time convenience fee</strong>,
									but once paid, you can receive as many
									testnet tokens as you need, with zero
									frustration.
								</p>
							</CardContent>
						</Card>
					</div>

					<div className="flex flex-col gap-8 w-full md:w-1/2">
						<Card className="bg-gradient-to-br from-cyan-800 to-blue-800 border-2 border-cyan-500 text-white pt-6">
							<CardContent>
								<h2 className="text-2xl font-bold mb-1">
									Request Tokens
								</h2>

								<p className="mb-4 text-sm">
									Get {token?.name} on {token?.testnet}
								</p>

								<div className="mb-6">
									<label
										htmlFor="token-amount"
										className="block text-sm font-medium text-gray-300 mb-2"
									>
										Token Amount
									</label>

									<p className="text-lg mb-6 font-semibold">
										{requestTokenAmount} {token?.name}
									</p>

									<Slider
										id="token-amount"
										min={0}
										max={token?.maxAmount}
										value={[requestTokenAmount]}
										step={
											(token?.maxAmount as number) > 10
												? 10
												: 1
										}
										onValueChange={
											handleRequestAmountChange
										}
										className="w-full"
									/>

									<div className="flex justify-end mt-2 text-xs text-white/60">
										<span>
											Max: {token?.maxAmount}{" "}
											{token?.name}
										</span>
									</div>
								</div>

								<div className="mb-6">
									<div className="flex items-center space-x-2 mb-2">
										<label className="block text-sm font-medium text-gray-300">
											Convenience Fee
										</label>

										<TooltipProvider>
											<Tooltip>
												<TooltipTrigger asChild>
													<Info
														size={14}
														className="hover:cursor-pointer text-gray-300"
													></Info>
												</TooltipTrigger>
												<TooltipContent className="bg-gray-800 text-gray-300 border-none">
													<p>
														While we provide testnet
														tokens for free, we
														charge a convenience fee
														for each token request
													</p>
												</TooltipContent>
											</Tooltip>
										</TooltipProvider>
									</div>

									<p className="text-lg font-semibold">
										5 {paymentCurrency}{" "}
									</p>
								</div>

								<div className="mb-6">
									<label className="block text-sm font-medium text-gray-300 mb-2">
										Fee Payment Coin
									</label>
									<ToggleGroup
										type="single"
										value={paymentCurrency}
										onValueChange={
											handlePaymentCurrencyChange
										}
										className="justify-start"
									>
										<ToggleGroupItem
											value="USDC"
											aria-label="Pay with USDC"
											className="data-[state=on]:bg-cyan-500"
										>
											USDC
										</ToggleGroupItem>
										<ToggleGroupItem
											value="USDT"
											aria-label="Pay with USDT"
											className="data-[state=on]:bg-cyan-500"
										>
											USDT
										</ToggleGroupItem>
									</ToggleGroup>
								</div>

								<PaymentDialog
									transactionToken={
										paymentCurrency as TransactionToken
									}
									requestedToken={token?.name as string}
									requestedAmount={requestTokenAmount}
								/>
							</CardContent>
						</Card>

						<Card className="bg-gradient-to-br from-cyan-800 to-blue-800 border-2 border-cyan-500 text-white">
							<CardContent className="p-6">
								<h2 className="text-2xl font-bold mb-4">
									What is {token?.name}?
								</h2>
								<p>{token?.description}</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>

			<section className="bg-gradient-to-b from-cyan-900 to-blue-900 text-white py-20 mt-12 rounded-lg">
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

export default TokenPage;
