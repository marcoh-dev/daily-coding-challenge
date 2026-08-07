import { test } from "@/test.ts";

/*
https://www.codewars.com/kata/582cb0224e56e068d800003c

Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.
*/

function litres(time: number): number {
	return Math.floor(time / 2);
}

test(litres(2), 1);
test(litres(1.4), 0);
test(litres(12.3), 6);
test(litres(0.82), 0);
test(litres(11.8), 5);
