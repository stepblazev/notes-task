import { tagTemplate } from './templates';

export function extractTagsFromLine(line: string): string[] | null {
	const extractedTags: string[] | null =
		line.match(tagTemplate)?.map((tag) => tag.slice(1)) ?? null;
	return extractedTags;
}

export function removeTagFromLine(line: string, tag: string): string {
	const clearedLine = line.replace(`#${tag}`, tag);
	return clearedLine;
}
