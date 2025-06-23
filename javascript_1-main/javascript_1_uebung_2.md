# JS 1 - Isogram Check Function
## Aufgabe: Implementiere eine Isogram Check Function  

Als Isogramm bezeichnet man einen Text, in dem jeder verwendete Buchstabe nur einmal vorkommt.  
### Anforderungen:  
- implementiere die Funktion isIsogram()
- überprüfe, ob die im String verwendeten Buchstaben nur einmal vorkommen.
    - wenn ja, ist der Rückgabewert true  
    - wenn nein, ist der Rückgabewert false  
- Beachte:
    - Umgang mit Großbuchstaben (.toLowerCase())  

EN:  

### Implement an Isogram Check Function  
An isogram is a text in which each letter is used only once.  

### Requirements:  

- Implement the function `isIsogram()`.  
- Check if the characters used in the string appear only once.  
  - If yes, the return value is true.  
  - If no, the return value is false.  
- Consider:  
  - Handling uppercase and lowercase letters (convert to lowercase using `.toLowerCase()`).  

### Beispiel/ Example:  

  
```javascript
function isIsogram(string){  
    //hier dein Code  
}

console.log(isIsogram("ambidExtRously")); // true  
console.log(isIsogram("patteRN")); //false  
```