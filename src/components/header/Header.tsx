import { useState } from "react";
import { Droplet, PlayCircle } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

const Header = () => {
	const [isVideoOpen, setIsVideoOpen] = useState(false);

	return (
		<section className="w-full min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white overflow-hidden">
			<div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center">
				<div className="lg:w-1/2 space-y-8">
					<h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
						Welcome to{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
							Pour Tokens
						</span>
					</h1>
					<p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
						The Faucet That Won't Make You Rage Quit
					</p>
					<p className="text-lg text-gray-300 max-w-2xl">
						Are you tired of endlessly waiting for tiny drops of
						testnet tokens from faucet sites?
					</p>
					<p className="text-lg text-gray-300 max-w-2xl">
						We hear you! At Pour Tokens, we’ve created the easiest
						way for you to get the testnet tokens you need without
						jumping through hoops. If you've ever turned into{" "}
						<Dialog
							open={isVideoOpen}
							onOpenChange={setIsVideoOpen}
						>
							<DialogTrigger asChild>
								<Button
									variant="link"
									className="text-white text-lg hover:text-purple-200 p-0"
								>
									this guy{" "}
									<PlayCircle
										className="inline-block ml-1"
										size={16}
									/>
								</Button>
							</DialogTrigger>
							<DialogContent className="max-w-lg sm:max-w-md">
								<div className="aspect-video">
									<iframe
										width="100%"
										height="100%"
										src="https://www.youtube.com/embed/cOpUe4qyi6s"
										title="Rage Quit Video"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</div>
							</DialogContent>
						</Dialog>{" "}
						we’ve got some good news for you.
					</p>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
							Get Your Tokens
							<Droplet className="ml-2 h-5 w-5" />
						</Button>
					</div>
				</div>
				<div className="lg:w-1/2 mt-12 lg:mt-0">
					<div className="relative">
						<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl"></div>
						<div className="absolute inset-0 flex items-center justify-between z-20">
							{/* TODO: Cloud here */}
						</div>
						<div className="relative z-10 animate-float">
							<svg
								id="visual"
								viewBox="0 0 600 600"
								width="600"
								height="600"
								xmlns="http://www.w3.org/2000/svg"
								version="1.1"
							>
								<g transform="translate(265.9610759393947 333.5622806108643)">
									<path
										d="M159.4 -172.6C196.2 -122.6 208.6 -61.3 201.8 -6.8C194.9 47.6 168.9 95.2 132.1 130.6C95.2 165.9 47.6 188.9 6.1 182.8C-35.4 176.7 -70.7 141.4 -95.7 106C-120.7 70.7 -135.4 35.4 -135.5 -0.1C-135.6 -35.6 -121.2 -71.2 -96.2 -121.2C-71.2 -171.2 -35.6 -235.6 12.8 -248.4C61.3 -261.3 122.6 -222.6 159.4 -172.6"
										fill="#2563eb"
									></path>
								</g>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Header;
