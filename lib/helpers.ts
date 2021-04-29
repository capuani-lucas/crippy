// * Same length strings to avoid ugly indents
export function formatToLength(str: string, maxLength: number): string {
	// * String is too long
	if (str.length > maxLength) return str.substring(0, maxLength - 3) + "...";

	// * Fill in empty space
	return str + " ".repeat(maxLength - str.length);
}
