let myString = "The quick brown fox jumps over the lazy dog";
let myString2 = "Hello.";

function pangramCheck(myString) {
    const  letters = new Set();

    for (let char of myString.toLowerCase()) {
        if (char >= 'a' && char <= 'z') {
            letters.add(char);
        }
    }
    if (letters.size === 26) {
        return true;
    }
    return false;
}

console.log(pangramCheck(myString));
console.log(pangramCheck(myString2));