import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Info } from "lucide-react";

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
import HowItWorks from "../home/HowItWorks";

type TransactionToken = "USDC" | "USDT";

type TransactionNetwork =
	| "erc20"
	| "arbitrum-one"
	| "base"
	| "bsc"
	| "mode"
	| "op";

type TokenInfo = {
	name: string;
	description: string;
	label: string;
	maxAmount: number;
	minAmount: number;
	network: string;
	steps?: number;
}[];

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
		() => [
			{
				name: "holeskyETH",
				description:
					"HoleskyETH is the main token of the Holesky testnet, a new Ethereum public testing environment designed for technical experimentation with Ethereum's infrastructure and protocol upgrades. Launched in September 2023, Holesky aims to address the limitations of its predecessor, the Goerli testnet, which suffered from a shortage of testnet tokens and rising costs. Holesky features a significantly larger fixed supply of 1.6 billion tokens, ensuring ample resources for developers. Validators can stake HoleskyETH to participate in network validation, and the testnet supports 1.4 million validators, facilitating testing for Ethereum’s future developments, including the upcoming Dencun upgrade.",
				label: "holesky-eth",
				maxAmount: 10,
				minAmount: 2,
				network: "Holesky Testnet",
			},
			{
				name: "sepoliaETH",
				description:
					"SepoliaETH is the native token of the Sepolia Testnet, a testing environment for Ethereum developers. Sepolia, which has transitioned from Proof of Work to Proof of Stake like the Ethereum mainnet, allows developers to deploy and test smart contracts in a safe, low-stakes environment. SepoliaETH is used to pay for gas fees on the network, enabling transactions and contract executions. To make the development process smoother, Sepolia offers a faucet service that provides SepoliaETH for free, ensuring developers can run their decentralized applications (dApps) without financial risk.",
				label: "sepolia-eth",
				maxAmount: 1,
				minAmount: 0.2,
				steps: 0.1,
				network: "Sepolia Testnet",
			},
			{
				name: "LUMIA",
				description:
					"LUMIA is a next-generation blockchain platform designed to support the entire life cycle of real-world assets (RWAs), from tokenization to their integration into decentralized finance (DeFi) and Web3. Unlike other projects that only focus on tokenizing RWAs, LUMIA aims to bridge billions of dollars in liquidity by connecting tokenized assets to millions of DeFi traders. As part of its ecosystem, LUMIA also offers exclusive airdrops, with details for the Season 1 airdrop coming soon, providing early participants additional rewards.",
				maxAmount: 100,
				minAmount: 20,
				label: "lumia",
				network: "Lumia Testnet",
				steps: 5,
			},
			{
				name: "BERA",
				description:
					"BERA is the native token of Berachain, a high-performance EVM-identical Layer 1 blockchain that uses Proof-of-Liquidity (PoL) as its consensus mechanism. PoL rewards ecosystem liquidity, encouraging efficient trading, price stability, and network growth while securing the chain. Berachain is fully compatible with Ethereum's infrastructure, as it supports unmodified execution clients like Geth and Erigon, allowing it to adopt the latest EVM upgrades seamlessly. The BERA token plays a central role in maintaining the network, participating in its liquidity-driven consensus mechanism, and interacting with its native decentralized applications (dApps) like BEX and Bend.",
				maxAmount: 15,
				minAmount: 4,
				label: "bera",
				network: "Berachain bArtio",
			},
			{
				name: "IP",
				description:
					'IP, the token within the Story Network, represents "Intellectual Property" on the blockchain and transforms the way IP is licensed, remixed, and monetized. By creating "IP Assets" (tokenized representations of intellectual property) on a purpose-built layer 1 blockchain, Story automates complex legal processes typically handled by lawyers. IP holders set programmable licensing terms, enforced by smart contracts, allowing creators to seamlessly collaborate and generate revenue from their works. The Proof-of-Creativity Protocol ensures transparent, decentralized management of IP, while the Programmable IP License bridges the blockchain and legal world, enabling real-world enforcement.',
				maxAmount: 15,
				minAmount: 4,
				label: "ip",
				network: "Story Testnet",
			},
		],
		[]
	);

	useEffect(() => {
		const tokenExists = tokenInfo.some(
			(token) => token.label === tokenName
		);
		if (!tokenExists) {
			navigate("/not-found");
		}
	}, [tokenName, tokenInfo, navigate]);

	const token = tokenName
		? tokenInfo.find((token) => token.label === tokenName)
		: null;

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
										min={token?.minAmount}
										max={token?.maxAmount}
										value={[requestTokenAmount]}
										step={token?.steps ? token.steps : 1}
										onValueChange={
											handleRequestAmountChange
										}
										className="w-full"
									/>

									<div className="flex justify-between mt-2 text-xs text-white/60">
										<span>
											Min: {token?.minAmount}{" "}
											{token?.name}
										</span>
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

			<HowItWorks />
		</>
	);
};

export default TokenPage;
