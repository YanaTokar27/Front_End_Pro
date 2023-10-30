

let div = document.querySelectorAll('.one');
console.log(div);
// div.style.background = 'red';

for (let i = 0; i < div.length; i = i + 1) {
    console.log(div[i]);
    div[i].style.background = 'green';
    div[i].onclick = two;
}

function two() {
    console.log('work!');
}

let b = document.getElementsByClassName('one');
let c = document.getElementsByClassName('div');
console.log(b);
console.log(c);


for (let i = 0; i < b.length; i++) {
    b[i].style.border = '3px solid black';
}

// for (let i = 0; i < 5; i++) {
//     if (i == 4) break;
//     console.log(i);
// }

document.querySelector('button').onclick = () => {
    let rad = document.querySelectorAll('input[type="radio"]');
    console.log(rad);

    for (let i = 0; i < rad.length; i++) {
        if (rad[i].checked) {
            console.log(rad[i].value);
        }
    }
}


let out = '';

// for (i = 0; i <= 16; i++) {

//     out += i + '_';
// }
// document.querySelector('#out').innerHTML = out;



// for (i = 12; i <= 38; i = i + 2) {
//     // console.log(i);
//     out += i + '_';
// }
// document.querySelector('#out2').innerHTML = out;


for (i = 25; i >= 7; i--) {
    out += i + "_";
}
document.querySelector('#out3').innerHTML = out;