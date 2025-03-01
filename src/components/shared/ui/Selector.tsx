import { cn } from "@/lib/utils";

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
			<label htmlFor={`select-${label}`} className="sr-only">
				{label}:{" "}
				<span className="font-bold tracking-wide">{current}</span>
			</label>
			<select
				name={`select-${label}`}
				id={`select-${label}`}
				value={current}
				onChange={onChange}
				className={cn(
					"flex h-full w-full rounded-2xl border border-input bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm text-foreground font-medium text-xl",
					className
				)}
			>
				{options.map((option) => (
					<option
						className="text-primary font-medium tracking-wide "
						key={option}
						value={option}
					>
						{label} - {"   "}
						{option}
					</option>
				))}
			</select>
		</>
	);
};

export default Selector;
