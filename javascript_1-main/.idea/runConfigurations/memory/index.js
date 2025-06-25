

function turnCard(cardNo){
    console.log("turnCard" + cardNo);

    if(document.querySelector(`#card${cardNo}`).innerHTML ===`${cardNo}`){
        document.querySelector(`#card${cardNo}`).innerHTML =  cardNo + " was turned";
    } else{
        document.querySelector(`#card${cardNo}`).innerHTML = cardNo;
    }


}