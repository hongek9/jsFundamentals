// FAT ARROW FUNCTIONS

let hi = () => {
//    (1)  (2)
    console.log('Hello!');
}

hi();

// -> NOT THE SAME AS => 
// 1 - we need to set the fat arrow function to a variable
// 2 - we use the 'fat arrow' to signify its a function


// Block Body

let hi = () => {
    console.log('hi');
}

let apples = (x) => {
    console.log(`There are ${x} apples in the basket`);
}

apples(12);

// Concise Body
// all on one line, no need for curly braces
// don't need parenthesis if you only have one parameter
let hi = () => console.log('hi');
let apples = x => console.log(`There are ${x} apples in the basker`);
apples(10);

// More than one parameter will require parenthesis
// Return (if one-line fat arrow function) is implied

// Fat arrow function set up needs to all be on one line
// LINE BREAKS ARE BAD
let func = () => console.log('hi'); // this works

// let func = ()
//     => console.log('hi'); // this does not work 

