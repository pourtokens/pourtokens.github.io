import { Button } from "../ui/button";
import { Droplet } from "lucide-react";

interface CTAProps {
	tokenRef: React.RefObject<HTMLDivElement>;
}

const TokenCTA: React.FC<CTAProps> = ({ tokenRef }) => {
	return (
		<section className="bg-gradient-to-b from-blue-900 to-indigo-900 text-neutral-200 py-20 max-md:px-12">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
					Say Goodbye to Faucet Frustration
				</h2>

				<div className="max-w-3xl mx-auto space-y-6">
					<p className="text-lg text-gray-300">
						We've all been there &mdash; clicking endlessly on
						faucet buttons, waiting for timers to run out, and still
						receiving barely enough tokens to do anything
						meaningful.
					</p>

					<p className="text-lg text-gray-300">
						Pour Tokens was built to change all of that. Whether
						you're a developer, airdrop hunter, or just exploring
						blockchain, we've made it fast and simple for you to get
						what you need.
					</p>

					<p className="text-xl font-semibold text-center mt-8">
						Ready for your token pour? Let's go!
					</p>
				</div>

				<div className="mt-12 flex justify-center">
					<Button
						className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-neutral-200 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
						onClick={() => {
							if (tokenRef.current) {
								tokenRef.current.scrollIntoView({
									behavior: "smooth",
								});
							}
						}}
					>
						Start Pouring Now
						<Droplet className="ml-2 h-5 w-5" />
					</Button>
				</div>
			</div>
		</section>
	);
};

export default TokenCTA;
