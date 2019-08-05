// Types


// Booleans - True/False

let i = true;

let j = false;


let on = true;
let off = false;

console.log(on, off);

// Null - empty value, not zero, not undefined, like an empty box

let empty = null;
console.log(empty);


// Undefined - means that there is no value assigned

let undef = undefined;
console.log(undef);

let x;
console.log(x); //same as undef 

// Numbers - just numbers, no int or float, etc.

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999; 
console.log(rounded);   // limit is 15 9s, then it starts rounding

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);

let a = Number('123');
console.log(a);


//Strings - text, they are wrapped in single or double quotes
// it is personal preference which one you use

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first, second);
console.log(second);

console.log(typeof first);
console.log(typeof second);

// Objects - a container that hold multiple data types

let car = {
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true
};

console.log(car);
console.log(typeof car);
console.log(car.color);

// Arrays - lists of items

let list = ['item1', 'item2', 'item3'];
//   (1)  (2)  (3)
// 1 - name of array 
// 2 - square brackets denote arrays
// 3 - each item in the list, seperated by commas

let burritoes = ['large',4,true];
console.log(burritoes);
console.log(typeof burritoes); // outputs "object" 

// Addition vs. Concatenation 

/* 
When JS see combining two or more numbers, it adds the values together using the built-in
math functionality;
when it sees adding together one or more strings, it changes and the plus sign becomes an 
assignment operator - it smashes the values together without trying to synthesize the values
*/

let third = 1050 + '100';
console.log(third);
console.log(typeof third);


let firstName = 'Ellie';
let lastName = 'Hong';
let houseNumber = 307;
let aptNumber = 403;
let street = 'S Delaware St';
let city = 'Indianapolis';
let state = 'Indiana';
let zipcode = 46204;

console.log(firstName,lastName + ' | ' + houseNumber, street + ' Apt ' + aptNumber + ' | ' + city + ', ' + state, zipcode);
console.log(firstName, lastName, houseNumber, street + ' Apt',aptNumber, city + ', ' + state, zipcode );


/*
Strings - Properties:
Properties are qualites associated with a datatype.
Strings have properties, or the qualities associated with that string. 
The length of a string is a property.
*/

let myName = 'Ellie';
console.log(myName.length);

/* Methods
Methods are like tools that can help us manipulate our data. 
.Property and .Methods() *no parenthesis for properties
*/

let myNameIs = 'Ellie';
console.log(myNameIs.toUpperCase());

let home = 'My home is indianapolis';
console.log(home.includes('indianapolis'));

let sent = 'This sentence will be split into individual parts';
console.log(sent.split(' '));
console.log(sent.split(''));









