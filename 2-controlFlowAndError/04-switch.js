// SWITCH STATEMENT

let friend = 'Bob';

switch (friend) {
    case 'Autumn': 
      console.log("Hey Autumn, when are we going rock wall climbing?");
      break;
    case 'Dave':
      console.log("Hey Dave, how is Cooper?");
      break;
    case 'Alecx':
      console.log("Hey Alecx, when are we playing DnD")
      break;  
    default:  
      console.log(`I'm sorry, ${friend}, but do I know you?`);
      // string interpolation - uses back ticks instead of single/double quotes
}

let dessert = 'pie';

switch(dessert){                // can use greater than and less than conditions
    case ('pie' || 'Pie'):
        console.log('Pie, pie, me oh my');
        break;
    case 'cake':
        console.log('Cake is great!');
        break;
    case 'ice cream':
        console.log('I scream for ice cream!');
        break;
    default:
        console.log(`${dessert} is not on the menu`);
}


let age = 24;

switch(true){
    case age >=25:
        console.log("Yay! You can rent a car!");
        break;
    case age >= 21:
        console.log("Yay! You can drink!");
        break;
    case age >=18:
        console.log("Yay! You can vote!");
        break;
    case age <=17:
        console.log("Sorry, you're too young to do anything");
        break;
    default:
        console.log('Error: Please input a number');

}
