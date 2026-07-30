/*
In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter'
as key and count as 'value'.
*/

import { test } from "@/test.ts";

function letterCount(s: string): Record<string, number> {
	const countings: Record<string, number> = {};

	for (const letter of s) {
		const code = letter.charCodeAt(0);

		if (code >= 97 && code <= 122) {
			countings[letter] = (countings[letter] ?? 0) + 1;
		}
	}

	return countings;
}

test(letterCount("hello"), { h: 1, e: 1, l: 2, o: 1 });
test(letterCount("aZa3aAA2A"), { a: 3 });
test(letterCount(""), {});
test(letterCount("abcabc"), { a: 2, b: 2, c: 2 });
test(letterCount("xZZyz123"), { x: 1, y: 1, z: 1 });
