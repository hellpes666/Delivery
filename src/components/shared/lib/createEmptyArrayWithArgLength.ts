export const createEmptyArrayWithArgLength = <T>(arr: Array<T>) => {
	const length = arr.length;
	const ARR = Array.from({ length }, (_, index) => index);

	return ARR;
};
