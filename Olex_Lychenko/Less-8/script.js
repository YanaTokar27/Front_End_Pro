let out = document.querySelector('.out');
console.log(out);

// for (let i = 0; i < 3; i++) {

//     for (let k = 0; k < 3; k++) {

//         out.innerHTML += '*';
//     }
//     out.innerHTML += '_';
// }

// for (let i = 1; i < 4; i++) {

//     out.innerHTML += i + '<br>';

//     for (k = 0; k < 3; k++) {
//         out.innerHTML += '*_';
//     }
//     out.innerHTML += '<br>';
// }

// for (i = 0; i < 4; i++) {

//     for (k = 0; k < 3; k++) {
//         out.innerHTML += '*_';
//     }
//     out.innerHTML += '<br>';
// }

for (i = 1; i < 10; i++) {
    // out.innerHTML += '3*' + i + '=' + (i * 3) + '<br>';

    for (k = 1; k < 10; k++) {
        // out.innerHTML += i + ' * ' + k + ' = ' + k * i + '<br>';
        out.innerHTML += `${i} * ${k} = ${k * i}<br>`;
    }
    out.innerHTML += '<hr>';
}
