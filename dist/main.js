// Interface
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { label: "Size 10 Object" };
printLabel(myObj);
// ---cut---
var p1 = { x: 10, y: 20 };
console.log(p1.y);
p1.x = 5; // error!
// readonly vs const
