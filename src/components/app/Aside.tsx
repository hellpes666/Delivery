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
import {
	CiDeliveryTruck,
	CiBoxes,
	CiFlag1,
	CiUser,
	CiLight,
	CiDark,
} from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { ROUTES_2 } from "./routes-2";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./store/slices/themeSlice";
import { RootState } from "./store/store";

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
			className=" justify-between p-4 hover:bg-[var(--primary)]/10  z-10 text-[var(--primary)] flex items-center gap-3 py-4 px-2 rounded-2xl focus:outline-2  shadow-xs
transition-[color,box-shadow]
disabled:pointer-events-none disabled:cursor-not-allowed
disabled:opacity-50 focus-visible:border-ring
focus-visible:ring-ring/50
focus-visible:ring-[3px]
aria-invalid:ring-destructive/20
dark:aria-invalid:ring-destructive/40
aria-invalid:border-destructive"
			aria-label={ariaLabel || `${title} page`}
			role="navigation"
		>
			<div className="flex items-center gap-3">
				<span className="text-xl text-[var(--primary)]">{icon}</span>
				<h2 className="text-[var(--secondary)] font-medium">{title}</h2>
			</div>

			{notification !== undefined && notification > 0 && (
				<div className="rounded-2xl font-medium px-3 py-1 bg-[var(--secondary)] text-[var(--secondary-foreground)] text-sm">
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
	const dispatch = useDispatch();
	const themeSelector = useSelector((state: RootState) => state.theme.theme);
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
				className="z-10 text-[var(--primary)] flex items-center gap-3 py-4 px-2 rounded-2xl focus:outline-2  shadow-xs
transition-[color,box-shadow]
disabled:pointer-events-none disabled:cursor-not-allowed
disabled:opacity-50 focus-visible:border-ring
focus-visible:ring-ring/50
focus-visible:ring-[3px]
aria-invalid:ring-destructive/20
dark:aria-invalid:ring-destructive/40
aria-invalid:border-destructive"
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
			<div className="text-sm text-[var(--muted-foreground)] py-4 flex items-center justify-between">
				© {new Date().getFullYear()} Hellpes
				<button
					className="cursor-pointer p-2 rounded-2xl border-1 border-[var(--primary)] hover:bg-[var(--primary)]/10 transition-colors focus:outline-1  "
					aria-label="Toggle theme"
					onClick={() => dispatch(setTheme())}
				>
					<div className="flex gap-2 text-xl">
						<CiLight
							className={`text-[var(--primary)] ${
								themeSelector === "light"
									? "opacity-100"
									: "opacity-50"
							}`}
						/>
						<CiDark
							className={`text-[var(--primary)] ${
								themeSelector === "light"
									? "opacity-50"
									: "opacity-100"
							}`}
						/>
					</div>
				</button>
			</div>
		</Layout>
	);
};

export default Aside;
