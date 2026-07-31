// Your task is to write function findSum.
// Upto and including n, this function will return the sum of all multiples of 3 and 5.

import { test } from "@/test.ts";

function findSum(n: number): number {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i % 3 === 0 || i % 5 === 0 ? i : 0;
	}

	return sum;
}

test(findSum(10), 33);
test(findSum(0), 0);
test(findSum(3), 3);
test(findSum(5), 8);
test(findSum(15), 60);
