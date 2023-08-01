import { tagTemplate } from './templates';

export function extractTagsFromLine(line: string): string[] | null {
	const extractedTags: string[] | null =
		line.match(tagTemplate)?.map((tag) => tag.slice(1)) ?? null;
	return extractedTags;
}

export function removeTagFromLine(line: string, tag: string): string {
	const pattern: RegExp = new RegExp(`#${tag}`, 'g');
	const clearedLine = line.replace(pattern, tag);
	return clearedLine;
}

export function getUniqueArrayValues<T>(array: T[]): T[] {
	const uniqueArray: T[] = array.filter((element, index, arr) => arr.indexOf(element) === index);
	return uniqueArray;
}
