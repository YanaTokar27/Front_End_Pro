

let users = [
    {name: 'Lena', age: 100},
    {name: 'Anton', age: 32},
    {name: 'Ivan', age: 23},
    {name: 'Lena', age: 18},
];

let users2 = [
    {name: 'Lena', age: 1000},
    {name: 'Anton', age: 302},
    {name: 'Ivan', age: 203},
    {name: 'Lena', age: 108},
];

users.forEach((element) => {
    console.log('name', element.name, 'age', element.age);
});



let name = 'Lena';

let findUser = users.find((element) => {
    return element.name === name;
});

let findUsers = users.filter((element) => {
    return element.age < 33;
});

let usersName = users.map((element) => {
    return element.name;
});

console.log('usersName', usersName);


console.log('findUsers', findUsers);


console.log('findUser', findUser);

console.log('users', users);


function findByName(name, users) {
    return users.find((element) => {
        return element.name === name;
    });
}

function findByAge(age, usersArray) {
    return usersArray.find((element) => {
        return element.name === age;
    });
}


function sum(a, b) {
    let c = 0;

    if(a < 5) {
        console.log('TOO MUCH!!');
    } else {
        c = a + b;
        console.log('c', c);
    }

    return c;
}


let result1 = sum(2, 2);
let result2 = sum(3, 3);
let result3 = sum(5, 5);