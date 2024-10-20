import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<div className="min-h-dvh flex flex-col justify-center items-center gap-6 text-white">
			<Link to="/" className="font-bold">
				<h1 className="text-4xl font-bold">
					<span className="gradient">Pour Tokens</span>
				</h1>
			</Link>

			<p className="text-xl">Not Found</p>
		</div>
	);
};

export default NotFound;
