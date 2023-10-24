let temp = 14;
let unit = 'c';
// let f = 14;
// let c = 2;
// let k = 4;

if (unit == 'f') {
    let f = temp;
    let c = ((f - 32) * 5 / 9);
    let k = c + 273.15;

    console.log(f, k, c);
}

else if (unit == 'c') {
    let c = temp;
    let f = ((c * 9 / 5) + 32);
    let k = c + 273.15;

    console.log(f, k, c);
}
else {
    let k = temp;
    let c = k - 273.15;
    let f = ((c * 9 / 5) + 32);

    console.log(f, k, c);

}

