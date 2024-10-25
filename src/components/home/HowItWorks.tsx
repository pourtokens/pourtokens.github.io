import { Check, Forward, Network, Package, Wallet } from "lucide-react";
import steps from "./steps.json";

interface Step {
	icon: keyof typeof iconMap;
	text: string;
}

const iconMap = {
	Package,
	Wallet,
	Network,
	Forward,
	Check,
};

const HowItWorks = () => {
	const stepsTyped = steps as Step[];

	return (
		<section className="text-neutral-200 py-20 mt-12 max-md:px-12">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					How It Works
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
					{stepsTyped.map((step, index) => {
						const IconComponent = iconMap[step.icon];

						return (
							<div
								key={index}
								className="flex flex-col items-center text-center"
							>
								<div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
									<IconComponent className="w-8 h-8 text-neutral-200" />
								</div>

								<p className="text-lg font-semibold">
									{index + 1}. {step.text}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
