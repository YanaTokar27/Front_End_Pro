let arr = new Array(1000);

function newArray(number) {
    for (let i = 0; i < 1000; i++) {
        arr[i] = i + 1;
        console.log(arr[i]);
    }
}
newArray();


function double(number) {
    for (let i = 0; i <= 1000; i++) {
        if (i % 2 === 0 && i % 10 === 0) {
            console.log(arr[i]);
        }
    }
}

double();