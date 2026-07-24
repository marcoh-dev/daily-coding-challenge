/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

import { test } from "@/test.ts";

function duplicateCount(text: string): number {
	let duplicateCharacterCount: number = 0;
	const uniqueCharacters = [...new Set(text.toLowerCase())];
	uniqueCharacters.forEach((char) => {
		if ([...text.toLowerCase()].filter((c) => char === c).length >= 2) {
			duplicateCharacterCount++;
		}
	});
	return duplicateCharacterCount;
}

test(duplicateCount("abcde"), 0);
test(duplicateCount("aabbcde"), 2);
test(duplicateCount("aabBcde"), 2);
test(duplicateCount("indivisibility"), 1);
test(duplicateCount("ABBA"), 2);
