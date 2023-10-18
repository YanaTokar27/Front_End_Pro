// let a = 10;


// >= <= ==
// якщо написати = це буде означати,
// що ми хочемо присвоїти змінній нове значення
// != не равно

// if (a != 9) {
//     // true
//     console.log('Yes')
// }
// else {
//     console.log('else');
// }

const button = document.querySelector('button');
let input = document.querySelector('.age');

// () => стрілочна функція
button.onclick = () => {
    let num = +input.value;

    if (num >= 16 && num < 60) {
        console.log('Welcome');
    }
    else if (num > 60) {
        console.log('Ти точно сюди?');
    }
    else {
        console.log('Вхід заборонений');
    }

    switch (num) {
        case 15:
            console.log('Еще год потерпи!');
            break;

        case 16:
            console.log('Уже можно!');
            break;

        default:
            console.log('ooook');
    }
    input.value = '';
}

// let b = 3;
// console.log(b == 3 || b == 7);

// && - и
// || - или

// Task - 2

let key = document.querySelector('.key');
let field = document.querySelector('.data');

key.onclick = () => {
    let number = +field.value;

    if (number == 4) {
        console.log('True');
    }
    else {
        console.log('False');
    }
    field.value = '';
}

//Task - 3

// let b = 21;
// let c = 22;

// if (b > c) {
//     console.log('True');
// }
// else {
//     console.log('False');
// }


//Task - 4

let result = document.querySelector('.result');

result.onclick = () => {
    let first = +document.querySelector('.first').value;
    let second = +document.querySelector('.second').value;

    if (first > second) {
        console.log(first);
    }
    else {
        console.log(second);
    }
}



