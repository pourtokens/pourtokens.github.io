import { useState } from "react";
import { Wallet } from "lucide-react";
import { toast } from "sonner";

import { Button } from "../../components/ui/button";
import { ethers } from "ethers";

const WalletConnection = () => {
	const [isConnected, setIsConnected] = useState<boolean>(false);
	const [address, setAddress] = useState<string | null>(null);
	const [userBalance, setUserBalance] = useState<number | null>(null);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const connectWallet = async () => {
		if (!window.ethereum) {
			return setErrorMessage("MetaMask is not installed");
		}

		try {
			const value = await window.ethereum.request({
				method: "eth_requestAccounts",
			});

			const accounts = await value;
			accountChanged(accounts[0]);
			setErrorMessage("");
		} catch (error: any) {
			setErrorMessage(error.message);
			toast(error.message, {
				action: {
					label: "Close",
					onClick: () => toast.dismiss(),
				},
			});
		}
	};

	const disconnectWallet = () => {
		setAddress(null);
		setIsConnected(false);
	};

	const accountChanged = (accountName: string) => {
		if (accountName) {
			setIsConnected(true);
			setAddress(accountName);
			getUserBalance(accountName);
		}
	};

	const getUserBalance = async (accountAddress: string) => {
		try {
			const value = await window.ethereum?.request({
				method: "eth_getBalance",
				params: [accountAddress, "latest"],
			});

			const balance = ethers.formatEther(await value);
			setUserBalance(parseFloat(parseFloat(balance).toFixed(8)));
		} catch (error: any) {
			setErrorMessage(error.message);
			toast(error.message);
		}
	};

	return (
		<div className="bg-gradient-to-r from-blue-500 to-purple-600 p-[1px] rounded-lg mb-8">
			<div className="bg-white/50 backdrop-blur-md rounded-lg p-6">
				<h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
					<Wallet className="w-6 h-6 text-blue-500 mr-2" />
					Web3 Wallet
				</h2>
				{isConnected ? (
					<div className="flex flex-col sm:flex-row justify-between items-center">
						<p className="text-gray-600 mb-4 sm:mb-0">
							Connected:{" "}
							<span className="font-mono text-blue-600">{`${address?.slice(
								0,
								6
							)}...${address?.slice(-4)}`}</span>
						</p>
						<Button
							onClick={disconnectWallet}
							className="w-full sm:w-auto bg-gradient-to-r from-gray-200 to-gray-300 hover:from-gray-300 hover:to-gray-400 text-gray-800 transition-all duration-300"
						>
							Disconnect Wallet
						</Button>
					</div>
				) : (
					<Button
						onClick={connectWallet}
						className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-neutral-200 transition-all duration-300"
					>
						Connect Wallet
					</Button>
				)}
			</div>
		</div>
	);
};

export default WalletConnection;
