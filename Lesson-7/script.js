
// window.onload = function () {
//     let elementID = getElement();
//     console.log('ID mainDiv - ', elementID);
// }

const task1 = () => {
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
}

const task2 = () => {
    let block = document.getElementById('block');
    var text = block.textContent;

    block.textContent = 'Це змінений текст за допомогою JS';
}

const task3 = () => {
    let body = document.body;
    let div = document.createElement('div');

    body.appendChild(div);
    div.setAttribute('room', '123');
    let attrValue = div.getAttribute('room');

    div.style.backgroundColor = 'red';
    let bgColor = div.style.backgroundColor;



    console.log(bgColor);
    console.log(attrValue);
}

const task4 = () => {
    let body = document.body;
    let div = document.createElement('div');
    body.appendChild(div);
    return div;
}

const task5 = () => {
    let body = document.body;
    let newDocument = document.createElement('a');
    newDocument.textContent = 'Click Me';
    body.appendChild(newDocument);

    newDocument.addEventListener('click', () => {
        console.log('Super First Click');
    })

    newDocument.addEventListener('click', task4);
}

const task6 = () => {
    let body = document.body;
    let input = document.createElement('input');
    let button = document.createElement('button');
    let divData = document.createElement('div');
    button.textContent = 'Push';

    body.appendChild(input);
    body.appendChild(button);
    body.appendChild(divData);

    button.addEventListener('click', () => {
        let inputData = input.value;
        divData.textContent = inputData;

    })
}

const task7 = () => {
    let input = document.querySelector('input');
    let button = document.querySelector('button');
    let div = document.querySelector('.out');

    button.onclick = function () {
        // console.log(input.value);

        let inputData = input.value;
        div.innerHTML = inputData;
    }
}


// task1();
// task2();
// task3();
// task4();
// task5();
task6();
task7();
