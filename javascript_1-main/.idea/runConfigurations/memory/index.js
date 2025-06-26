let nrOfTurndCards = 4;
const imagesPath= [
    'images/canoe.png',
    'images/cat.png',
    'images/hawaiian-shirt.png',
    'images/lion.png',
    'images/monkey.png',
    'images/mushroom.png',
    'images/pamela-hat',
    'images/resort.png',
    'images/rice.png',
    'images/sand-castle.png']




document.addEventListener("DOMContentLoaded", function() {
    console.log("loaded!");
    for (let i = 0; i < nrOfTurndCards; i++) {
        createCard();
    }

})

//create new Button
let card = document.getElementsByClassName('card');
let cardDeck = document.getElementsByClassName('cardDeck');

const createCard = function (){
    let newCard = document.createElement('button');
    newCard.innerHTML= 'new Button';
    cardDeck[0].appendChild(newCard);

    let currentElement = cardDeck[0].children;

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