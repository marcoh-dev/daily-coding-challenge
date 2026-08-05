import { test } from "@/test.ts";

function highAndLow(str: string): string {
	const numbersArray = str.split(" ").map(Number);
	return Math.max(...numbersArray) + " " + Math.min(...numbersArray);
}

test(highAndLow("1 2 3 4 5"), "5 1");
test(highAndLow("1 2 -3 4 5"), "5 -3");
test(highAndLow("1 9 3 4 -5"), "9 -5");
test(highAndLow("8 3"), "8 3");
test(highAndLow("0"), "0 0");
