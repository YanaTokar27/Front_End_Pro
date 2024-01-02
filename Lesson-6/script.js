const task1 = () => {
    let numbers = [1, 2, 3, 4, 5, 6];

    {
        console.log("Even numbers:");
        const evenNumbers = numbers.filter((num) => num % 2 === 0);
        console.log(evenNumbers);
    }

    console.log("Numbers:");
    for (let i = 0; i < numbers.length; i++) {
        console.log("Index:", i, "Value:", numbers[i]);
    }

    console.log("Odd numbers:");
    const isOdd = (num) => num % 2 === 1;
    let oddNumbers = numbers.filter(isOdd);
    console.log(oddNumbers);

    console.log("Even numbers");
    const isEven = (num) => num % 2 === 0;
    let evenNumbers = numbers.filter(isEven);
    console.log(evenNumbers);
};

const task2 = () => {
    console.log("=========================================");
    let user = {
        name: 'Катя',
        age: 42,
        isUser: true,
        'super User': 'Яна',
    }

    let a = user['super User'];


    for (let key in user) {           //ця конструкція заміняє рядки 42-52
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
};

const task3 = () => {
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
};

const task4 = () => {
    let user2 = {
        name: 'Олена',
        age: 35,
        isUser: true,
        'super User': 'Інна',
        sayHi: function () {
            console.log('Привіт', this.name, this.age);
        }
    }

    user2.sayHi();
};

const task5 = () => {
    let person = {
        name: 'Антон',
        friendsNames: [],
        // myName: function () {
        //     console.log('My name is', this.name);
        // },
        addFriendName: function (nameNew) {
            person.friendsNames.push(nameNew);
        },
        printFriendsNames: function () {
            console.log("У " + person.name + " є друзі:");
            console.log(person.friendsNames);
        }
    };

    person.printFriendsNames();
    person.addFriendName('Olga');
    person.printFriendsNames();
};

// task1();
// task2();
// task3();
// task4();
task5();


