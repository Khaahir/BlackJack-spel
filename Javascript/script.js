//kortleken
window.onload = function(){
    builddeck();
    shuffleDeck();
    startGame()
    }
// nu ska den bara blandas...
function builddeck() {
  let value = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let type = ["C", "S", "H", "D"];
  let deck = [];

  for (let i = 0; i < type.length; i++) {
    for (let j = 0; j < value.length; j++) {
      deck.push(value[j] + "-" + type[i]);
    }
  }
  console.log(deck);
}


//Slumpa fram ett kort som visas i #card html (#cards är display: none)
function shuffleDeck(){
}
//Hämta knappen #again

//Med slump functionen få den att generera ett kort vid click
function startGame (){
    hidden = deck.pop;
    dealerSum += getValue(hidden);

    dealerAceCount += checkAce(hidden);

    while (dealerSum < 17){
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./Cards/" + card + "png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById("dealer-cards").append(cardImg);
    }

    for (let i = 0; i < 2; i++){
        let cardImg = document.createElement("img");
        let card = deck.pop();
        cardImg.src = "./Cards/" + card + "png";
        yourSum += getValue(card);
        yourAceCount += checkAce(card);
        document.getElementById("your-cards").append(cardImg);
    }
}

//En counter som registrerar kortets värde och + på nästa värde
function getValue(card){
    let data = card.split("-");
    let value = data[0];

        if (isNaN(value)){
            if (value == "A"){
                return 11;
            }
            return 10;
        }

        return parseInt(value);
}

function checkAce(card){
    if (card[0] == "A"){
        return 1;
    }
    return 0;
}
//Hämta knappen #stop

//function jämför vem som är närmast 21
