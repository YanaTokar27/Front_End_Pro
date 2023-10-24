let a = 7;
let b = 4;
let c = 5;

if (a <= b) {
    if (b <= c) {
        console.log(a, b, c);
    }
    else if (a <= c) {
        console.log(a, c, b);
    } else {
        console.log(a, c, b);
    }
}
else if (c <= b) {
    console.log(c, b, a);
}
else if (a <= c) {
    console.log(b, a, c);
}
else {
    console.log(b, c, a);
}
