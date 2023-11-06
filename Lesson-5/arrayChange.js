

let users = ['user1', 'user2'];

users.pop();

console.log('pop', users);

users.push('USER');

console.log('push', users);


users.reverse();

console.log('reverse', users);

users.unshift('SUPER USER');
console.log('unshift', users);


users.shift();
console.log('shift', users);


let users2 = ['not a user', 'not a user2'];

let superUsers = users.concat(users2);

console.log('concat', superUsers);


let usersString = superUsers.join(',');
console.log('usersString', usersString);


let string1 = 'a,b,c,d';
let arr = string1.split(',');
console.log('arr', arr);






