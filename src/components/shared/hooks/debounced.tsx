import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number) => {
	const [debouncedValue, setDebouncedValue] = useState("");

	useEffect(() => {
		setTimeout(() => {
			setDebouncedValue(value);
		}, delay);
	}, [delay, value]);

	return debouncedValue;
};
