let but = document.querySelector('.out');

function one() {
    console.log('task1');
}

// one();

but.onclick = one;



function two(a) {
    return a;
}

let b = two(3);
console.log(b);




function three(a, b) {
    return (a * b);
}

// let c = three(2, 3);
// console.log(c);

console.log(three(2, 7));
