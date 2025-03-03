import { SlOptions } from "react-icons/sl";
import { Link } from "react-router-dom";
import { IStatisticCard } from "../model/statisticCard";

const StatisticHeader: React.FC<Omit<IStatisticCard, "className">> = ({
	title,
	typeOfWidget,
	currentDate,
	link,
	options,
}) => {
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
				<SlOptions size={24} className="text-primary cursor-pointer" />
			) : (
				<Link className="text-primary font-medium" to={link as string}>
					Show all &gt;
				</Link>
			)}
		</header>
	);
};

export default StatisticHeader;
