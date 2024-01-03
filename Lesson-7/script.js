
// window.onload = function () {
//     let elementID = getElement();
//     console.log('ID mainDiv - ', elementID);
// }

let elementById = document.getElementById('some ID');
console.log('Name ID - ', elementById);

let divElement = elementById.getElementsByTagName('div')[0];
console.log('Name Tag - ', divElement);

let elementByClass = elementById.getElementsByClassName('second')[0];
console.log('Name Class - ', elementByClass);

let elementBySelector = elementByClass.querySelectorAll('.newClass')[0];
console.log('Selector name - ', elementBySelector);

let firstElementBySelector = elementBySelector.getElementsByTagName('div')[0];
console.log('First element on Selector - ', firstElementBySelector);

let createDivElement = document.createElement('div');
console.log('Створений дів - ', createDivElement);


let body = document.body;
body.append('Новий елемент');
body.appendChild(createDivElement);