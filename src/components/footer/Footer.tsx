import { Droplet, MessageCircle, Github } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-blue-800 text-white py-8 mt-12">
			<div className="container mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0">
						<h3 className="text-xl font-bold flex items-center">
							<Droplet className="w-6 h-6 mr-2" />
							Pour Tokens
						</h3>
						<p className="mt-2 text-gray-400">
							Your go-to crypto test token provider
						</p>
					</div>
					<div className="flex space-x-6">
						<a
							href="https://t.me/pourtokens_support_bot"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-blue-400 transition-colors"
						>
							<MessageCircle className="w-6 h-6" />
							<span className="sr-only">Telegram support</span>
						</a>
						{/* <a
							href="https://twitter.com/pourtokens"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-blue-400 transition-colors"
						>
							<Twitter className="w-6 h-6" />
							<span className="sr-only">Twitter</span>
						</a> */}
						<a
							href="https://github.com/pourtokens"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-blue-400 transition-colors"
						>
							<Github className="w-6 h-6" />
							<span className="sr-only">GitHub</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
