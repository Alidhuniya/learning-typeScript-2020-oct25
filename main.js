// Functions
// Named function
function add(x, y) {
    return x + y;
}
// Anonymous function
var myAdd = function (x, y) {
    return x + y;
};
//e.g
var z = 100;
function addToZ(x, y) {
    return x + y + z;
}
console.log(addToZ(200, 100));
// optional and default parameters
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
var result1 = buildName("Bob"); // error, too few parameters
Expected;
2;
arguments, but;
got;
1.;
var result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
Expected;
2;
arguments, but;
got;
3.;
var result3 = buildName("Bob", "Adams"); // ah, just righ
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // works correctly now
var result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
Expected;
1 - 2;
arguments, but;
got;
3.;
var result3 = buildName("Bob", "Adams"); // ah, just right
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result1 = buildName("Bob"); // works correctly now, returns "Bob Smith"
var result2 = buildName("Bob", undefined); // still works, also returns "Bob Smith"
var result3 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
Expected;
1 - 2;
arguments, but;
got;
3.;
var result4 = buildName("Bob", "Adams"); // ah, just right
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = "Will"; }
    return firstName + " " + lastName;
}
var result1 = buildName("Bob"); // error, too few parameters
Expected;
2;
arguments, but;
got;
1.;
var result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
Expected;
2;
arguments, but;
got;
3.;
var result3 = buildName("Bob", "Adams"); // okay and returns "Bob Adams"
var result4 = buildName(undefined, "Adams"); // okay and returns "Will Adams"
// rest parameters
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
// employeeName will be "Joseph Samuel Lucas MacKinzie"
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie", "Ali");
console.log(employeeName);
