//kortleken
// nu ska den bara blandas...
let deck = [];

function builddeck() {
  let type = ["C", "S", "H", "D"];
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

  for (let i = 0; i < type.length; i++) {
    for (let j = 0; j < value.length; j++) {
      deck.push(value[j] + "-" + type[i]);
    }
  }
}

//Slumpa fram ett kort som visas i #card html (#cards är display: none)
for(let i = 0; i <= cards.length; i++){
    const randomCard = Math.floor(Math.random(cards[i]))
}
//Hämta knappen #again

//Med slump functionen få den att generera ett kort vid click

//En counter som registrerar kortets värde och + på nästa värde

//Hämta knappen #stop

//function jämför vem som är närmast 21
