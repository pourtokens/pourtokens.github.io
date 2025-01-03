import { UserPlus, Clock, Waves } from "lucide-react";

const WhatWeOffer = () => {
	return (
		<>
			<section className="text-neutral-200 py-20 max-md:px-12">
				<div className="container mx-auto px-4 max-w-5xl">
					<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
						What We Offer
					</h2>

					<div className="space-y-16">
						<div className="flex flex-col md:flex-row items-center gap-8">
							<div className="md:w-1/4 flex justify-center">
								<UserPlus className="w-24 h-24 text-blue-400" />
							</div>

							<div className="md:w-3/4">
								<h3 className="text-2xl font-semibold mb-4">
									No Annoying Registrations
								</h3>

								<p className="text-lg text-gray-300">
									Who has time to create a dozen accounts just
									to get a few tokens? Not you! Just drop in
									your wallet address and get what you came
									for - no hassle, no wait!
								</p>
							</div>
						</div>

						<div className="flex flex-col md:flex-row-reverse items-center gap-8">
							<div className="md:w-1/4 flex justify-center">
								<Waves className="w-24 h-24 text-blue-400" />
							</div>

							<div className="md:w-3/4">
								<h3 className="text-2xl font-semibold mb-4">
									Tokens that Actually Pour
								</h3>

								<p className="text-lg text-gray-300">
									Unlike those other faucets that give you a
									few measly drops, we'll hit you with a
									proper pour of tokens, so you can get down
									to business right away.
								</p>
							</div>
						</div>

						<div className="flex flex-col md:flex-row items-center gap-8">
							<div className="md:w-1/4 flex justify-center">
								<Clock className="w-24 h-24 text-blue-400" />
							</div>

							<div className="md:w-3/4">
								<h3 className="text-2xl font-semibold mb-4">
									No Wait Times
								</h3>

								<p className="text-lg text-gray-300">
									Say goodbye to timers, cool-down periods,
									and endless clicking. Pour Tokens delivers
									immediately so you can focus on building and
									testing, not waiting.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="text-neutral-200 container mx-auto p-4 max-md:px-12">
				<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
					Why Pour Tokens?
				</h2>

				<div className="max-w-3xl mx-auto space-y-6">
					<p className="text-lg text-gray-300">
						Most faucet services are designed to make you jump
						through hoops just to get a minimal amount of tokens.
						Waiting for hours or even days just to access more
						tokens is frustrating, especially for developers and
						airdrop hunters who need tokens fast.
					</p>

					<p className="text-lg text-gray-300">
						At Pour Tokens, we believe in eliminating the obstacles
						between you and the testnet tokens you need to work
						efficiently. Our goal is to provide a smooth, seamless
						experience with no roadblocks.
					</p>
				</div>
			</section>
		</>
	);
};

export default WhatWeOffer;
