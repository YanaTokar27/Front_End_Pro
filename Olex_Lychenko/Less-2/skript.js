let a = 6;
let b = 'name';

console.log(a);

let inputIn = document.querySelector('.input-in');
let button = document.querySelector('button');
let div = document.querySelector('.out');

button.onclick = function () {
    // виконується, коли кнопка буде натиснута
    console.log('Work');
    // console.log(inputIn.value); // те, що введене в input
    let b = +inputIn.value; //+ переводит в число!
    console.log(b + 10);
    // console.log(b * 2);
    // console.log(b / 2);
    // console.log(b / 0);

    div.innerHTML = b;
    inputIn.value = '';
};
