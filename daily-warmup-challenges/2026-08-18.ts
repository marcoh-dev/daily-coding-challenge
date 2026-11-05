/*
Given a string, remove any characters that are unique from the string.
Example:
input: "abccdefee"
output: "cceee"
*/

import { test } from "@/test.ts";

function onlyDuplicates(s: string): string {
	let result = [...s];
	const uniques = [...new Set(s)];

	for (const char of uniques) {
		if (result.filter((c) => c === char).length === 1) {
			result = result.filter((c) => c !== char);
		}
	}
	return result.join("");
}

test(onlyDuplicates("abccdefee"), "cceee");
test(onlyDuplicates("abcde"), "");
test(onlyDuplicates("aabbcc"), "aabbcc");
test(onlyDuplicates("hello"), "ll");
test(onlyDuplicates(""), "");
