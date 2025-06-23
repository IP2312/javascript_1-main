# JavaScript Basics:
### Please complete the Scrimba tutorial for JavaScript up to the "Chrome Extension" 

Link: https://scrimba.com/learn/learnjavascript.
The contents below should then serve only as a brief recap after the video.

### JavaScript in general:
- Purpose: creating dynamic websites
- Offers diverse ways to modify structure, layout, and content
- Now considered one of the established web technologies
- Due to its great popularity, its scope of application has expanded
- For example, Node.js was released in 2009 => a platform for programming server applications with JavaScript
- Browser applications remain by far the most common area of application for JS
- Runs within a sandbox, thus no access to functions of the operating system, hardware, or networks is possible

#### Origin
- Origin closely linked to the development of web browsers
- First version appeared in 1995 under the name "LiveScript" and was implemented in Netscape Navigator 2.0
- Renamed to JavaScript a few months after its initial release (marketing strategy)

#### First Steps
- console.log() is a simply method that writes data to the browser console
- Semicolons can terminate JS commands, but they are optional

```javascript
<script>
console.log("Hello World!");
</script>
```
#### Comments in JS
```javascript
<script>
// I am a single-line comment
/* I am a comment
that can span
multiple lines */
</script>
```
#### JavaScript in a separate file
```html
<!--index.html-->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>JSPage</title>
    </head>
    <body>
        <script src="./myScript.js"></script>
    </body>
</html>
```
```javascript
//javascript
console.log("Hello World!");
```
#### Variables in JavaScript
- Can hold different values (most commonly numbers)
  - Letters, characters, words, longer text, boolean values, etc.
- Each variable has a type
- Not necessary to specify the data type in JS
  - The interpreter automatically chooses a suitable option during execution
  - It's also possible to first assign a number, and then a string to the same variable
- However, some operations can only be performed with specific variable types (e.g., division, multiplication)

```javascript
// Declare a variable => Initialization
let myFirstVariable;

// Assign a value to the variable
myFirstVariable = 5;
/* or */
myFirstVariable = "I am a text";

/*
Initialize multiple variables with values
Not recommended for code readability
*/
let myFirstVariable = 5, text = "Hello there", number = 10;
```
#### Template Literals - Writing strings in a fancy way 🎩
```javascript
let favNumber = 7;
let favColor = "blue";
let favAnimal = "fox";

// Normal string concatenation
console.log("My favorite number is " + favNumber + ", my favorite color is " + favColor + ", my favorite animal is " + favAnimal);
// Using Template Literals
console.log(`My favorite number is ${favNumber}, my favorite color is ${favColor}, my favorite animal is ${favAnimal}`);
```
- Instead of the typical double quotation marks, use backticks (`) (located on the keyboard next to the "ß" character)
- Variables, calculations, and logical expressions are enclosed in ${}
- Template strings allow multiline strings
- With Template Literals, you can do even more:
```javascript
// Calculations can be performed within Template Literals:
console.log(`4 times 5 is ${4 * 5}`);

let isFavouritePet = true;
console.log(`My favorite pets are ${isFavouritePet ? "dogs" : "cats"}`);

isFavouritePet = false;
console.log(`My favorite pets are ${isFavouritePet ? "dogs" : "cats"}`);
```
#### Using const - Constants
- Variables whose values you want to remain unchanged throughout the program execution
- Using them can improve program performance
- Examples:
  - Storing color values to influence design with JavaScript
  - Establishing a reference to an object in HTML
  - Store data that does not change during program execution
```javascript
// Reference to a button with the id #btn
const btn = document.querySelector('#btn');
// Reference to a container element in HTML
const mainContainer = document.querySelector('main');
// Elements that do not change during the program execution
const productCategories = ["Cars", "Bicycles", "Bikes", "Accessories"];
```
**Advantages of Constants:**
- It informs others reading your code that you do not intend to change the value of a variable.
- Side effects can be avoided (no new values can be assigned that we do not intend).

#### Determining Data Types

- With `typeof`, you can output the type of a variable.
- JS treats integers and floating-point numbers alike as `number`.
- The type of a variable can change in JS during the program's execution.

```javascript
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
```

#### Modifying Data Types
- User input via the `prompt` command.
- Output the data type (string).
- Output and attempt to add a string with a number, resulting in string concatenation.
- Output of line breaks.
- Conversion of the input value to a number.
- Output and addition of the number with 3 = correct result.

```javascript
let userInput = prompt("Enter a number:");
console.log("Data type: " + typeof userInput);
console.log(userInput + 3);
userInput = Number(userInput);
console.log("Data type: " + typeof userInput);
console.log(userInput + 3);
```
### Defining and Calling Functions
- Functions serve to store a specific sequence of commands outside the main program.
- Allows them to be called at a different location by specifying the function name.

```javascript
function greeting() {
    let name = prompt("Enter your name:");
    alert("Welcome: " + name);
}

greeting();
```

#### Scope of Variables
- Variables created within a function are only valid there.
- Variables outside a function are valid throughout the program = global variables.
- Caution: Do not re-declare variables within the function.
- Minimize the use of global variables => error-prone, issues with code reuse may arise.

```javascript
function greeting() {
    name = prompt("Enter your name:");
    alert("Welcome, " + name);
}
let name;
greeting();
console.log("Your name: " + name);
```

#### Functions with Parameters
- The parameter value is placed within the parentheses of the function name and is also referred to as '''arguments''' of the function.
- Once the function is called with the "actual values", these are called '''arguments'''.
- Any data type.
- Either pass a value directly or a variable.
- It's also possible to pass multiple values = multiple values in the function parentheses (separated by a '''comma''').

```javascript
// Example 1
function greeting(name) {
    alert("Welcome, " + name);
}
let user = prompt("Enter your name:");
greeting(user);

// Example 2
function greeting(name, age) {
    console.log("Name: " + name);
    console.log("Age: " + age);
}
let user = prompt("Enter your name:");
let age = prompt("Enter your age");
greeting(user, age);
```
### Functions with Return Values
- A function can transmit values to the main program using a return value.
- The return is done using the `return` keyword.
- Each function may only return a single value to the program.
- If multiple variables need to be transmitted, create a separate function for each or create an array and include multiple values in it.

```javascript
function sample(x) {
    let result = 2 * x * x + 5 * x + 7;
    return result;
}
let value = sample(3);
console.log(value);
```

### Scope in JavaScript

There are three types of scope: **Global Scope**, **Function Scope**, and **Block Scope**. Scope defines the visibility or accessibility of variables.

"The Scope is a policy that manages the accessibility or visibility of variables."

#### Global Scope (var, let, const)
- Any variable not declared within a function or a block (if-statement, for-loop). In simple terms, all variables not enclosed in `{}` curly braces.
- Variables defined in the global scope can be accessed (and modified) from anywhere in the program.
- It's also possible to access and modify "outer" variables within a function.

**Example Cookie Jar Part 1 🍪:**
```javascript
let cookieJar = ["Oreos", "Prinzenrolle", "Chocolate-Chip-Cookie", "Karamellkekse"];

function cookiesForAll() {
    console.log(`I have access to the cookie jar with: ${cookieJar}`);
    console.log(`I can also take cookies out 😄, I eat all ${cookieJar.pop()}`);
}

cookiesForAll();

// The cookie jar is now less full, we've modified the global variable inside the function "cookiesForAll()"
console.log(`The cookie jar is now less full: ${cookieJar}`);
```

#### Function Scope (var, let, const)
- Applies to variables defined within a function. They can only be accessed and modified within that function.
- Outside the function, they are not accessible.

**Example Cookie Drawer Part 2 🍪:**

```javascript
function cookieDrawer() {
    // The colleague can access the cookie jar within the drawer and also take something out
    // The cookie jar is only available within the function

    let cookieJar = ["Oreos", "Prinzenrolle", "Chocolate-Chip-Cookie", "Karamelkekse"];
    console.log(`Within the function, she has access to the cookie jar, containing ${cookieJar}`);
    console.log(`She has eaten all ${cookieJar.pop()}`);
    console.log(`There are still ${cookieJar} left in the cookie jar`);
}

cookieDrawer();

// Now you want a cookie from the cookie jar, unfortunately, you cannot access it or take anything out 😒
// Here you'll get a referenceError, as you have no access to the variable from outside the function
console.log(`I want something from the cookie jar, containing ${cookieJar}`);
```

#### Block Scope (let, const)
- Variables within block scope, i.e., declared with `let` & `const`, can only be accessed within the block where they were defined (if-statement, for-loop, ...).

**Example Cookie Jar Part 3 🍪:**
```javascript
let goodEmployee = true;

function goodOrBadEmployee() {
    if(goodEmployee){
        let cookieJar = ["Oreos", "Prinzenrolle", "Chocolate-Chip-Cookie", "Karamelkekse"];
        console.log(`Within this IF block, I have access to the cookie jar, containing ${cookieJar}`);
        console.log(`I have eaten all ${cookieJar.pop()}`);
    } else {
        console.log('No cookies for you');
        console.log(`But I want cookies from the cookie jar 😭`);
    }
}

goodOrBadEmployee();

console.log(`I would like a cookie, but I have no access to the ${cookieJar} 😢`);
```

#### `let` vs. `var` - What's the Difference?
- Here comes the scope into play again...
  - The smallest scope of `var` is within the **Function Scope**.
  - The smallest scope of `let` is within the **Block Scope**.
- For example, if you use the `var` keyword for a loop counter, you can also access the variable outside the loop.
- This is not possible with `let`.

**Example using `var` for loop counter:**
```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

function processArray(arr) {
    // The loop counter is defined with the var keyword
    for(var i = 0; i < arr.length; i++) {
        console.log('Element ', arr[i]);
    }
    // I also have access to the variable i outside the loop
    console.log(`How many times did my loop run? ${i} times`);
}

processArray(arr);
```
**What about using `let` for the loop counter?**
```javascript
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

function processArray(arr) {
    // The loop counter is defined with the let keyword
    for(let i = 0; i < arr.length; i++) {
        console.log('Element ', arr[i]);
    }
    // Here I no longer have access to the variable i
    console.log(`How many times did my loop run? ${i} times`);
}

processArray(arr);
```
#### Using Objects to Store Data
We can use so-called 'Classless Objects' in JavaScript to store data. As the name implies we can create an object without using the class keyword.
A widespread method is using 'Object Literals' (as shown in the example below):

```javascript
const person = {
    name: 'Traudi',
    age: 42,
    address: 'SomeStreet 3',
    greet: function() { console.log('Hello everyone!'); }                                                                
}

console.log(person);
person.greet();
```

