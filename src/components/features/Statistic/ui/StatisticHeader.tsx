import { SlOptions } from "react-icons/sl";
import { Link } from "react-router-dom";
import { IStatisticCard } from "../model/statisticCard";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { setOption } from "@/components/app/store/slices/planOptionSlice";
import { RootState } from "@/components/app/store/store";

const StatisticHeader: React.FC<Omit<IStatisticCard, "className">> = ({
	title,
	typeOfWidget,
	currentDate,
	link,
	options,
}) => {
	const [openPlanOptions, setOpenPlanOptions] = useState(false);
	const panelRef = useRef<HTMLDivElement | null>(null);
	const dispatch = useDispatch();
	const planOptionSelector = useSelector(
		(state: RootState) => state.planOption
	);
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				panelRef.current &&
				!panelRef.current.contains(event.target as Node)
			) {
				setOpenPlanOptions(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);
	return (
		<header className="flex justify-between items-end w-full">
			<h2 className="text-card font-bold tracking-wider text-2xl flex items-end gap-3">
				{title}
				{currentDate && (
					<p className="text-muted/80 font-normal tracking-wide text-sm flex items-center gap-3">
						{currentDate}
					</p>
				)}
			</h2>

			{typeOfWidget === "Daily plan" ? (
				<div className="relative flex flex-col gap-2">
					<SlOptions
						size={24}
						onClick={(e) => {
							e.stopPropagation();
							setOpenPlanOptions((prev) => !prev);
						}}
						className="text-primary cursor-pointer"
					/>
					<div
						ref={panelRef}
						className={cn(
							"absolute bg-card w-[150px] h-[150px] top-8 right-0 rounded-2xl transition-all duration-300 ease-in-out flex flex-col justify-between items-center p-4",
							openPlanOptions
								? "opacity-100 transform translate-x-0  "
								: "opacity-0 transform translate-x-4"
						)}
					>
						{options?.map((option, index) => (
							<h4
								key={index}
								className={cn(
									"text-sm font-medium text-card-foreground tracking-wider transition-all duration-300 ease-in-out px-2 text-center mt-2 border-1 rounded-2xl w-full",
									openPlanOptions
										? "opacity-100 transform translate-x-0"
										: "opacity-0 transform translate-x-4",
									planOptionSelector.option === option
										? " border-primary "
										: ""
								)}
								onClick={() => dispatch(setOption(option))}
							>
								{option}
							</h4>
						))}
					</div>
				</div>
			) : (
				<Link className="text-primary font-medium" to={link as string}>
					Show all &gt;
				</Link>
			)}
		</header>
	);
};

export default StatisticHeader;
