

function f(n) {
    console.log('step n', n);
    if (n === 1) {
        console.log('return');
        return n;
    }

    let prevResult = f(n - 1);
    console.log('step n', n, 'prevResult', prevResult);

    return n * prevResult;
}


let result = f(3);

console.log('result', result);


function f(n) {
    let count = 1;
    let n = 3;

    for (i = 1; i > n; i++) {

    }


}

