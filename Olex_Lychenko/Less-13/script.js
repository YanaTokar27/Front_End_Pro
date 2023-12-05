
let a1 = [12, 55, 56];
let b1 = document.querySelector('.b-1');

b1.addEventListener('click', () => {
    console.log(a1[1]);
})


let a2 = ['my', 'her', 'him', 'hy'];
let b2 = document.querySelector('.b-2');

b2.addEventListener('click', () => {
    console.log(a2[3]);
})

let a3 = ['her', 'him', 'my', 'hy'];
let b3 = document.querySelector('.b-3');

b3.addEventListener('click', () => {
    console.log(a3[2]);
})