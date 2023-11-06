

function log (element, index, array) {
    console.log('element', element, 'index', index, 'array', array);
}

function isDevidedBy10Function (element, index, array) {
    return element % 10 === 0;
}

let check = function (element, index, array) {
    return element % 10 === 0;
};


let numbers = [10, 20, 30, 45, 50];

numbers.forEach(log);

let isDevidedBy10_1 = numbers.every(check);
let isDevidedBy10_2 = numbers.every((element, index, array) => {
    return element % 10 === 0;
});
let isDevidedBy10_3 = numbers.every(isDevidedBy10Function);


let isDevidedBy10Some = numbers.some((element, index, array) => {
    return element % 10 === 0;
});


console.log('isDevidedBy10_1', isDevidedBy10_1);
console.log('isDevidedBy10Some', isDevidedBy10Some);



let filteredNumbers = numbers.filter((element) => {
    return element % 10 !== 0;
});


let findElement = numbers.find((element) => {
    return element === 45;
});


console.log('findElement', findElement);

console.log('filteredNumbers', filteredNumbers);
console.log(numbers);

