import { toast } from "sonner";

interface TransactionDetails {
	toAccount: string;
	gas?: string;
	gasPrice?: string;
	amount: number;
}

const sendTransaction = async ({ toAccount, amount }: TransactionDetails) => {
	const value = await window.ethereum?.request({
		method: "eth_requestAccounts",
	});

	const accounts = await value;
	const fromAccount = accounts[0];

	let params = {
		from: fromAccount,
		to: toAccount,
		gasLimit: Number(58000).toString(16),
		gasPrice: Number(2500000).toString(16),
		value: Number(amount).toString(16),
	};

	try {
		let tx = await window.ethereum?.request({
			method: "eth_sendTransaction",
			params: [params],
		});

		toast(`Transaction hash`, {
			description: tx,
		});

		checkTransactionStatus(tx);
	} catch (error: any) {
		toast(error.message);
	}
};

const checkTransactionStatus = async (txHash: string) => {
	const receipt = await window.ethereum?.request({
		method: "eth_getTransactionReceipt",
		params: [txHash],
	});

	if (receipt === null) {
		console.log("Transaction is pending or does not exist.");
		return;
	}

	if (receipt.status === 1) {
		console.log("Transaction was successful!");
	} else {
		console.log("Transaction failed.");
	}
};

export default sendTransaction;
