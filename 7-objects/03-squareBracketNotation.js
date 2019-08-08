// SQUARE BRACKET NOTATION

// Square bracket notation can help us be able to find a value in an object. This way can be handy if we need to set a key to a variable and then use that variable to parse through an object
// It works because of the fact that all property keys( before the colon) are strings

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',     // jeys are strings, so there is no difference in type between fruit and water
    "water": true,
    sun: true,
    size: 10
  };

// console.log(garden.vegetable);

let x = 'vegetable';
console.log(garden.x,garden[x]);    // garden.x is undefined because there is no x key. square brackets allow us to look for that key

let baking = {};
baking['zucchini'] = 'better make some bread!'; // here we can also set a key value pair with sqaure brackets

console.log(baking);

// console.log(baking.garden.vegetable);

console.log(baking[garden[x]]); // garden[x] represents zucchini, so this works, below is lays it out

console.log(garden['vegetable']);
console.log(baking['zucchini']);
console.log(baking[garden['vegetable']]);


let key = 'water';

Object.keys(garden).forEach(g => {
    if(key === g) {
        console.log(garden[key]);
    }
})
