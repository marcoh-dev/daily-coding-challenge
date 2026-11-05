/*
Build Tower by the following given argument:
number of floors (integer and always greater than 0).
Tower block is represented as *
for example, a tower of 3 floors looks like below
[
  '  *  ',
  ' *** ',
  '*****'
]
and a tower of 6 floors looks like below
[
  '     *     ',
  '    ***    ',
  '   *****   ',
  '  *******  ',
  ' ********* ',
  '***********'
]
*/

import { test } from "@/test.ts";

function towerBuilder(floors: number): string[] {
	const tower: string[] = [];
	for (let i = 0; i < floors; i++) {
		const emptySpace = " ".repeat(floors - i - 1);
		tower.push(emptySpace + "*".repeat(i * 2 + 1) + emptySpace);
	}
	return tower;
}

test(towerBuilder(1), ["*"]);
test(towerBuilder(2), [" * ", "***"]);
test(towerBuilder(3), ["  *  ", " *** ", "*****"]);
test(towerBuilder(6), [
	"     *     ",
	"    ***    ",
	"   *****   ",
	"  *******  ",
	" ********* ",
	"***********",
]);
test(towerBuilder(4), ["   *   ", "  ***  ", " ***** ", "*******"]);
