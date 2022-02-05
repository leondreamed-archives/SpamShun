import fs from 'fs';
import { customAlphabet } from 'nanoid';
import wordListPath from 'word-list';

console.log(wordListPath);
const wordArray = fs.readFileSync(wordListPath, 'utf8').split('\n');
const genRawEmail = customAlphabet('bcdghjlmnpqrstvwyz', 5);

export function genEmailUsername(): string {
	const email = genRawEmail();
	if (wordArray.includes(email)) {
		return genEmailUsername();
	} else {
		return email;
	}
}

export const genEmail = () => `${genEmailUsername()}@leonzalion.com`;
