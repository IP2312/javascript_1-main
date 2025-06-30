let nrOfTurndCards = 0;
const imagesPath = [
    'images/canoe.png',
    'images/cat.png',
    'images/hawaiian-shirt.png',
    'images/lion.png',
    'images/monkey.png',
    'images/mushroom.png',
    'images/pamela-hat.png',
    'images/resort.png',
    'images/rice.png',
    'images/sand-castle.png']

let nrOfCards = imagesPath.length * 2;

document.addEventListener("DOMContentLoaded", function () {
    console.log("loaded!");
    let randomPairs = pickPairRandom(imagesPath.length);

    for (let i = 0; i < nrOfCards; i++) {
        createCard(imagesPath[randomPairs[i]]);
    }
})



//create new Button
let cardDeck = document.getElementsByClassName('cardDeck');

function createCard(path) {
    let newCard = document.createElement('button');
    let newImg = document.createElement('img');
    newImg.src = "images/card-back.jpg";
    newImg.alt = "card"
    newCard.appendChild(newImg);
    newCard.onclick = function () {
        turnCard(this, path);
    }
    newCard.classList.add('card');
    cardDeck[0].appendChild(newCard);
}


function turnCard(card, path) {

    if (!card.classList.contains("flipped")) {
       let image = card.querySelector("img");
        image.src = path;
        card.classList.add("flipped");
        nrOfTurndCards++;

        if (nrOfTurndCards === 2){
            samePair();
            nrOfTurndCards = 0;
        }
    }
}

// pickPairRandom
function pickPairRandom(decksize) {
    randomPairs = new Array(decksize);
    for (let i = 0; i < decksize; i++) {
        randomPairs[i * 2] = i;
        randomPairs[i * 2 + 1] = i;
    }

    //Fisher_Yates_Shuffle
    for (let i = randomPairs.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = randomPairs[i];
        randomPairs[i] = randomPairs[randomIndex];
        randomPairs[randomIndex] = temp;
    }
    console.log(randomPairs)
    return randomPairs;
}

let matches = 0;
function samePair(){
    let flippedCards = document.getElementsByClassName('card flipped');
    let card1 = flippedCards[0];
    let card2 = flippedCards[1];


    if (card1.querySelector("img").src === card2.querySelector("img").src){
        console.log("pair Found!")
        console.log(card1.querySelector("img").src);
        card1.classList.replace("flipped","match");
        card2.classList.replace("flipped","match")
        matches += 2;

        if (matches === nrOfCards){
            alert("You Won!")
        }

        }
    else{

        setTimeout(function (){
            card1.classList.remove("flipped");
            console.log("removed")
            card1.querySelector("img").src = "images/card-back.jpg"
            card2.classList.remove("flipped");
            card2.querySelector("img").src = "images/card-back.jpg";
            console.log(card2);
        },1000)

    }

}