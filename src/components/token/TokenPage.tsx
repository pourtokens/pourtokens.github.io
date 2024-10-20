import { useParams } from "react-router-dom";
import { Card, CardContent } from "../ui/card";

const TokenPage = () => {
	const { tokenName } = useParams<{ tokenName: string }>();

	type TokenInfo = {
		[key: string]: {
			description: string;
			testnet: string;
		};
	};

	const tokenInfo: TokenInfo = {
		lumia: {
			description:
				"Lumia is a Layer 2 blockchain platform built on the Polygon Chain Development Kit (CDK), designed to integrate Real-World Assets (RWAs) into decentralized finance (DeFi). It enhances liquidity and capital efficiency through its native module, Lumia Stream, and is equipped for scalability and interoperability with solutions like NearDA and Polygon AggLayer. Lumia ensures security via a decentralized sequencer network and prioritizes user experience with features like Account Abstraction and PolygonID. It also offers advanced yield optimization strategies and is positioned as a leader in the tokenized RWA industry.",
			testnet: "Lumia Testnet",
		},
		bera: {
			description:
				"Berachain is a Layer-1 blockchain fully compatible with the Ethereum Virtual Machine (EVM), designed to enhance decentralized finance (DeFi) applications. It stands out with its Proof of Liquidity (PoL) consensus mechanism, which rewards stakers for providing liquidity, thereby improving security and stability. The BeaconKit Framework, built using the Cosmos SDK, allows for modular EVM-compatible development, supporting both Layer-1 and Layer-2 solutions. Originally an NFT project, Berachain has evolved into a platform aimed at defragmenting liquidity, incentivizing DeFi development, and offering high accessibility for Ethereum-based projects.",
			testnet: "Berachain bArtio",
		},
	};

	const info = tokenName ? tokenInfo[tokenName] : null;

	return (
		<div className="container mx-auto px-4 py-8">
			{info ? (
				<>
					<h1 className="text-3xl font-bold mb-6">
						{tokenName} Token
					</h1>
					<Card className="bg-gradient-to-br from-cyan-800 to-blue-800 border-2 border-cyan-500 text-white">
						<CardContent className="p-6">
							<p className="mb-4">{info.description}</p>
							<p className="font-semibold">
								Testnet: {info.testnet}
							</p>
						</CardContent>
					</Card>
				</>
			) : (
				<p className="text-red-500">Token information not found.</p>
			)}
		</div>
	);
};

export default TokenPage;
