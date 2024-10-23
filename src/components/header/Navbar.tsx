import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";

const Navbar = () => {
	return (
		<nav className="bg-blue-900 p-4 sticky top-0 z-10 bg-opacity-80 backdrop-blur-sm">
			<div className="container mx-auto flex justify-between items-center">
				<Link
					to="/"
					className="text-2xl font-bold text-white flex items-center"
				>
					<span className="gradient">Pour Tokens</span>
				</Link>

				{/* <div className="hidden md:flex space-x-8">
					<Link
						to="/tokens"
						className="text-white hover:bg-gradient-to-l from-[#cc25b3] to-[#418dff] hover:text-transparent hover:bg-clip-text transition-colors"
					>
						Tokens
					</Link>
				</div> */}

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							size="icon"
							className="md:hidden bg-transparent hover:bg-blue-800 hover:text-white outline-none"
						>
							<Menu className="h-6 w-6" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="bg-blue-600 rounded-none"
					>
						<DropdownMenuItem asChild>
							<Link to="/">Home</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link to="/bundles">Bundles</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link to="/lumia">Lumia</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link to="/bera">Bera</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	);
};

export default Navbar;
