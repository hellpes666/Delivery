import React from "react";

interface PlanInfoProps {
	title: string;
	planValue: number;
	dateValue: number;
}

const PlanInfo: React.FC<PlanInfoProps> = ({ title, planValue, dateValue }) => {
	return (
		<div className="flex flex-col gap-0.5 items-center xl:items-start text-center xl:text-start">
			<h4 className="text-muted/80 text-sm xl:text-md font-medium">
				{title}
			</h4>
			<p className="text-[12px] xl:text-lg font-bold text-primary">
				{dateValue}
				<span className="text-muted/80 font-medium">/{planValue}</span>
			</p>
		</div>
	);
};

export default PlanInfo;
