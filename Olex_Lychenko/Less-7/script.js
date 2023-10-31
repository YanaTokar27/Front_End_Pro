document.querySelector('button').onclick = function () {
    let out = document.querySelector('#out');

    let num1 = +document.querySelector('#num-1').value;
    let num2 = +document.querySelector('#num-2').value;


    if (num1 > num2) {
        out.innerHTML = num1 + " - більше";
    }
    else if (num2 > num1) {
        out.innerHTML = num2 + " - більше";
    }
    else {
        out.innerHTML = 'рівні';
    }
}