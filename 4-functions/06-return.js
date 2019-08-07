// RETURN

let hi = () => {
    return 'hi';
    //(1)
}

let newName = hi();
     //(2)     (3)

console.log(newName);

// 1 - the keyword that brings out data out of our function
// 2 - we need a new variable to hold the value of the return
// 3 - when called, the function becomes the value of the return

let capitalizedName = (name) => {
    let capName = '';
    for(let letter in name){
        if(letter == 0){
            capName += name[letter].toUpperCase();
        } else {
            capName += name[letter].toLowerCase();
        }
    }
    return capName;
}

// console.log(capName); error, not defined

const myName = capitalizedName('eLLie');
console.log(myName + ' how are you doing?');



let tipCalc = (price) => {
    let tipPerc = 0.15;
    let tip = price*tipPerc;
    return tip;
}

let tipDinner = tipCalc(80.86);
console.log(`$${tipDinner} tip`);
