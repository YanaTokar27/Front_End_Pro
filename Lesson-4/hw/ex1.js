// let temp = 14;
// let unit = 'c';

function tempConvert(temp, unit) {

    let f;
    let k;
    let c;

    if (unit == 'f') {
        f = temp;
        c = farToCel(f);
        k = celToKel(k);
    }
    else if (unit == 'c') {
        c = temp;
        f = celToFar(c);
        k = celToKel(c);
    }
    else {
        k = temp;
        c = farToCel(f);
        f = celToFar(c);
    }

    console.log(f, k, c);

}

function celToKel(c) {
    let k = c + 273.15;
    return k;
}

function farToCel(f) {
    let c = (f - 32) * 5 / 9;
    return c;
}

function celToFar(c) {
    f = (c * 9 / 5) + 32;
    return f;
}



tempConvert(14, 'c');
// tempConvert(14, 'f');


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


