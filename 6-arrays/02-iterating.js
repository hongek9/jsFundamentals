// Iterating

// forEach() method executes a provided function once for each array element

// forEach() has three arguments: currentValue, the index, and the entire array.
// currentValue - the current element being processed in the array
// index - the index of the current element being processed
// array - the array the forEach method was called upon

let food = ['Spaghetti', 'Linguini', 'Chicken Wings', 'Pizza', 'Popcorn'];

food.forEach(f => {console.log(f)});

food.forEach((f, number) => {console.log(f, number)});

food.forEach((f, number, array) => {console.log(f, number, array)});

/* 
Challenge:
* Create a list, using an array, of movies
* Add another movie at the end
* Replace one of your existing movies with another one
* Use .forEach() to list your movies
*/

let movies = ['Avengers:Endgame', 'Mulan', 'Avatar','13 Going On 30'];

movies.push('Fast and Furious');
movies.splice(2,1,'IT');

movies.forEach(f => {console.log(f)});

