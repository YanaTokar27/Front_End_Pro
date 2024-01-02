
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

let elementBySelector = elementByClass.querySelectorAll('.newClass');
console.log(elementBySelector);




// getElement();
// task2();
// task3();
// task4();
// task5();


