import React, { JSX } from "react";

interface IIcon {
	icon: JSX.Element;
}

const Icon: React.FC<IIcon> = ({ icon }) => {
	return (
		<div className="px-3 py-0.5 bg-input rounded-2xl flex items-center justify-center h-full">
			{icon}
		</div>
	);
};

export default Icon;
