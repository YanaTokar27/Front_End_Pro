function task1() {
    let res = [];
    let curr = 1;
    while (res.length < 1000) {
        res.push(curr);
        curr++;
    }
    // for (let i = 0; i < 1000; i++) {
    //     res.push(i + 1);
    // }
    return res;
}
console.log(task1());


function task2() {
    let res = [];
    for (let i = 0; i <= 1000; i++) {
        if (i % 2 === 0 && i % 10 === 0) {
            res.push(i);
        }
    }
    return res;
}

console.log(task2());

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

console.log(task3());

function task4() {

    let student1Courses = ['Math', 'English', 'Programming'];
    let student2Courses = ['Geography', 'Spanish', 'Programming'];

    return student1Courses.filter((element1) => student2Courses.some((element2) => element1 == element2));
}

console.log(task4());