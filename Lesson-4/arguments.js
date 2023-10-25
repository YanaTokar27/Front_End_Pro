

let name = 'Anton';
let name2 = 'pppp';


function changeName(name1) {
    console.log('FUNCTION BEFORE', name1);

    name1 = 'TEST!!!!';

    console.log('FUNCTION AFTER', name1);

    return name1;
}




console.log('BEFORE', name);

let newName = changeName(name);
let newName2 = changeName(name2);

console.log('AFTER', name);
console.log('AFTER 2', newName);

console.log('AFTER 3', name2);
console.log('AFTER 3', newName2);



// BEFORE Anton
// FUNCTION BEFORE Anton
// FUNCTION AFTER TEST!!!!

// AFTER Anton
// AFTER 2 TEST!!!!