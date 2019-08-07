/*
FOR IN LOOPS

Used for iterating over ENUMERABLE values in an object. This is great for debugging purposes so we can easily check the properties of an object. Although we are 'iterating' over the enumerable properties of an object, objects themselves aren't iterable.

// Iterables are data structures which allow us to access its elements in a sequential manner, and we can't do that with objects like we can an array.
*/

let student = {
    name: 'Peter',
    awesome: true,
    degree: 'JavaScript',
    week: 1
};

for(let item in student){
    //console.log(item);
    console.log(student[item]);
}

let catArray = ['tabby','british shorthair', 'burmese', 'maine coon', 'rag doll'];

for(let cat in catArray){
    //console.log(cat);
    console.log(catArray[cat]);
}

// Challenge: write a for in loop that capitalizes the first letter of your name
let name = 'elLie';
let capName;


for(let letter in name){
    if(letter == 0){
        capName = name[letter].toUpperCase();
    } else {
        capName = capName + name[letter].toLowerCase();
    }
}

console.log(capName);

