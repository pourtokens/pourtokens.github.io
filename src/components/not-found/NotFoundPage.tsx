import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const NotFoundPage = () => {
	return (
		<div className="flex flex-col justify-center items-center gap-6 text-neutral-200">
			<div className="mx-auto px-4 py-16 text-center">
				<h1 className="text-3xl font-bold mb-6">Not Found</h1>
				<p className="mb-6">
					Oops! The page you're looking for doesn't exist.
				</p>

				<Link to="/" className="font-bold">
					<Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
						Go to Home
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
