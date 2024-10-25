import { useState } from "react";
import { Droplet, PlayCircle } from "lucide-react";

import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import GalaxySVG from "../../assets/images/galaxy.svg";

interface HeaderProps {
	tokenRef: React.RefObject<HTMLDivElement>;
}

const Header: React.FC<HeaderProps> = ({ tokenRef }) => {
	const [isVideoOpen, setIsVideoOpen] = useState(false);

	return (
		<header className="min-h-dvh bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 text-white flex justify-center items-center overflow-hidden">
			<div className="container mx-auto px-10 py-20 flex flex-col lg:flex-row items-center justify-center gap-x-12">
				<div className="lg:w-1/2 space-y-8">
					<h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
							Pour Tokens
						</span>
					</h1>

					<p className="text-xl md:text-3xl text-gray-200 max-w-2xl">
						We provide up to 20X more testnet tokens than anywhere
						else, without frustration.
					</p>

					<p className="text-md md:text-lg text-gray-300 max-w-2xl">
						Tired of the wait, the hassle, and the endless clicking
						for just a trickle of testnet tokens? It's time for
						something better. At Pour Tokens, we've created a
						faster, more hassle-free way to get the tokens you need.
						Say goodbye to faucets that make you work for every
						drop, and say hello to a smoother experience.
					</p>

					<p className="text-md md:text-lg text-gray-300 max-w-2xl">
						If you've ever felt stuck in the endless loop of{" "}
						<Dialog
							open={isVideoOpen}
							onOpenChange={setIsVideoOpen}
						>
							<DialogTrigger asChild>
								<Button
									variant="link"
									className="text-white text-md md:text-lg hover:text-purple-200 h-0 py-3 px-0"
								>
									token faucets{" "}
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
						, we are here to break the cycle. Dive in and explore
						our site &mdash; your testnet tokens are just a click
						away.
					</p>

					<div className="flex flex-col sm:flex-row gap-4">
						<Button
							className="bg-gradient-to-r from-cyan-500 to-pink-500 hover:from-cyan-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
							onClick={() => {
								if (tokenRef.current) {
									tokenRef.current.scrollIntoView({
										behavior: "smooth",
									});
								}
							}}
						>
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
