/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element,
traveling clockwise.
array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]±
*/

import { test } from "@/test.ts";

type TDirection = "right" | "down" | "left" | "up";

function snail(a: number[][]): number[] {
	const snailOrder: number[] = [];
	let direction: TDirection = "right";
	const rows = a.length;
	const columns = a[0] ? a[0].length : 0;

	let remainingRows = rows;
	let remainingColumns = columns;

	let currentRow = 0;
	let currentColumn = 0;

	const aFlat: number[] = a.flat();

	const getIndex = () => currentRow * columns + currentColumn;

	let aFlatIndex = 0;

	while (aFlatIndex < aFlat.length) {
		if (direction === "right") {
			for (let i = 0; i < remainingColumns; i++) {
				snailOrder.push(aFlat[getIndex()]!);
				currentColumn++;
				aFlatIndex++;
			}
			remainingRows--;
			currentRow++;

			currentColumn--;

			direction = "down";
		} else if (direction === "down") {
			for (let i = 0; i < remainingRows; i++) {
				snailOrder.push(aFlat[getIndex()]!);
				currentRow++;
				aFlatIndex++;
			}
			remainingColumns--;
			currentColumn--;

			currentRow--;

			direction = "left";
		} else if (direction === "left") {
			for (let i = 0; i < remainingColumns; i++) {
				snailOrder.push(aFlat[getIndex()]!);
				currentColumn--;
				aFlatIndex++;
			}
			remainingRows--;
			currentRow--;

			currentColumn++;

			direction = "up";
		} else if (direction === "up") {
			for (let i = 0; i < remainingRows; i++) {
				snailOrder.push(aFlat[getIndex()]!);
				currentRow--;
				aFlatIndex++;
			}
			remainingColumns--;
			currentColumn++;

			currentRow++;

			direction = "right";
		}
	}
	snailOrder.push();

	return snailOrder;
}

test(
	snail([
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	]),
	[1, 2, 3, 6, 9, 8, 7, 4, 5],
);
test(
	snail([
		[1, 2],
		[3, 4],
	]),
	[1, 2, 4, 3],
);
test(snail([[1]]), [1]);
test(snail([[]]), []);
test(
	snail([
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12],
		[13, 14, 15, 16],
	]),
	[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10],
);
test(
	snail([
		[1, 2, 3, 4, 5, 6, 7, 8, 9],
		[10, 11, 12, 13, 14, 15, 16, 17, 18],
		[19, 20, 21, 22, 23, 24, 25, 26, 27],
		[28, 29, 30, 31, 32, 33, 34, 35, 36],
	]),
	[
		1, 2, 3, 4, 5, 6, 7, 8, 9, 18, 27, 36, 35, 34, 33, 32, 31, 30, 29, 28, 19, 10, 11, 12, 13,
		14, 15, 16, 17, 26, 25, 24, 23, 22, 21, 20,
	],
);
