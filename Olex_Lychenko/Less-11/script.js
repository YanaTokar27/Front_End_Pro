const one = document.querySelector('.one');

// one.style.background = 'red';

//додати стиль по класу
one.classList.add('two', 'three');

//видалити стиль по класу
// one.classList.remove('three');

const toggle = document.querySelector('.toggle');

toggle.onclick = function () {
    this.classList.toggle('three');
}

//атрибути data
//getAttribute - прочитать дату
console.log(one.getAttribute('data'));
console.log(document.querySelector('link').getAttribute('href'));

//додавання нового атрибуту
one.setAttribute('data-num', 6);

//example with gas
let gas = document.querySelectorAll('.gas');
console.log("gas.length:", gas.length);

const calculateAmountOfGallons = function () {
    let gallons = document.querySelector('.gallons').value;
    let amont = this.getAttribute('value');
    console.log(gallons * amont);
}
// gas.forEach((g) => g.addEventListener('click', calculateAmountOfGallons));

for (i = 0; i < gas.length; i++) {
    gas[i].onclick = calculateAmountOfGallons;
}

//my example
let clothes = document.querySelectorAll('.clothes');
for (i = 0; i < clothes.length; i++) {
    clothes[i].onclick = function () {
        let wear = document.querySelector('.wear').value;
        let salary = this.getAttribute('data');
        console.log(wear * salary);
    }
}
//task-1
const task1 = document.querySelector('.task1');
task1.onclick = function () {
    this.classList.toggle('five');
}

//task-2
let task2 = document.createElement('button');
task2.innerHTML = 'Task2';
task2.addEventListener('click', () => {
    task2.classList.add('bg-orange');
});

document.querySelector('.test2').appendChild(task2);
console.log(task2);

//task-3
let a = document.createElement('button');
a.innerHTML = 'Task3';
a.addEventListener('click', () => {
    a.classList.add('createDiv');
})

document.querySelector('.test3').appendChild(a);
console.log(a);

//task-remove
let rem = document.querySelector('#task3');
let b = document.createElement('button');
b.innerHTML = 'Remove';
document.querySelector('#task3').appendChild(b);

b.addEventListener('click', () => {
    rem.classList.remove('test03');
})

