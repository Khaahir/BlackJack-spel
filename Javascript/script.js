//kortleken
let dealerSum = 0;
let yourSum = 0;

let dealerAceCount = 0;
let yourAceCount = 0;

let hidden;
let deck;

let canHit = true;

window.onload = function () {
  builddeck();
  shuffleDeck();
  startGame();
};
// nu ska den bara blandas...
function builddeck() {
  let values = [
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
  let types = ["clubs", "diamonds", "hearts", "spades"];
  deck = [];

  for (let i = 0; i < types.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(types[i] + "_" + values[j]);
    }
  }
  console.log(deck);
}

// function shuffleDeck() {
//   for (let i = -deck.length; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [deck[i], deck[j]] = [deck[j], deck[i]];
//   }
// }

// buildDeck();

// //Slumpa fram ett kort som visas i #card html (#cards är display: none)

// for (let i = 0; i <= deck.length; i++) {
//   const randomCard = Math.floor(Math.random(deck[i]));

//Slumpa fram ett kort som visas i #card html (#cards är display: none)
function shuffleDeck() {
  for (let i = 0; i < deck.length; i++) {
    let j = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

//Hämta knappen #again

//Med slump functionen få den att generera ett kort vid click
function startGame() {
  hidden = deck.pop();
  dealerSum += getValue(hidden);
  dealerAceCount += checkAce(hidden);

  // Visa dealerns kort tills de når 17 poäng
  while (dealerSum < 17) {
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./Cards/" + card + ".png";
    dealerSum += getValue(card);
    dealerAceCount += checkAce(card);
    document.getElementById("dealer-cards").append(cardImg);
  }

  // Visa spelarens kort (2 kort)
  for (let i = 0; i < 2; i++) {
    let cardImg = document.createElement("img");
    let card = deck.pop();
    cardImg.src = "./Cards/" + card + ".png";
    yourSum += getValue(card);
    yourAceCount += checkAce(card);
    document.getElementById("your-cards").append(cardImg);
  }

  // Justerar dealerns poäng för ess
  dealerSum = adjustForAce(dealerSum, dealerAceCount);

  // Justerar spelarens poäng för ess
  yourSum = adjustForAce(yourSum, yourAceCount);
}

//En counter som registrerar kortets värde och + på nästa värde
function getValue(card) {
  let data = card.split("_");
  let value = data[1];

  if (isNaN(value)) {
    if (value == "A") {
      return 11;
    }
    return 10;
  }

  return parseInt(value);
}

function checkAce(card) {
  if (card[0] == "A") {
    return 1;
  }
  return 0;
}

function adjustForAce(sum, aceCount) {
  // Om poängen är över 21 och spelaren har ett ess, justera ess från 11 till 1
  while (sum > 21 && aceCount > 0) {
    sum -= 10; // från ett ess med 11 blir till 1
    aceCount--; // minska antalet ess
  }
  return sum;
}

function resetGame() {
  dealerSum = 0;
  yourSum = 0;
  dealerAceCount = 0;
  yourAceCount = 0;
  canHit = true;

  // Rensa visade kort på skärmen, annars visar den flera
  document.getElementById("dealer-cards").innerHTML = "";
  document.getElementById("your-cards").innerHTML = "";

  // Bygg om kortleken och blanda den
  builddeck();
  shuffleDeck();
}

// Jämför poängen oc avgör vem som viinner
function compareScores() {
  // Justera poängen för ess en sista gång innan jämförelse
  yourSum = adjustForAce(yourSum, yourAceCount);
  dealerSum = adjustForAce(dealerSum, dealerAceCount);

  // Hämta referens till result-diven
  let resultDiv = document.getElementById("result");

  // Rensa tidigare resultat
  resultDiv.innerHTML = "";
  resultDiv.style.color = "black"; // Återställ standardfärgen

  // Kontrollera vem som är närmast 21
  if (yourSum > 21) {
    resultDiv.innerHTML = "Du förlorar! Din poäng är över 21.";
    resultDiv.style.color = "red";
  } else if (dealerSum > 21) {
    resultDiv.innerHTML = "Du vinner! Dealern gick över 21.";
    resultDiv.style.color = "green";
  } else if (yourSum > dealerSum) {
    resultDiv.innerHTML =
      "Grattis! Du vann med " + yourSum + " mot dealerns " + dealerSum + ".";
    resultDiv.style.color = "green";
  } else if (yourSum < dealerSum) {
    resultDiv.innerHTML =
      "Dealern vinner med " + dealerSum + " mot din " + yourSum + ".";
    resultDiv.style.color = "red";
  } else {
    resultDiv.innerHTML = "Det är oavgjort!";
  }
}

//Hämta knappen #stop
document.getElementById("btn-again").addEventListener("click", function () {
  resetGame();
  startGame();
  console.log("startknappen är tröckt");
  canHit = false;
  compareScores();
});

// document.getElementById('btn-stop').addEventListener('click', function() {
//   canHit = false;
//   compareScores();
//   console.log("stoppknappen är tröckt");

// });
