

let person = {
    name: 'Anton',
    age: 32,
};


let newPerson = person;


console.log('BEFORE person', person);
console.log('BEFORE newPerson', newPerson);


person.name = 'IMA!!';

newPerson.age = 13;


console.log('AFTER person', person);
console.log('AFTER newPerson', newPerson);




let person1 = {
    name: 'Some',
};

let person2 = {
    name: 'Some2',
};

let person3 = {
    age: 13,
};


function change(a) {
    a.name = 'STRING!';
    return a;
}



let person4 = change(person1);
