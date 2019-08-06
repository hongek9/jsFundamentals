// TERNARY

// shorthand version of an else if statement

let number = 6;

if(number > 0){              // if statement example
    console.log(true);
} else {
    console.log(false);
};

(number > 0) ? console.log(true) : console.log(false);  // Ternary
// (1)      (2)   (3)       (4)    (5)
// 1 - conditional statement
// 2 - the "if" statement
// 3 - the action if the "if" is true
// 4 - the "else" statement, this else is necessary
// 5 - the action if the "if" is false

if (number == 0){
    console.log('Number is 0');
} else if (number >=5){
    console.log('Number is greater than 5');
} else if (number < 0) {
    console.log('Number is smaller than 0');
} else {
    console.log('Nope.');
};


(number == 0) ? console.log('Number is 0') : (number >= 5) ? console.log('Number is greater than 5') : (number < 0) ? console.log('Number isi smaller than 0') : console.log('nope');

// else ifs are written as -    : (conditional) ?


let age = 16;

(age >=25) ? console.log('Yay! You can rent a car!') 
    : (age >= 21) ? console.log('Yay! You can drink!') 
    : (age >= 18) ? console.log('Yay! You can vote!') 
    : (age < 17) ? console.log('Sorry, you are too young to do anything.') 
    : console.log('Error, please enter a number');

