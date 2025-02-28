import { cn } from "@/lib/utils";
import { GiConcentrationOrb } from "react-icons/gi";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import { JSX, ReactNode } from "react";
import {
	IoIosInformationCircleOutline,
	IoMdNotificationsOutline,
} from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { CiDeliveryTruck, CiBoxes, CiFlag1, CiUser } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { ROUTES_2 } from "./routes";
import { TbArrowWaveRightUp } from "react-icons/tb";
interface IPageLink {
	icon: ReactNode;
	title: string;
	notification?: number;
	link: string;
	ariaLabel?: string;
}

const PageLink: React.FC<IPageLink> = ({
	icon,
	title,
	notification,
	link,
	ariaLabel,
}) => {
	return (
		<Link
			to={link}
			className="flex justify-between items-center p-4 hover:bg-[var(--primary)]/10 rounded-2xl transition-colors focus:outline-2 focus:outline-offset-2 focus:outline-[var(--primary)]/80 active:bg-[var(--primary)]/60"
			aria-label={ariaLabel || `${title} page`}
			role="navigation"
		>
			<div className="flex items-center gap-3">
				<span className="text-xl text-[var(--primary)]">{icon}</span>
				<h2 className="text-[var(--primary-foreground)] font-medium">
					{title}
				</h2>
			</div>

			{notification !== undefined && notification > 0 && (
				<div className="rounded-2xl font-medium px-3 py-1 bg-[var(--primary-foreground)] text-[var(--primary)] text-sm">
					{Math.min(notification, 99)}
				</div>
			)}
		</Link>
	);
};

const Separator = () => (
	<hr className="my-5 border-[var(--primary)] rounded-full border opacity-20" />
);

const getFirstIcon = (index: number): JSX.Element | null => {
	switch (index) {
		case 0:
			return <IoIosInformationCircleOutline />;
		case 1:
			return <IoMdNotificationsOutline />;
		default:
			return null;
	}
};

const getSecondIcon = (index: number): JSX.Element | null => {
	switch (index) {
		case 0:
			return <LuLayoutDashboard />;
		case 1:
			return <CiDeliveryTruck />;
		case 2:
			return <CiBoxes />;
		case 3:
			return <CiFlag1 />;
		case 4:
			return <CiUser />;
		default:
			return null;
	}
};

const CreateShipment = () => {
	return (
		<button
			className="group
    focus:outline-2 focus:outline-offset-2 focus:outline-[var(--primary)]/80 
    px-8 py-4 rounded-2xl bg-[var(--primary)] 
    cursor-pointer text-[var(--primary-foreground)] 
    text-lg font-medium tracking-wide flex items-center justify-center 
    transition-all duration-300 "
		>
			<FaPlus className="transition-transform duration-1000 group-hover:rotate-180 mr-1" />
			<p className="transition-all duration-800 group-hover:translate-x-4">
				Create Shipment
			</p>
		</button>
	);
};

const Aside = () => {
	const firstPartLinks = ROUTES_2.slice(1, 3);
	const secondPartLinks = ROUTES_2.slice(3);

	return (
		<Layout
			size="large"
			className={cn(
				"bg-[var(--foreground)] flex flex-col h-full",
				"px-6 w-[30%] md:min-w-[320px]"
			)}
		>
			<Link
				to="/"
				role="navigation"
				aria-label="Main Page"
				className="z-10 text-[var(--primary)] flex items-center gap-3 py-4 c px-2 c"
			>
				<GiConcentrationOrb size={32} className="shrink-0" />
				<div className="flex flex-col">
					<span className="text-xl font-bold">Hellpes</span>
					<span className="text-xs font-medium text-[var(--muted-foreground)]">
						Logistics Platform
					</span>
				</div>
			</Link>

			<Separator />

			<nav className="flex-1 flex flex-col gap-1">
				<div className="flex flex-col gap-1">
					{firstPartLinks.map((link, index) => (
						<PageLink
							key={link.path}
							icon={getFirstIcon(index)}
							title={link.title}
							link={link.path}
							notification={index === 1 ? 10 : undefined}
							ariaLabel={`Navigate to ${link.title}`}
						/>
					))}
				</div>

				<Separator />

				<div className="flex flex-col gap-1">
					{secondPartLinks.map((link, index) => (
						<PageLink
							key={link.path}
							icon={getSecondIcon(index)}
							title={link.title}
							link={link.path}
							ariaLabel={`Navigate to ${link.title}`}
						/>
					))}
				</div>
			</nav>

			<CreateShipment />
			<Separator />
			<div className="text-sm text-[var(--muted-foreground)] py-4">
				© {new Date().getFullYear()} Hellpes
			</div>
		</Layout>
	);
};

export default Aside;
