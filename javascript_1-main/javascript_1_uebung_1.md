# JS 1 - Pangram Check Function
## Implementiere eine Pangram Check Function  

Pangramm ist ein String, der alle Buchstaben aus dem Alphabet enthält. Jeder Buchstabe muss zumindest einmal vorkommen.  

### Anforderungen  
- implementiere die Funktion isPangram()
- überprüfe, ob der String alle Buchstaben des Alphabets (zumindest einmal) enthält
    - wenn ja, ist der Rückgabewert true
    - wenn nein, ist der Rückgabewert false  
- Beachte:
    - Umgang mit Großbuchstaben (.toLowerCase())
    - Umgang mit Leerzeichen  

------  

EN:  

## Implement a Pangram Check Function  

A pangram is a string that contains all the letters of the alphabet. Each letter must appear at least once.  

### Requirements:  

- Implement the function `isPangram()`.  

- Check if the string contains all the letters of the alphabet (at least once).  
    - If yes, the return value should be true.  
    - If no, the return value should be false.  

- Considerations:  
    - Handle uppercase and lowercase letters (convert them to lowercase using `.toLowerCase()`).
    - Handle spaces in the string.

### Beispiel / Example

```javascript
function isPangram(string){                                                                                  
 //hier dein Code                                                                                            
}                                                                                                                                              
console.log(isPangram("The quick Brown fox jumps over the lazy DOG")); // true   
console.log(isPangram("The quick fox jUMps over the dog")); //false      
```