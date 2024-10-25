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
		<nav className="bg-indigo-900 p-4 sticky top-0 z-10 bg-opacity-80 backdrop-blur-sm">
			<div className="container mx-auto flex justify-between items-center">
				<Link
					to="/"
					className="text-2xl font-bold text-neutral-200 flex items-center"
				>
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-400">
						Pour Tokens
					</span>
				</Link>

				{/* <div className="hidden md:flex space-x-8">
					<Link
						to="/tokens"
						className="text-neutral-200 hover:bg-gradient-to-l from-[#cc25b3] to-[#418dff] hover:text-transparent hover:bg-clip-text transition-colors"
					>
						Tokens
					</Link>
				</div> */}

				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							size="icon"
							className="md:hidden bg-transparent hover:bg-transparent hover:text-neutral-200"
						>
							<Menu className="h-6 w-6" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent
						align="end"
						className="bg-slate-800 text-neutral-200 text-2xl rounded-none border-none md:hidden min-w-60"
					>
						<DropdownMenuItem asChild>
							<Link to="/">Home</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link to="/token/holesky-eth">holeskyETH</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link to="/token/sepolia-eth">sepoliaETH</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link to="/token/bera">Bera</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link to="/token/lumia">Lumia</Link>
						</DropdownMenuItem>
						<DropdownMenuItem asChild>
							<Link to="/token/ip">IP</Link>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</nav>
	);
};

export default Navbar;
