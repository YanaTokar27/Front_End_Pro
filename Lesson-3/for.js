// for (let i = 0; i < 3; i++) {
//     if(i % 2 === 0) {
//         console.log('EVEN');
//     } else {
//         console.log('ODD');
//     }
// }



// for (let i = 0; i < 3; i++) {
//
//     for (let j = 0; j < 3; j++) {
//
//         for (let k = 0; k < 3; k++) {
//             console.log(`index i: ${i}, index jj: ${j}, index k: ${k}`);
//             // console.log('index i: ' + i + 'index j:' + j + 'index k:' + k);
//             // console.log('index i: ', i,  'index j:',  j, 'index k:', k);
//         }
//
//         console.log(`i: ${i}, j: ${j}`);
//     }
//     console.log(`i: ${i}`);
//
//
// }




// let name = 'Anton';
// let revertName = '';
//
// for(let i = name.length - 1; i >= 0; i--) {
//     revertName = revertName + name[i];
// }
//
// console.log(name);
// console.log(revertName);



for (let index1 = 0; index1 < 3; index1++) {
    console.log('index 1 ITERATION START', index1);

    for (let index2 = 0; index2 < 3; index2++) {
        console.log('index 2', index2);
    }

    console.log('index 1 ITERATION END', index1);
}





for(let a = 0; a < 1000; a++) {
    console.log('value: ', a);
    if (a % 2 === 0) {
        console.log('EVEN');
    } else {
        console.log('ODD');
    }

    if (a < 100) {
        if (a >= 10) {
           console.log('2');
        } else {
            console.log('1');
        }
    } else {
        console.log('3');
    }
}











// for (let k = 0; k < 3; k++) {
//     console.log(`i: ${i}, j: ${j}, k: ${k}`);
// }