// You will receive a single string.
// This string is written in PascalCase format. Your task here is to split this string by every word in it.
// Print them joined by comma and space.

function pascalSplit(str) {
	console.log(str.split(/(?=[A-Z])/).join(", "))
}
pascalSplit('SplitMeIfYouCanHaHaYouCantOrYouCan')