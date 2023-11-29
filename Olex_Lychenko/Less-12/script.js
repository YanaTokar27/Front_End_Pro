const a = [1, 2, 3, 4, 5, 6, 7, 8];
const b = ['a', 'f', 'g', 't'];

console.log(a.length);
//додаємо елементи у кінець масиву
console.log(a.push(12, 46, 54, 54, 24));
console.log(a);

b.push('o', 'u', 't', 'y', 'h', 'j', 'k');
console.log(b);

//просто видаляємо останній елемент
b.pop();

//видаляємо останній елемент і отримуємо значення, того, що видалили
console.log(b.pop());

console.log(b);


//видалити елемент всередині масиву - метод не впливає на довжину масиву!!!
delete a[3];
console.log(a);

// перше число при splice - показує після якого видаляти; друге число - скільки елементів
a.splice(3, 2, 'hi'); //видалити після 3 елементу наступні 2 елементи; моде замість їх ставити нові значення
console.log(a);

//метод splice не тільки видаляє, а ще й перераховує довжину масиву


let b1 = document.querySelector('.b1');
let d1 = [33, 'best', 66, 'best'];

function outValue() {
    let outPut = document.querySelector('.out');
    outPut.innerHTML = ' ' + d1;
    console.log(d1);
}

b1.addEventListener('click', () => {
    let i1 = document.querySelector('.i1').value;
    d1.push(i1);
    outValue();
})


let b2 = document.querySelector('.b2');
b2.addEventListener('click', () => {
    d1.pop();
    outValue();
})

let b3 = document.querySelector('.b3');
b3.addEventListener('click', () => {
    d1.shift();
    outValue();
})

//Рекурсія
let c = 0;
function f1() {
    c++;
    console.log(c);
    if (c === 15) return;
    f1();
}

f1();

function f2() {
    let out = '';
    for (i = 1; i <= 20; i++) {
        out += i + ' ';
    }
    console.log(out);
}

f2();

