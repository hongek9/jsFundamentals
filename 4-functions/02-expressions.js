/***********************
 EXPRESSIONS
 **********************/

function hi() {             // declaration
    console.log('HI!')
}

//          vs. 
 let hey = function hi(){
     console.log('HI!');
 }

 // The variable 'hey' is now representative of the function 'hi'

 /* 
 Difference between declaration and expression:
 declaration gets hoisted
 Expression does not
 */
// ANONYMOUS FUNCTION 


 let hi = function() {
     console.log('HEY!');
 }

 