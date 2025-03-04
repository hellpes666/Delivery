import React, { JSX } from "react";
import Icon from "./Icon";

interface IInfoRow {
	title: string;
	subtitle: string | JSX.Element;
	children: JSX.Element;
	icon?: JSX.Element;
}

const InfoRow: React.FC<IInfoRow> = ({ title, subtitle, children, icon }) => {
	return (
		<div className="flex justify-between py-2 pr-3 border-accent/70 border-b-2 ">
			<div className="flex gap-2 items-center">
				{icon && <Icon icon={icon} />}
				<div className="flex flex-col items-start">
					<h3 className="font-bold text-primary text-xl">{title}</h3>
					<p className="text-muted-foreground text-[14px]">
						{subtitle}
					</p>
				</div>
			</div>

			{children}
		</div>
	);
};

export default InfoRow;
