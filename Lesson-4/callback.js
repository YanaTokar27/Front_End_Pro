

function callback() {
    console.log('CALLBACK!!');
}




setTimeout(callback, 1000);


function myAlert(callback) {
    console.log('myAlert');
    callback();
}

function abc(){
    console.log('ABC');
}

function tempFunction() {
    console.log('tempFunction');
}


myAlert(abc);
myAlert(tempFunction);