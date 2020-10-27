// Functions
// Named function
function add(x, y) {
  return x + y;
}

// Anonymous function
let myAdd = function (x, y) {
  return x + y;
};

//e.g
let z: number = 100;

function addToZ(x: number, y: number) {
  return x + y + z;
}
console.log(addToZ(200, 100));


// optional and default parameters
function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob"); // error, too few parameters
Expected 2 arguments, but got 1.
let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
Expected 2 arguments, but got 3.
let result3 = buildName("Bob", "Adams"); // ah, just righ


function buildName(firstName: string, lastName?: string) {
  if (lastName) return firstName + " " + lastName;
  else return firstName;
}

let result1 = buildName("Bob"); // works correctly now
let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
Expected 1-2 arguments, but got 3.
let result3 = buildName("Bob", "Adams"); // ah, just right


function buildName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob"); // works correctly now, returns "Bob Smith"
let result2 = buildName("Bob", undefined); // still works, also returns "Bob Smith"
let result3 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
Expected 1-2 arguments, but got 3.
let result4 = buildName("Bob", "Adams"); // ah, just right

function buildName(firstName = "Will", lastName: string) {
  return firstName + " " + lastName;
}

let result1 = buildName("Bob"); // error, too few parameters
Expected 2 arguments, but got 1.
let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
Expected 2 arguments, but got 3.
let result3 = buildName("Bob", "Adams"); // okay and returns "Bob Adams"
let result4 = buildName(undefined, "Adams"); // okay and returns "Will Adams"


// rest parameters
function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}

// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie", "Ali");

console.log(employeeName);