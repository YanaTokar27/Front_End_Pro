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
console.log(one.getAttribute('data'));