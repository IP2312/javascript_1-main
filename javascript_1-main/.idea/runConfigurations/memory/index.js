let nrOfTurndCards = 0;
const imagesPath= [
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
//(let randomPairs = pickPairRandom(imagesPath.length * 2)


document.addEventListener("DOMContentLoaded", function() {
    console.log("loaded!");
    for (let i = 0; i < nrOfCards; i++) {
        createCard();
    }
    console.log(pickPairRandom(imagesPath.length))

})

//create new Button
let card = document.getElementsByClassName('card');
let cardDeck = document.getElementsByClassName('cardDeck');

const createCard = function (){
    let newCard = document.createElement('button');
    let newImg = document.createElement('img');
    newImg.src = "images/card-back.jpg";
    newImg.alt = "card"
    newCard.appendChild(newImg);
    newCard.onclick = function (){
        turnCard(this,imagesPath[Math.floor(Math.random()*imagesPath.length)]);
    }
    newCard.classList.add('card');
    cardDeck[0].appendChild(newCard);


}



function turnCard(card, path){
    console.log("turnCard", card);
    console.log(card);

    if (!card.classList.contains("flipped")){
        imgage = card.querySelector("img");
        imgage.src = path;
        card.classList.add("flipped");
        nrOfTurndCards++;
    }
}

// pickPairRandom
function pickPairRandom(decksize){
    randomPairs = new Array(decksize);
    for (let i = 0; i < decksize; i ++){
        randomPairs[i * 2] = i;
        randomPairs[i * 2 + 1] = i;

    }

    //Fisher_Yates_Shuffle
    for (let i = randomPairs.length - 1; i > 0; i--){
        let randomIndex = Math.floor(Math.random() * (i + 1));
        let temp = randomPairs[i];
        randomPairs[i] = randomPairs[randomIndex];
        randomPairs[randomIndex] = temp;

    }

    console.log(randomPairs);
}