import { test } from "@/test.ts";

function findNextSquare(n: number): number {
	// your code here
	const base: number = Math.ceil(Math.sqrt(n));
	if (Math.pow(base, 2) !== n) return -1;

	return Math.pow(base + 1, 2);
}

test(findNextSquare(121), 144);
test(findNextSquare(625), 676);
test(findNextSquare(114), -1);
test(findNextSquare(1), 4);
test(findNextSquare(9), 16);
