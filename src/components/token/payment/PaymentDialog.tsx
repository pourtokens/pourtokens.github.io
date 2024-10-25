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
import { toast } from "sonner";

type TransactionNetwork =
	| "erc20"
	| "arbitrum-one"
	| "base"
	| "bsc"
	| "mode"
	| "op";

interface PaymentDialogProps {
	transactionToken: "USDC" | "USDT";
	transactionNetwork: TransactionNetwork;
	requestedToken: string;
	requestedAmount: number;
	testnetNetwork: string;
	isConditionAccepted: boolean;
}

const PaymentDialog = ({
	transactionToken,
	transactionNetwork,
	testnetNetwork,
	requestedToken,
	requestedAmount,
	isConditionAccepted,
}: PaymentDialogProps) => {
	const PAYMENT_ADDRESS = process.env.REACT_APP_ERC_20_ADDRESS;

	const [isPaymentDialogOpen, setIsPaymentDialogOpen] =
		useState<boolean>(false);
	const [depositAddress, setDepositAddress] = useState<string | null>(null);
	const transactionAmount: number = 5;
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const handlePaymentDialogTrigger = () => {
		if (!isConditionAccepted) {
			setIsPaymentDialogOpen(false);
			return;
		}

		setIsPaymentDialogOpen(true);
	};

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.trim() === "") {
			setDepositAddress(null);
			return;
		}
		setDepositAddress(e.target.value);
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
		if (!depositAddress) {
			toast.error("Please fill in your deposit address.");
			return;
		}

		if (!transactionNetwork) {
			toast.error("Please select a transaction network for the fee.");
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
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
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
					onClick={handlePaymentDialogTrigger}
					disabled={!isConditionAccepted}
					variant="outline"
					className="w-full bg-blue-500 hover:bg-indigo-700 hover:text-neutral-200 border-transparent transition-colors"
				>
					Request Tokens
				</Button>
			</DialogTrigger>

			<DialogContent className="bg-gradient-to-br from-blue-900 to-indigo-900 border-2 border-blue-600 text-neutral-200">
				<DialogHeader>
					<DialogTitle>Request Tokens</DialogTitle>

					<DialogDescription className="text-neutral-200/60">
						You will receive your tokens on {testnetNetwork}
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
						<small className="text-neutral-200/60">
							Please send the convenience fee to the destination
							address on {transactionNetwork}.
						</small>
					</div>
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
