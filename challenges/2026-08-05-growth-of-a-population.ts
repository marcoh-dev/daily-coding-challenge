import { test } from "@/test.ts";

/* https://www.codewars.com/kata/563b662a59afc2b5120000c6 */

function nbYear(p0: number, percent: number, aug: number, p: number): number {
	let yearsPassed = 0;
	let currentPopulation: number = p0;
	while (currentPopulation < p) {
		currentPopulation += Math.floor(currentPopulation * (percent / 100) + aug);
		yearsPassed++;
	}
	return yearsPassed;
}

test(nbYear(1500, 5, 100, 5000), 15);
test(nbYear(1500000, 2.5, 10000, 2000000), 10);
test(nbYear(1000000, 0, 1000, 1001000), 1);
test(nbYear(1500, 5, 100, 1500), 0);
test(nbYear(100, 10, 0, 200), 8);
