import { test } from "@/test.ts";

function gooseFilter(birds: string[]): string[] {
	const geese: string[] = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
	// return an array containing all of the strings in the input array except those that match strings in geese
	return birds.filter((b) => !geese.includes(b));
}

test(
	gooseFilter([
		"Mallard",
		"Hook Bill",
		"African",
		"Crested",
		"Pilgrim",
		"Toulouse",
		"Blue Swedish",
	]),
	["Mallard", "Hook Bill", "Crested", "Blue Swedish"],
);
test(gooseFilter(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]), []);
test(gooseFilter(["Mallard", "Hook Bill"]), ["Mallard", "Hook Bill"]);
test(gooseFilter([]), []);
test(gooseFilter(["African", "Duck"]), ["Duck"]);
