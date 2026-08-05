import { test } from "@/test.ts";

function stairsIn20(s: number[][]): number {
	return s.flat(1).reduce((acc, curr) => acc + curr, 0) * 20;
}

test(
	stairsIn20([
		[1, 2],
		[3, 4],
	]),
	200,
);
test(stairsIn20([[1]]), 20);
test(
	stairsIn20([
		[2, 2],
		[2, 2],
	]),
	160,
);
test(stairsIn20([[5, 5]]), 200);
test(stairsIn20([[1, 1, 1]]), 60);
