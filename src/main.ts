// DOM Manipulation with typescript

// form

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  document.write(`${type.value}, ${tofrom.value}, ${details.value}, ${amount.valueAsNumber}`);
 

  // console.log(
  //   type.value, 
  //   tofrom.value, 
  //   details.value, 
  //   amount.valueAsNumber
  // );
});
