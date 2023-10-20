console.log('house');
console.log('my' + ' ' + 'house'); //конкатенация
// alert('World');

document.getElementById('out').innerHTML = 'Hello';
document.getElementById('out').innerHTML = '2023';
document.getElementById('out').innerHTML = '<b>using tag b</b>';

document.querySelector('.header').innerHTML = 15;
document.querySelector('#one').innerHTML = 777; //с #
document.getElementById('one').innerHTML = 888; //без #

let a = document.querySelector('#one');

let c; //оголошуємо
c = document.querySelector('.header'); //присвоюємо

a.innerHTML = 9999; //змінна

//new - не можна використовувати!!!

c.innerHTML = 4444;