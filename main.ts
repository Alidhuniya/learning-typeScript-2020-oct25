// Interface

// function printLabel(labeledObj: { label: string }) {
//   console.log(labeledObj.label);
// }

// let myObj = { label: "Size 10 Object" };
// printLabel(myObj);

// above example using interface

// interface LabeledValue {
//   label: string;
//   size: number;
// }

// function printLabel(labeledObj: LabeledValue) {
//   console.log(labeledObj.label, labeledObj.size);
// }

// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// optional ?
interface LabeledValue {
  label: string;
  size?: number;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { label: "Size 10 Object" };
printLabel(myObj);

/*

Readonly properties
Some properties should only be modifiable when an object is first created. You can specify this by putting readonly before the name of the property:

interface Point {
  readonly x: number;
  readonly y: number;
}Try
You can construct a Point by assigning an object literal. After the assignment, x and y can’t be changed.

let p1: Point = { x: 10, y: 20 };
p1.x = 5; // error!
Cannot assign to 'x' because it is a read-only property.

*/

interface Point {
  readonly x: number;
  readonly y: number;
}
// ---cut---
let p1: Point = { x: 10, y: 20 };
console.log(p1.y);
p1.x = 5; // error!

// readonly vs const
