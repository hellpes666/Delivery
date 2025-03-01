import React, { useEffect, useState } from "react";
import { useDebounce } from "../shared/hooks/debounced";
import { Selector } from "../shared/ui";
import { formatDate } from "../shared/lib/formatDate";

const MaskedInput = () => {
	const [inputValue, setInputValue] = useState("");

	const debouncedValue = useDebounce(inputValue, 500);

	const formatTrackingNumber = (value) => {
		// Удаляем все небуквенно-цифровые символы
		const cleaned = value.replace(/[^\w]/g, "");

		// Добавляем дефисы через каждые 4 символа
		return cleaned.match(/.{1,4}/g)?.join("-") || "";
	};

	const handleChange = (e) => {
		const rawValue = e.target.value.replace(/-/g, "");
		const formatted = formatTrackingNumber(rawValue);
		setInputValue(formatted);
	};

	return (
		<input
			value={inputValue}
			onChange={handleChange}
			maxLength={19}
			placeholder="XXXX-XXXX-XXXX-XXXX, tracking number"
			id="tracking-number"
			data-slot="input"
			className="flex h-full w-fit rounded-2xl border border-input bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-foreground font-medium text-xl"
		/>
	);
};

const PageHeader = () => {
	const [city, setCity] = useState("Moscow");
	const [departament, setDepartaments] = useState("1");

	const DEPARTAMENTS = ["1", "2", "3", "4", "5"];
	const CITIES = ["Moscow", "Barcelona", "New York", "Tokyo"];

	const [currentDate, setCurrentDate] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentDate(new Date());
		}, 60000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="flex flex-col md:flex-row gap-4">
			<MaskedInput />

			<Selector
				options={CITIES}
				current={city}
				onChange={(e) => setCity(e.target.value)}
				label="City"
			/>
			<Selector
				options={DEPARTAMENTS}
				current={departament}
				onChange={(e) => setDepartaments(e.target.value)}
				label="Departament"
			/>

			<div className="rounded-2xl border border-input bg-transparent px-3 py-1 shadow-sm w-fit text-nowrap hover:border-ring font-bold text-[10px] flex items-center justify-center">
				{formatDate(currentDate, {
					weekday: "short",
					day: "2-digit",
					month: "short",
					hour: "2-digit",
					minute: "2-digit",
					hour12: false,
				})}
			</div>
		</div>
	);
};

export default PageHeader;
