import { ChangeEvent, useState } from "react";
import axios from "axios";

import { Button } from "../../../components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../../../components/ui/dialog";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../../components/ui/select";
import { toast } from "sonner";

type TransactionNetwork = "erc20" | "arbitrum-one" | "base";

interface PaymentDialogProps {
	transactionToken: "USDC" | "USDT";
	requestedToken: string;
	requestedAmount: number;
}

const PaymentDialog = ({
	transactionToken,
	requestedToken,
	requestedAmount,
}: PaymentDialogProps) => {
	const PAYMENT_ADDRESS = process.env.REACT_APP_ERC_20_ADDRESS;

	const [depositAddress, setDepositAddress] = useState<string | null>(null);
	const [transactionNetwork, setTransactionNetwork] =
		useState<TransactionNetwork | null>(null);
	const [isPaymentDialogOpen, setIsPaymentDialogOpen] =
		useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const transactionAmount: number = 5;

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.trim() === "") {
			setDepositAddress(null);
			return;
		}
		setDepositAddress(e.target.value);
	};

	const handleSelect = (value: TransactionNetwork) => {
		setTransactionNetwork(value);
	};

	const copyDepositAddress = () => {
		navigator.clipboard.writeText(PAYMENT_ADDRESS as string);
		toast.info("Destination address copied to clipboard");
	};

	const copyTransactionAmount = () => {
		navigator.clipboard.writeText(transactionAmount.toString());
		toast.info("Fee amount copied to clipboard");
	};

	const sendTransaction = async () => {
		if (!depositAddress || !transactionNetwork) {
			toast.error("Please fill in all fields.");
			return;
		}

		if (requestedAmount <= 0) {
			toast.error("Please enter a valid amount.");
			return;
		}

		setIsLoading(true);

		try {
			const response = await axios.post(
				`${process.env.REACT_APP_API_URL}/transaction`,
				{
					bundle: {
						token: requestedToken,
						amountRequested: requestedAmount,
					},
					transactionDetails: {
						chain: transactionNetwork,
						token: transactionToken,
						amountPaid: transactionAmount,
					},
					depositAddress: depositAddress,
				}
			);

			toast.success(response.data, {
				description: "Please wait until we verify the transaction.",
			});
		} catch (error) {
			toast.error("An error occurred", {
				description: "Please try again later.",
			});
		} finally {
			setDepositAddress(null);
			setTransactionNetwork(null);
			setIsLoading(false);
			setIsPaymentDialogOpen(false);
		}
	};

	return (
		<Dialog
			open={isPaymentDialogOpen}
			onOpenChange={setIsPaymentDialogOpen}
		>
			<DialogTrigger asChild>
				<Button
					variant="outline"
					className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
				>
					Request Tokens
				</Button>
			</DialogTrigger>

			<DialogContent className="bg-gradient-to-br from-blue-900 to-cyan-900 border-2 border-cyan-500 text-white">
				<DialogHeader>
					<DialogTitle>Request Tokens</DialogTitle>

					<DialogDescription className="text-white/60">
						You will receive your tokens on {requestedToken} Testnet
					</DialogDescription>
				</DialogHeader>

				<div className="grid gap-4 py-4">
					<div className="flex flex-col items-start gap-4">
						<Label htmlFor="deposit_address" className="text-right">
							Deposit Address
						</Label>

						<Input
							id="deposit_address"
							placeholder={`The address where you will receive ${requestedToken} testnet tokens`}
							defaultValue={depositAddress as string}
							className="text-gray-800"
							onChange={handleInput}
						/>
					</div>
					<div className="flex flex-col items-start gap-4">
						<Label htmlFor="amount" className="text-right">
							Convenience Fee
						</Label>

						<Input
							id="amount"
							value={`${transactionAmount} ${transactionToken}`}
							className="text-gray-800"
							onMouseDown={copyTransactionAmount}
							readOnly
						/>
					</div>

					<div className="flex flex-col items-start gap-4">
						<Label className="text-right">Fee Network</Label>

						<Select
							onValueChange={handleSelect}
							defaultValue={transactionNetwork as string}
						>
							<SelectTrigger className="text-gray-800">
								<SelectValue placeholder="Select a network" />
							</SelectTrigger>

							<SelectContent>
								<SelectGroup>
									<SelectItem value="erc20">ERC20</SelectItem>

									<SelectItem value="arbitrum-one">
										Arbitrum One
									</SelectItem>

									<SelectItem value="base">Base</SelectItem>

									<SelectItem value="bsc">
										Binance Smart Chain
									</SelectItem>

									<SelectItem value="mode">Mode</SelectItem>

									<SelectItem value="optimism">
										Optimism
									</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>

					{depositAddress && transactionNetwork && (
						<div className="flex flex-col items-start gap-4">
							<Label
								htmlFor="destination_address"
								className="text-right"
							>
								Destination Address
							</Label>

							<Input
								id="destination_address"
								defaultValue={PAYMENT_ADDRESS}
								className="text-gray-600"
								onMouseDown={copyDepositAddress}
								readOnly
							/>
							<small className="text-white/60">
								Please send the convenience fee to the
								destination address.
							</small>
						</div>
					)}
				</div>

				<DialogFooter>
					<Button onClick={sendTransaction} disabled={isLoading}>
						{isLoading
							? "Processing..."
							: `Request ${requestedToken}`}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default PaymentDialog;
