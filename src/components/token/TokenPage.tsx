import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Check, Forward, Info, Network, Package, Wallet } from "lucide-react";

import { Card, CardContent } from "../../components/ui/card";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../../components/ui/tooltip";
import { Checkbox } from "../../components/ui/checkbox";
import { Label } from "../../components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../components/ui/select";
import { Slider } from "../../components/ui/slider";
import { ToggleGroup, ToggleGroupItem } from "../../components/ui/toggle-group";

import Navbar from "../../components/header/Navbar";
import PaymentDialog from "./payment/PaymentDialog";

type TransactionToken = "USDC" | "USDT";

type TransactionNetwork =
	| "erc20"
	| "arbitrum-one"
	| "base"
	| "bsc"
	| "mode"
	| "op";

type TokenInfo = {
	[key: string]: {
		name: string;
		description: string;
		network: string;
		maxAmount: number;
	};
};

const paymentNetworkOptions = [
	{
		network: "erc20",
		label: "ERC20",
		paymentOptions: [
			{
				token: "USDC",
				address: process.env.REACT_APP_ERC_20_ADDRESS,
			},
			{
				token: "USDT",
				address: process.env.REACT_APP_ERC_20_ADDRESS,
			},
		],
	},
	{
		network: "arbitrum-one",
		label: "Arbitrum One",
		paymentOptions: [
			{
				token: "USDC",
				address: process.env.REACT_APP_ERC_20_ADDRESS,
			},
			{
				token: "USDT",
				address: process.env.REACT_APP_ERC_20_ADDRESS,
			},
		],
	},
	{
		network: "base",
		label: "Base",
		paymentOptions: [
			{
				token: "USDC",
				address: process.env.REACT_APP_ERC_20_ADDRESS,
			},
		],
	},
	{
		network: "bsc",
		label: "Binance Smart Chain",
		paymentOptions: [
			{
				token: "USDC",
				address: process.env.REACT_APP_ERC_20_ADDRESS,
			},
		],
	},
	{
		network: "mode",
		label: "Mode",
		paymentOptions: [
			{
				token: "USDC",
				address: process.env.REACT_APP_ERC_20_ADDRESS,
			},
			{
				token: "USDT",
				address: process.env.REACT_APP_ERC_20_ADDRESS,
			},
		],
	},
	{
		network: "op",
		label: "Optimism",
		paymentOptions: [
			{
				token: "USDC",
				address: process.env.REACT_APP_ERC_20_ADDRESS,
			},
			{
				token: "USDT",
				address: process.env.REACT_APP_ERC_20_ADDRESS,
			},
		],
	},
];

const TokenPage = () => {
	const { tokenName } = useParams<{ tokenName: string }>();

	const [requestTokenAmount, setRequestTokenAmount] = useState<number>(0);
	const [transactionNetwork, setTransactionNetwork] =
		useState<TransactionNetwork>(
			paymentNetworkOptions[0].network as TransactionNetwork
		);
	const [paymentCurrency, setPaymentCurrency] = useState<string>(
		paymentNetworkOptions[0].paymentOptions[0].token
	);
	const [isAccepted, setIsAccepted] = useState<boolean>(false);

	const navigate = useNavigate();

	const handleRequestAmountChange = (value: any[]) => {
		setRequestTokenAmount(value[0]);
	};

	const handleSelect = (value: TransactionNetwork) => {
		setTransactionNetwork(value);
	};

	const handlePaymentCurrencyChange = (value: string) => {
		if (value) setPaymentCurrency(value);
	};

	const handleAcceptChange = (checked: boolean) => {
		setIsAccepted(checked);
	};

	const tokenInfo: TokenInfo = useMemo(
		() => ({
			lumia: {
				name: "LUMIA",
				description:
					"Lumia is a Layer 2 blockchain platform built on the Polygon Chain Development Kit (CDK), designed to integrate Real-World Assets (RWAs) into decentralized finance (DeFi). It enhances liquidity and capital efficiency through its native module, Lumia Stream, and is equipped for scalability and interoperability with solutions like NearDA and Polygon AggLayer. Lumia ensures security via a decentralized sequencer network and prioritizes user experience with features like Account Abstraction and PolygonID. It also offers advanced yield optimization strategies and is positioned as a leader in the tokenized RWA industry.",
				network: "Lumia Testnet",
				maxAmount: 100,
			},
			bera: {
				name: "BERA",
				description:
					"Berachain is a Layer-1 blockchain fully compatible with the Ethereum Virtual Machine (EVM), designed to enhance decentralized finance (DeFi) applications. It stands out with its Proof of Liquidity (PoL) consensus mechanism, which rewards stakers for providing liquidity, thereby improving security and stability. The BeaconKit Framework, built using the Cosmos SDK, allows for modular EVM-compatible development, supporting both Layer-1 and Layer-2 solutions. Originally an NFT project, Berachain has evolved into a platform aimed at defragmenting liquidity, incentivizing DeFi development, and offering high accessibility for Ethereum-based projects.",
				network: "Berachain bArtio",
				maxAmount: 10,
			},
			story: {
				name: "STORY",
				description: "STORY description",
				network: "Story Testnet",
				maxAmount: 10,
			},
			sepoliaEth: {
				name: "sepoliaETH",
				description: "sepoliaETH description",
				network: "Sepolia Testnet",
				maxAmount: 10,
			},
		}),
		[]
	);

	useEffect(() => {
		if (!tokenInfo[tokenName as keyof TokenInfo]) {
			navigate("/not-found");
		}
	}, [tokenName, tokenInfo, navigate]);

	const token = tokenName ? tokenInfo[tokenName] : null;

	return (
		<>
			<Navbar />
			<div className="container mx-auto px-10 md:px-20 py-8">
				<h1 className="text-3xl font-bold mb-2">{token?.name}</h1>

				<h3 className="text-xl mb-6">Testnet Tokens</h3>

				<div className="flex flex-col-reverse md:flex-row gap-6 lg:gap-10">
					<div className="w-full md:w-1/2 text-white/80">
						<p className="mb-4">
							Faucets drip testnet tokens to anyone who requests
							them, usually for free. Most faucets, however, limit
							the number of tokens you can receive and may
							restrict how often you can request them. They often
							involve completing tasks like solving CAPTCHAs or
							linking social accounts (GitHub, Discord, X),
							humanity verification like Gitcoin Passport, which
							can be time-consuming.
						</p>
						<p>
							We offer a premium service to help you get a large
							sum of testnet tokens quickly and easily. We provide
							tokens without the typical hassles.
						</p>
						<ul className="list-disc list-inside mt-4 mx-6 space-y-4">
							<li>No more CAPTCHAs</li>
							<li>No more time limitations</li>
							<li>No more proof of humanity</li>
							<li>No more social media logins</li>
						</ul>
						<p className="mt-4">
							While we provide testnet tokens for free, this
							service comes with a{" "}
							<strong>convenience fee at each request</strong>.
						</p>
					</div>

					<div className="flex flex-col gap-8 w-full md:w-1/2">
						<Card className="bg-gradient-to-br from-cyan-800 to-blue-800 border-2 border-cyan-500 text-white pt-6">
							<CardContent>
								<h2 className="text-2xl font-bold mb-1">
									Request Tokens
								</h2>

								<p className="mb-4 text-sm">
									Get {token?.name} on {token?.network}
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
														We charge a convenience
														fee for each testnet
														token request
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
									<Label className="block text-sm font-medium text-gray-300 mb-2">
										Fee Network
									</Label>

									<Select
										onValueChange={handleSelect}
										defaultValue={
											transactionNetwork as string
										}
									>
										<SelectTrigger className="text-gray-800">
											<SelectValue placeholder="Select a network" />
										</SelectTrigger>

										<SelectContent>
											<SelectGroup>
												{paymentNetworkOptions.map(
													(network) => (
														<SelectItem
															key={
																network.network
															}
															value={
																network.network
															}
														>
															{network.label}
														</SelectItem>
													)
												)}
											</SelectGroup>
										</SelectContent>
									</Select>
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
										{paymentNetworkOptions
											.find(
												(network) =>
													network.network ===
													transactionNetwork
											)
											?.paymentOptions.map((option) => (
												<ToggleGroupItem
													key={option.token}
													value={option.token}
													aria-label={`Pay with ${option.token}`}
													className="data-[state=on]:bg-cyan-500"
												>
													{option.token}
												</ToggleGroupItem>
											))}
									</ToggleGroup>
								</div>

								<div className="flex justify-start items-center gap-4 mx-4 mb-4">
									<Checkbox
										className="border-gray-300 w-4 h-4"
										id="accept"
										onCheckedChange={handleAcceptChange}
									/>

									<label
										htmlFor="accept"
										className="text-xs text-gray-300 hover:cursor-pointer"
									>
										I accept the condition of paying a
										convenience fee to use this service.
									</label>
								</div>

								<PaymentDialog
									transactionToken={
										paymentCurrency as TransactionToken
									}
									transactionNetwork={
										transactionNetwork as TransactionNetwork
									}
									testnetNetwork={token?.network as string}
									requestedToken={token?.name as string}
									requestedAmount={requestTokenAmount}
									isConditionAccepted={isAccepted}
								/>
							</CardContent>
						</Card>
					</div>
				</div>

				<div className="w-full text-white/80 pt-8 mx-auto md:w-4/5">
					<h2 className="text-2xl font-bold mb-4">
						What is {token?.name}?
					</h2>
					<p>{token?.description}</p>
				</div>
			</div>

			<section className="bg-gradient-to-b from-cyan-900 to-blue-900 text-white py-20 mt-12 rounded-lg">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
						How It Works
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
						{[
							{
								icon: Package,
								text: "Pick your token amount and fee payment option",
							},
							{
								icon: Wallet,
								text: "Enter a wallet address where you want your tokens",
							},
							{
								icon: Network,
								text: "Select a network for fee payment",
							},
							{
								icon: Forward,
								text: "Send convenience fee to destination address",
							},
							{
								icon: Check,
								text: "Get a fresh pour of testnet tokens",
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
