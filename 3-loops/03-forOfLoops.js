


// for of loops cannot be used on objects, the code below will give an error

// let student = {
//     name: 'Peter',
//     awesome: true,
//     degree: 'JavaScript',
//     week: 1
// };

// for(let item of student){
//     //console.log(item);
//     console.log(student[item]);
// }

let = dogArray = ['husky', 'shepherd','corgi','poodle','pit bull','border collie'];

for(let dog of dogArray){
    console.log(dog, 'goes bark');
}