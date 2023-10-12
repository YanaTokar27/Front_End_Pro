let someVariable = Number('123');

console.log('someVariable', someVariable, typeof someVariable);



let someVariable2 = 123 > 100;

console.log('someVariable2', someVariable2, typeof someVariable2);



let a = '123';

let someVariable3 = a < 100;

console.log('someVariable3', someVariable3, typeof someVariable3);
console.log('a', a, typeof a);



let isStudent = true;
let age = 30;
let name = 'Anton';


let isValidUser = Boolean(isStudent) && name && age;

console.log('isValidUser', isValidUser);