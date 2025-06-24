
let myString = "Dermatoglyphics";
let myString2 = "aba";

function isIsogram(str) {
    let letters = new Set;
    for (let char of str.toLowerCase()){
        if (letters.has(char)){
            return false;
        } else {
            letters.add(char);
        }

    }
    return true;
}

console.log(isIsogram(myString));
console.log(isIsogram(myString2));