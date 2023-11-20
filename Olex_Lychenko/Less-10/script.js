for (i = 0; i < 6; i++) {
    console.log(i);
}

let k = 0;
while (k < 5) {
    k++;
    console.log('k: ' + k);
}

let sum = 0;
let p = 0;
while (p <= 3) {
    sum = sum + p;
    p++;
}
console.log('sum = ' + sum);



let out = document.querySelector('.out');
p = 0;
let outStr = '';
let flag = 3;

while (p < 4) {
    let p1 = 0;
    while (p1 < 4) {
        if (p1 < flag) {
            outStr += '0';
        }
        else {
            outStr += '*';
        }
        p1++;
    }
    flag--;
    outStr += '<br>';
    p++;
}

out.innerHTML = outStr;

//task hw

// let out2 = document.querySelector('.out2');
// let t = 0;
// let ots = '';

// while (t < 50) {
//     t++;
//     ots += t + '_';
// }

// out2.innerHTML = ots;



let out3 = document.querySelector('.out3').onclick =
    function () {
        let ots2 = '';
        for (t = 1; t <= 50; t++)
            ots2 += t + '_';
        console.log(ots2);
    }

//task2

let out4 = document.querySelector('.out4');
let m = 0;
let str = '';
while (m < 46) {
    m += 2;
    str += m + '_';
}

out4.innerHTML = str;

//task3

let out5 = document.querySelector('.out5');
// let h = 0;
let str1 = '';
let h = 25;
while (h >= 7) {

    str1 += h + '_';
    h--;
}

out5.innerHTML = str1;
