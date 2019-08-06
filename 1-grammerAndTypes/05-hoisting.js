// Hoisting 

// Hoisting does not exist, it is an illusion. Code does not actually get moved. 
// JS reads through code twice remembering left hand side of variables and functions.

console.log(scissors);  // you get undefined because you have the vars down below

scissors = 'blue';

console.log(scissors);

var scissors;

b();

console.log(a);

function b(){
    console.log('This is all hoisted!');
}

var a = 'This is not hoisted;'