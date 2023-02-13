var array = [null, 1, 2, 3, 4, true, false, "test", undefined, "rest", "cost"];

var strings = [];
var numbers1 = [];
var undeclaredVariable = [];
var booleans = [];

array.forEach(
    val => {
        if (typeof val == "string") {
            strings.push(val);
        } else if (typeof val == "boolean") {
            booleans.push(val);
        } else if (typeof val == "number") {
            numbers1.push(val);
        } else if (typeof val == "undefined" || val == null) {
            undeclaredVariable.push(val);
        }
    }
)

console.log("strings: ", strings);
strings.sort()

console.log("numbers: ", numbers1);
numbers1.reverse()

console.log("undeclaredVariable: ", undeclaredVariable);
undeclaredVariable.reverse()

console.log("booleans: ", booleans);
booleans.sort()