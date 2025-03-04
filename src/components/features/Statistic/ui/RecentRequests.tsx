import { IRecentRequets } from "@/components/entities/truck/model/recentRequests";
import { createEmptyArrayWithArgLength } from "@/components/shared/lib/createEmptyArrayWithArgLength";
import { Icon, InfoRow } from "@/components/shared/ui";
import React, { useEffect, useState } from "react";
import { LuPackage } from "react-icons/lu";
import { v4 as uuid4 } from "uuid";

const RecentRequests: React.FC<IRecentRequets> = ({
	destination,
	request,
	requestDate,
}) => {
	const ARR = createEmptyArrayWithArgLength(destination);
	const [currentTime, setCurrentTime] = useState<Date>(new Date());

	const calculateTimeDifference = (requestDate: Date, currentTime: Date) => {
		const diffInMilliseconds =
			currentTime.getTime() - requestDate.getTime();
		const diffInMinutes = Math.floor(diffInMilliseconds / 60000);
		return diffInMinutes;
	};

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 60000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="overflow-auto">
			{ARR.map((i) => (
				<InfoRow
					key={uuid4()}
					title={request[i]}
					subtitle={
						<>
							{"Destination "}
							<strong>{destination[i]}</strong>
						</>
					}
					icon={
						<Icon
							icon={
								<LuPackage className="text-accent-foreground size-6" />
							}
						/>
					}
				>
					<span className="text-muted-foreground">
						{requestDate[i] &&
							calculateTimeDifference(
								requestDate[i],
								currentTime
							)}{" "}
						minutes ago
					</span>
				</InfoRow>
			))}
		</div>
	);
};

export default RecentRequests;
