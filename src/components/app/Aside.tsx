import { cn } from "@/lib/utils";
import { GiConcentrationOrb } from "react-icons/gi";
import Layout from "./Layout";
import { Link } from "react-router";

const Aside = () => {
	return (
		<Layout
			size="large"
			className={cn(
				"bg-[var(--foreground)] flex flex-col h-full",
				"px-6 min-w-[15dvw]"
			)}
		>
			<h2
				className={cn(
					"text-[var(--primary)] text-2xl font-bold flex items-center gap-2"
				)}
			>
				<GiConcentrationOrb size={32} />{" "}
				<span className="flex flex-col gap-0">
					hell{" "}
					<span className="text-[12px] font-normal tracking-wider">
						delivery
					</span>
				</span>
			</h2>

			<Link to=""></Link>
		</Layout>
	);
};

export default Aside;
