

function sum(a, b) {
    let c = a + b;

    if (c > 0) {
        console.log('dfdfd');
        return c;
    }


    console.log('TEST!!!!');
    return 100;
}


sum(2, 2);

let result = sum(3, 3);

console.log('result', result);



function sum(a, b = 2) {
    return a + b;
}

let res1 = sum(2);
console.log(res1);


function func1() {
    return function func2() {
        console.log('Function');
    }
}

let res = func1();
res();