// ELSE IF CONDITIONAL

let age = 27;

if(age <= 17){
    console.log("Sorry, you're too young to do anything");
} else if(age >= 18 && age < 21){
    console.log("Yay! You can vote!");
} else if(age >= 21 && age < 25){
    console.log('Yay! You can drink!');
} else if(age >= 25){
    console.log('Yay! You can rent a car!');
} else {
    console.log('Error: Please input number');
};

// or you can rearrange the order

if(age >= 25){
    console.log('Yay! You can rent a car!');
} else if(age >= 21){
    console.log('Yay! You can drink!');
} else if(age >=18){
    console.log("Yay! You can vote!");
} else if(age <= 17){
    console.log("Sorry, you're too young to do anything");
}
