/*You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The Latitude and Longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
Input
The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.
Output
⦁	The output should be an array of objects wrapped in JSON.stringify(). 
⦁	Latitude and Longitude must be parsed to numbers, and represented till the second digit after the decimal point!
 */

function townsToJSON(data) {
    let matrix = data.map((row) => row.trim().split("|").map((cell) => cell.trim()))
        .map((row) => row.filter((cell) => cell !== ""))

    let headers = matrix[0];
    let info = matrix.slice(1)

    let result = info.map((row) => {

        let obj = {}
        headers.forEach((header, index) => {
            let tryToParseNumber = Number(row[index])
            obj[header] = isNaN(tryToParseNumber) ? row[index] : Number(tryToParseNumber.toFixed(2));
        });

        return obj
    });
    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);