// CALLING FUNCTIONS

function hi(){
    console.log('HI!');
}

hi();
//This is how we call, or 'invoke' our function
// it's the start button on a machine


function count(){
    for(let i = 1; i <=10; i++){
        console.log(i);
    }
}

count();

let arr = ['This','is','really','cool'];

function words(){
    for(let work of arr){
        console.log(work);
    }
}

words();

function pet(animal){
    console.log(`My puppy's name is ${animal}!`);
}

pet('Echo');
pet('Mo');


function name(firstName, lastName){
    let fullName = firstName + ' ' + lastName;
    console.log(`Hello, my name is ${fullName}.`);
}

let first = 'Ellie';
let last = 'Hong';

name(first,last);

