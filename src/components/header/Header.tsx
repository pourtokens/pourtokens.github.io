import { useState } from "react";
import { Droplet, PlayCircle } from "lucide-react";

import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import GalaxySVG from "../../assets/images/galaxy.svg";

const Header = () => {
	const [isVideoOpen, setIsVideoOpen] = useState(false);

	return (
		<header className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white flex justify-center">
			<div className="container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-center gap-x-12">
				<div className="lg:w-1/2 space-y-8">
					<h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
						<span className="gradient">Pour Tokens</span>
					</h1>

					<p className="text-xl md:text-2xl text-gray-300 max-w-2xl">
						The Faucet That Won't Make You Rage Quit!
					</p>

					<p className="text-lg text-gray-300 max-w-2xl">
						Are you tired of endlessly waiting for tiny drops of
						testnet tokens from faucet sites?
					</p>

					<p className="text-lg text-gray-300 max-w-2xl">
						We hear you! At Pour Tokens, we've created the easiest
						way for you to get the testnet tokens you need without
						jumping through hoops. If you've ever turned into{" "}
						<Dialog
							open={isVideoOpen}
							onOpenChange={setIsVideoOpen}
						>
							<DialogTrigger asChild>
								<Button
									variant="link"
									className="text-white text-lg hover:text-purple-200 h-0 p-0"
								>
									this guy{" "}
									<PlayCircle
										className="inline-block ml-1"
										size={16}
									/>
								</Button>
							</DialogTrigger>

							<DialogContent className="max-w-lg">
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

				<div className="lg:w-1/2 max-lg:hidden">
					<div className="flex justify-center ">
						<div className="z-10 w-4/5">
							<img
								src={GalaxySVG}
								alt="Galaxy spinning"
								className="spin"
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
