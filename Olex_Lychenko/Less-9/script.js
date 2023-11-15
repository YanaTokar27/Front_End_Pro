let but1 = document.querySelector('.out1');

function one() {
    console.log('task1');
}

// one();

but1.onclick = one;



function two(a) {
    return a;
}

let b = two(3);
console.log(b);

let but2 = document.querySelector('.out2').onclick = function () {
    console.log('Work');
}




function three(a, b) {
    return (a * b);
}

// let c = three(2, 3);
// console.log(c);

console.log(three(2, 7));



console.log('Яна'.length);

let r = 'Yana';

let y = "Yana";
let t = function () {
    console.log('Yana');
};

console.log(t);
console.log(t);

const n = function name() {
    console.log('Yana');
};

console.log(n);
console.log(name);



