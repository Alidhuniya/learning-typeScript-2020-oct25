// Basic Types
// boolean
var isDone = false;
document.write(isDone);
// numbers
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var big = 100, n;
console.log(big);
// strings
var color = "blue";
color = "green";
console.log(color);
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
// array
var list = [1, 2, 2.5, 3];
console.log(list[2]);
var list1 = [1, 2, 3];
console.log(list1[1]);
// tuple
/*

Tuple
Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number:

Declare a tuple type
let x: [string, number];
Initialize it
x = ["hello", 10]; // OK
Initialize it incorrectly
x = [10, "hello"]; // Error
Type 'number' is not assignable to type 'string'.
Type 'string' is not assignable to type 'number'

*/
var x;
x = ["hello", 10]; // OK
/// ---cut---
// OK
console.log(x[0].substring(2));
// console.log(x[1].substring(1)); // throw error
console.log(x[1]);
console.log(x[0].substring(3));
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
// Displays 'Green'
console.log(colorName);
//   unknown
var notSure = 4;
notSure = "maybe a string instead";
// OK, definitely a boolean
notSure = true;
console.log(notSure);
// any
// void 
// void: don't return any value
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
// Null and Undefined
var u = undefined;
// let n: null = null;
console.log(u);
// console.log(n);
// never
// object
// Type assertions
// let someValue: unknown = "this is a string";
// let strLength: number = (someValue as string).length;
// console.log(strLength);
