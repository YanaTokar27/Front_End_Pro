// let temp = 14;
// let unit = 'c';

function tempConvert(temp, unit) {

    let f;
    let k;
    let c;

    if (unit == 'f') {
        f = temp;
        c = (f - 32) * 5 / 9;
        k = celToKel(k);
    }
    else if (unit == 'c') {
        c = temp;
        f = (c * 9 / 5) + 32;
        k = c + 273.15;
    }
    else {
        k = temp;
        c = k - 273.15;
        f = (c * 9 / 5) + 32;
    }

    console.log(f, k, c);

}

function celToKel(c) {
    let k = c + 273.15;
    return k;
}

tempConvert(14, 'c');


// function getTempConvertCelcium(temp, unit) {
//     let C;
//     let K;
//     let F;
//     if (unit === 'c') {
//         C = temp;
//         F = (C * 9 / 5) + 32;
//         K = C + 273.15;
//     }
//     console.log(F, C, K);

// }
// getTempConvertCelcium(1, 'c');

////////////////////////////////////////////////////////////////////////
function sum(n) {
    if (n === 1) {
        return n;
    }

    return n + sum(n - 1);
}

let result = sum(6);
console.log(result);


