// DOM Manipulation with typescript
// form
var form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    document.write(type.value + ", " + tofrom.value + ", " + details.value + ", " + amount.valueAsNumber);
    // console.log(
    //   type.value, 
    //   tofrom.value, 
    //   details.value, 
    //   amount.valueAsNumber
    // );
});
