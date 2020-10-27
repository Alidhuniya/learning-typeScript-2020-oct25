// any and unions
// any
//when moving js code to typescript you can use any
var anyType;
anyType = "ali"; // string
anyType = true; //boolean
anyType = 5; // number
console.log(anyType);
//unions
// unions give limited types options
var unionsType;
unionsType = "hello";
console.log(unionsType);
//but assignig numbers giver error
unionsType = 5; //error: let unionsType: string | boolean
//Type '5' is not assignable to type 'string | boolean'.
//generic types
