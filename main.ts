// Interface

// function printLabel(labeledObj: { label: string }) {
//   console.log(labeledObj.label);
// }

// let myObj = { label: "Size 10 Object" };
// printLabel(myObj);

// above example using interface

interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
