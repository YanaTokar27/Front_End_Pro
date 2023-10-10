
let name = 'Anton';
let name2 = "Anton";
let name3 = `Anton`;

let superName = `Super ${name}`;
let notSuperName = 'Super ${name}';


console.log(superName);
console.log(notSuperName);



// Длинна строки
let someString = 'Anton';
let stringLength = someString.length;
console.log(stringLength);


/**
 *
 * Счет начинается с 0.
 * Да мы часто и во многих местах будем начинать считать с 0 :)
 */
let someOtherString = 'Hello';
let firstLetter = someOtherString[0];
console.log(firstLetter);

let lastLetter = someOtherString[someOtherString.length - 1];
console.log(lastLetter);



let str = 'Hi';

str[0] = 'h';
console.log(str);