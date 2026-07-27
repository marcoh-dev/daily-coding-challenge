// Given two words and a letter, return a single word that's a combination of both words,
// merged at the point where the given letter first appears in each word. The returned word
// should have the beginning of the first word and the ending of the second, with the dividing
// letter in the middle. You can assume both words will contain the dividing letter.
// StringMerge("hello", "world", "l")       ==>  "held"

import { test } from "@/test.ts";

function stringMerge(string1: string, string2: string, letter: string): string {
	const regex = new RegExp(`^(.*?)${letter}(.*)$`);
	return string1.match(regex)![1] + letter + string2.match(regex)![2];
}

test(stringMerge("person", "here", "e"), "pere");
test(stringMerge("apowiejfoiajsf", "iwahfeijouh", "j"), "apowiejouh");
test(stringMerge("abcdefxxxyzz", "abcxxxyyyxyzz", "x"), "abcdefxxxyyyxyzz");
test(stringMerge("12345654321", "123456789", "6"), "123456789");
test(stringMerge("JiOdIdA4", "oopopopoodddasdfdfsd", "d"), "JiOdddasdfdfsd");
test(stringMerge("incredible", "people", "e"), "increople");
