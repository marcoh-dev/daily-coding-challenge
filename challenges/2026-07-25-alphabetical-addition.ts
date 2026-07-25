/*
https://www.codewars.com/kata/5d50e3914861a500121e1958
Your task is to add up letters to one letter.
The function will be given a variable amount of arguments, each one being a letter to add.
Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/

import { test } from "@/test.ts";

const letterToNumber = new Map();
const numberToLetter = new Map();

for (let i = 0; i < 26; i++) {
	const letter = String.fromCharCode(97 + i);
	const number = letter === "z" ? 0 : i + 1;

	letterToNumber.set(letter, number);
	numberToLetter.set(number, letter);
}

function addLetters(...letters: string[]): string {
	if (letters.length === 0) return "z";
	const numbers = letters.map((letter) => letterToNumber.get(letter));
	const sum = numbers.reduce((a, b) => a + b, 0);
	return numberToLetter.get(sum % 26);
}

test(addLetters("a", "b", "c"), "f");
test(addLetters("a", "b"), "c");
test(addLetters("z"), "z");
test(addLetters("z", "a"), "a");
test(addLetters(), "z");
