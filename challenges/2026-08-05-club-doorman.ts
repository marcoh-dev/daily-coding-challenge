// The Club Doorman will give you a word. To enter the Club you need to provide the right number according
// to provided the word.
// Every given word has a doubled letter, like 'tt' in lettuce.
// To answer the right number you need to find the doubled letter's position of the given word in the
// alphabet and multiply this number per 3.

import { test } from "@/test.ts";

function passTheDoorMan(s: string): number | undefined {
	const seen = new Set();
	let duplicate: string = "";

	for (const letter of s) {
		if (seen.has(letter)) {
			duplicate = letter;
			break;
		}
		seen.add(letter);
	}
	return (duplicate.charCodeAt(0) - "a".charCodeAt(0) + 1) * 3;
}

test(passTheDoorMan("lettuce"), 60);
test(passTheDoorMan("account"), 9);
test(passTheDoorMan("balloon"), 36);
test(passTheDoorMan("coffee"), 18);
test(passTheDoorMan("door"), 45);
