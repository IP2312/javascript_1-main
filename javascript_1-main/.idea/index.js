
// document.getElementById('count-el').innerHTML = 11;
let count = 0;


function myFunction() {
    count += 1;
    document.getElementById("count-el").innerText = count;
    console.log("button clicked, count is " + count);
}
console.log(count);

"use strict";
let integer = 3;
let double = 2.34;
let letter = "a";
let word = 'hello';
let boolean = true;
let noInitialization;
console.log("integer: " + typeof integer);
console.log("double: " + typeof double);
console.log("letter: " + typeof letter);
console.log("word: " + typeof word);
console.log("boolean: " + typeof boolean);
console.log("noInitialization: " + typeof noInitialization);


