
var cards = ["queen" , "queen" , "king" , "king"];

var cardsInPlay = [];

function checkForMatch() {
	
  if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
	}  else {
	  console.log("Sorry, try again.");
	}
};


var flipCard = function(cardId) {
    console.log("User flipped " + cards[cardId]);
	//console.log("cards " + [cardId]);
	// console.log("Up and running!");
	cardsInPlay.push("cards " + [cardId]);
    checkForMatch();
};


 flipCard(0);
 flipCard(2);