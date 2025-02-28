import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface ISelector {
	options: string[];
	current: string;
	onChange: (e) => void;
	label: string;
	className?: string;
}

const Selector: React.FC<ISelector> = ({
	options,
	current,
	onChange,
	label,
	className,
}) => {
	return (
		<>
			<label htmlFor="select-city" className="sr-only">
				{label}:{" "}
				<span className="font-bold tracking-wide">{current}</span>
			</label>
			<select
				name={`select-${label}`}
				id={`select-${label}`}
				value={current}
				onChange={onChange}
				className={cn(
					"file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex w- min-w-0 bg-transparent px-3 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-2xl text-[var(--foreground)] font-medium border-[var(--foreground)]/80 border-2 w-[180px]",
					className
				)}
			>
				{options.map((option) => (
					<option key={option} value={option}>
						{option}
					</option>
				))}
			</select>
		</>
	);
};

const PageHeader = () => {
	const [city, setCity] = useState("Barcelona");
	const [departament, setDepartaments] = useState("1");

	const DEPARTAMENTS = ["1", "2", "3", "4", "5"];
	const CITIES = ["Barcelona", "Moscow", "New York", "Tokyo"];

	return (
		<div className="flex gap-4">
			<label htmlFor="tracking-number" className="sr-only">
				Search by tracking number
			</label>
			<input
				id="tracking-number"
				data-slot="input"
				placeholder="Search by tracking number"
				className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 bg-transparent px-3 shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive rounded-2xl text-[var(--foreground)] font-medium border-[var(--foreground)]/80 border-2 !py-6 text-sm md:text-base lg:text-lg xl:text-xl"
			/>

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
				label="Deparrtament"
				className="w-[90px]"
			/>
		</div>
	);
};

export default PageHeader;
