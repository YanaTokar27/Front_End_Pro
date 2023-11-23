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

let gas = document.querySelectorAll('.gas');
console.log("gas.length:", gas.length);

let gallons = document.querySelector('.gallons').value;
const calculateAmountOfGallons = function () {
    let amont = this.getAttribute('data');
    console.log(gallons * amont);
}
// gas.forEach((g) => g.addEventListener('click', calculateAmountOfGallons));
for (i = 0; i < gas.length; i++) {
    gas[i].onclick = calculateAmountOfGallons;
}

let clothes = document.querySelectorAll('.clothes');
for (i = 0; i < clothes.length; i++) {
    clothes[i].onclick = function () {
        let wear = document.querySelector('.wear').value;
        let salary = this.getAttribute('data');
        console.log(wear * salary);
    }
}

const task1 = document.querySelector('.task1');
task1.onclick = function () {
    this.classList.toggle('five');
}

let task2 = document.createElement('button');
task2.innerHTML = 'Push';
task2.classList.add('orange');
task2.addEventListener('click', () => {
    task2.classList.add('bg-orange');
});

document.querySelector('.test').appendChild(task2);
console.log(task2);

let a = document.createElement('div');
a.innerHTML = 'Hello!';
a.classList.add('createDiv');

document.querySelector('.test').appendChild(a);

console.log(a);

// task2.setAttribute('data-task2', 7);

