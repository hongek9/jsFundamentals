// ARRAYS 

// Arrays are containers that hold lists of items of various data types

let list = ['item1', 'item2', 'item3',];
//   (1)  (2)   (3)

// 1 - name of the Array, or list
// 2 - the Array is inside of these square brackets
// 3 - each item, regardless of datatype, is seperated by commmas

console.log(list[1]);

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Josh', 'Eric', 'Sam']];



console.log(`Hello ${students[6][2]}, how are you today?`);

console.log(typeof students);   // object
console.log(students instanceof Array); //true

// Populating

let food = ['Spaghetti', 'Linguini', 'Chicken Wings', 'Pizza', 'Popcorn'];


food.push('Tacos');         // add the item at the end of the array 
food.splice(1, 1, 'Bananas');       // adds an item at a certain index, potentially deletes items as well
food.splice(2, 0, 'Sweet Potato Pie');  // does not delete an item
food.pop();     // removes the item at the end of the array and returns it
food.shift();       // removes the item at the beginning of the array and returns
food.unshift('Fruit Snacks'); // adds the item to the beginning of the array

for(pasta of food){
    console.log(pasta);
};

