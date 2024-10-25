import { Link } from "react-router-dom";
import { Send } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-indigo-900 text-neutral-200 py-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<Link to={"/"} className="flex items-center">
							<h2 className="text-2xl font-bold">Pour Tokens</h2>
						</Link>

						<p className="text-gray-300">
							The faucet that keeps on pouring
						</p>
					</div>

					<div className="flex items-center">
						<p className="mr-4">Need help?</p>

						<a
							href="https://t.me/pourtokens_help_bot"
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-neutral-200 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out"
						>
							Contact Support
							<Send className="ml-2 h-5 w-5" />
						</a>
					</div>
				</div>

				<div className="mt-8 text-center text-gray-400">
					<p>&copy; 2024 Pour Tokens. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
