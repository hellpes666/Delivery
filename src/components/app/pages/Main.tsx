import { CARDS, HUGE_CARDS } from "@/components/shared/constants/cards";
import { PageLayout } from "..";

import InfoCard from "@/components/widgets/InfoCard/ui/InfoCard";

import StatisticCard from "@/components/widgets/Statistic/ui/StatisticCards";
import { v4 as uuidv4 } from "uuid";

function Main() {
	return (
		<PageLayout className="pb-0">
			<h1 className="text-primary text-2xl font-medium tracking-wide h-full ">
				Overview
			</h1>
			<div className="space-y-4 h-full">
				<section className="flex overflow-x-auto pb-2 scrollbar-hide gap-4">
					{CARDS.map((card) => (
						<div key={uuidv4()} className="min-w-[150px] flex-1">
							<InfoCard {...card} className="shadow-xl h-full" />
						</div>
					))}
				</section>

				<section className="grid grid-cols-2 gap-4">
					{HUGE_CARDS.map((props) => (
						<StatisticCard key={uuidv4()} {...props} />
					))}
				</section>
			</div>
		</PageLayout>
	);
}

export default Main;

/*

weekday: "short",
			day: "2-digit",
			month: "short",
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,*/
