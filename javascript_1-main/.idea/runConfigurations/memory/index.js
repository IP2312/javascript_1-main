let nrOfTurndCards = 0;
const imagesPath= [
    'images/canoe.png',
    'images/tiger.png',
    'images/cat.png',
    'images/hawaiian-shirt.png',
    'images/lion.png',
    'images/monkey.png',
    'images/mushroom.png',
    'images/pamela-hat',
    'images/resort.png',
    'images/rice.png',
    'images/sand-castle.png']

function turnCard(card, path){
    console.log("turnCard", card);

    if (!card.classList.contains("flipped")){
        img = card.querySelector("img");
        img.src = imagesPath[0];
        card.classList.add("flipped");
        nrOfTurndCards++;
    }





}