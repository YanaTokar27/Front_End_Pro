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