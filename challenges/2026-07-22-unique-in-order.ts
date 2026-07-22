// Implement the function unique_in_order which takes as argument a sequence and returns a list of
// items without any elements with the same value next to each other and preserving the original order
// of elements.
// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

import { test } from "@/test.ts";

function uniqueInOrder(s: string | any[]): any[] {
	const items = typeof s === "string" ? s.split("") : s;
	let uniqueItems: any[] = [];

	items.forEach((item) => {
		if (uniqueItems.at(-1) !== item) {
			uniqueItems.push(item);
		}
	});
	return uniqueItems;
}

test(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"]);
test(uniqueInOrder("ABBCcAD"), ["A", "B", "C", "c", "A", "D"]);
test(uniqueInOrder([1, 2, 2, 3, 3]), [1, 2, 3]);
test(uniqueInOrder(""), []);
test(uniqueInOrder([1, 1, 1, 1]), [1]);
