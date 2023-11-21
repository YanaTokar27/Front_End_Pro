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

const task1 = document.querySelector('.task1');
task1.onclick = function () {
    this.classList.toggle('five');
}

const task2 = document.querySelector('.task2');
task2.setAttribute('data-task2', 7);