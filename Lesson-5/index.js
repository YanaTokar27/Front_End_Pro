let user = 'user';


let arr = ['user1', 'user2', user];
let arr2 = arr;

let arr3 = ['user1', 'user2', 'user3'];


arr3[10] = user;

let arr4 = new Array(10);


console.log(arr4);


for(let i = 0; i < arr3.length; i++) {

    if(arr3[i]) {
        console.log('EEEEEEE');
    }

    console.log('i', i, arr3[i]);


}


