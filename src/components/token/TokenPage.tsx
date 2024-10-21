import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent } from "../ui/card";
import { Slider } from "../ui/slider";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";

import Navbar from "../../components/header/Navbar";
import PaymentDialog from "./payment/PaymentDialog";

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
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-3xl font-bold mb-6">{token?.name}</h1>

				<div className="py-10">
					<label
						htmlFor="token-amount"
						className="block text-sm font-medium text-gray-300 mb-2"
					>
						Token Amount: {requestTokenAmount}
					</label>

					<Slider
						id="token-amount"
						min={0}
						max={token?.maxAmount}
						value={[requestTokenAmount]}
						step={(token?.maxAmount as number) > 10 ? 10 : 1}
						onValueChange={handleRequestAmountChange}
						className="w-full"
					/>
				</div>

				<div className="pb-10">
					<label className="block text-sm font-medium text-gray-300 mb-2">
						Payment Currency
					</label>

					<ToggleGroup
						type="single"
						value={paymentCurrency}
						onValueChange={handlePaymentCurrencyChange}
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
					transactionToken={paymentCurrency as TransactionToken}
					requestedToken={token?.name as string}
					requestedAmount={requestTokenAmount}
				/>

				<div className="container w-4/6 py-10">
					<h3 className="text-3xl font-bold mb-6">
						What is {token?.name}?
					</h3>

					<Card className="bg-gradient-to-br from-cyan-800 to-blue-800 border-2 border-cyan-500 text-white">
						<CardContent className="p-6">
							<p>{token?.description}</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
};

export default TokenPage;
