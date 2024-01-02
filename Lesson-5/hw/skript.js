function task1() {
    let res = [];
    let curr = 1;
    while (res.length < 1000) {
        res.push(curr);
        curr++;
    }
    return res;
}
console.log('task1  ' + task1());


function task2() {
    let res = [];
    for (let i = 0; i <= 1000; i++) {
        if (i % 2 === 0 && i % 10 === 0) {
            res.push(i);
        }
    }
    return res;
}

console.log('task2  ' + task2());

function task3() {
    let res = [];
    const reversed = res.reverse();
    for (i = 1000; i >= 0; i--) {
        if (i % 2 !== 0 && i % 3 === 0 && i % 5 === 0) {
            res.push(i);
        }
    }
    return res;
}

console.log('task3  ' + task3());

function task4() {

    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];

    return student1Courses.filter((element1) => student2Courses.some((element2) => element1 == element2));
}

console.log('task4  ' + task4());



function task5() {

    let nameMan = ['Женя', 'Олег', 'Саша', 'Валерій'];
    let nameWoman = ['Ольга', 'Саша', 'Олена', 'Женя'];

    let match = nameMan.filter((element1) => nameWoman.some((element2) => element1 === element2));

    return match;

}

console.log('task5  ' + task5());

// var sign = prompt("What's your sign?");