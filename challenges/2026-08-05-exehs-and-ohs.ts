import { test } from "@/test.ts";

function XO(s: string): boolean {
	return (
		(s.match(new RegExp("x", "gi")) || []).length ===
		(s.match(new RegExp("o", "gi")) || []).length
	);
}

test(XO("xo"), true);
test(XO("Xo"), true);
test(XO("xxOo"), true);
test(XO("xxxm"), false);
test(XO("ooom"), false);
