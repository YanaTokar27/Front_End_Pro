let arr = ['1', '2', '3', '4', '5', '6'];

let arr2 = arr.filter((element) => {
    return element % 2 === 0;
})

console.log(arr2);

for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
}

let filterFun = (element) => {
    return element % 2 === 1;
}

let arr3 = arr.filter(filterFun);

console.log(arr3);

let filterFun2 = (element) => {
    return element % 2 === 0;
}

let arr4 = arr.filter(filterFun2);

console.log(arr4);

let user = {
    name: 'Катя',
    age: 42,
    isUser: true,
    'super User': 'Яна',
}

let a = user['super User'];


for (let key in user) {           //ця конструкція заміняє рядки 43-53
    console.log('property:', key, 'value:', user[key]);
}

// let propArray = Object.keys(user);
// console.log(propArray);

// propArray.forEach((element) => {
//     console.log(user[element]);
// })

// for (let i = 0; i < propArray.length; i++) {
//     let prop = propArray[i];
//     console.log(user[prop]);
// }


let user1 = {
    sayHi: function () {
        console.log('Hi!')
    },
    sayHello: () => {
        alert('Hello!')
    }
};

user1.sayHi();
user1.sayHello();


let user2 = {
    name: 'Олена',
    age: 35,
    isUser: true,
    'super User': 'Інна',
    sayHi: function () {
        console.log('Привіт', this.name);
    }
}

user2.sayHi();