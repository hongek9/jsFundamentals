// IF ELSE STATEMENTS

let weather = 50;

if(weather < 70){
    console.log('Wear a jacket');
} else {
    console.log('No jacket needed');
};


if(weather < 75 && weather > 55){
    console.log('Wear a light jacket');
} else if(weather < 55) {
    console.log('Wear a jacket'); 
} else {
    console.log('No jacket needed');
};


let name = 'Ellie';

if(name === 'Ellie'){
    console.log('Hello, my name is',name+'.');
} else {
    console.log('Hello, is your name',name + '?');
};


/*
? Challenge: 
**********
? Use this string - let name = 'aUTuMN';
? Bronze: 
Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string; 
If it is not console.log 'hey its not written correctly' 
? Silver:
If the first letter of a string is uppercase, only console.log that letter
if it is not, console.log the rest of the string Without the first letter, and change them to lowercase 
? Gold: 
If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

let name = 'aUTuMN';

let firstLetter = name.charAt(0);

let restOfName = name.slice(1);

//silver
//if(firstLetter == firstLetter.toUpperCase()){
//    console.log(firstLetter);
//} else{ 
//    name = name.slice(1);
//    console.log(name.toLowerCase());
//}

//gold
// name[0] (square bracket notation) also gets the first letter of the string, 

if(firstLetter === firstLetter.toUpperCase()){
    console.log(firstLetter+restOfName.toLowerCase());
} else{ 
    console.log(firstLetter.toUpperCase()+restOfName.toLowerCase());
}

// Ing's Solution

if(name.charAt(0) === name.charAt(0).toUpperCase()){
    name1 = name.charAt(0)+name.slice(1).toLowerCase();
    console.log(name1);
} else {
    name2 = name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()
    console.log(name2);
}

