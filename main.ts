// Basic Types

// boolean
let isDone: boolean = false;
document.write(isDone);

// numbers

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

console.log(big);

// strings
let color: string = "blue";
color = "green";
console.log(color)

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}.

I'll be ${age + 1} years old next month.`;

console.log(sentence)

// array
let list: number[] = [1, 2, 2.5, 3];
console.log(list[2])
let list1: Array<number> = [1, 2, 3];
console.log(list1[1])

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

let x: [string, number];
x = ["hello", 10]; // OK
/// ---cut---
// OK
console.log(x[0].substring(2));

// console.log(x[1].substring(1)); // throw error
console.log(x[1];
console.log(x[0].substring(3));

// enum
enum Color {
    Red = 1,
    Green,
    Blue,
  }
  let colorName: string = Color[2];
  
  // Displays 'Green'
  console.log(colorName);

//   unknown
let notSure: unknown = 4;
notSure = "maybe a string instead";

// OK, definitely a boolean
notSure = true;

console.log(notSure)

// any

// void 
// void: don't return any value

function warnUser(): void {
    console.log("This is my warning message");
  }
warnUser();

// Null and Undefined
let u: undefined = undefined;
// let n: null = null;

console.log(u);
// console.log(n);

// never

// object

// Type assertions

// let someValue: unknown = "this is a string";

// let strLength: number = (someValue as string).length;

// console.log(strLength);
