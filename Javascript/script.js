//kortleken
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

builddeck();

//Slumpa fram ett kort som visas i #card html (#cards är display: none)

//Hämta knappen #again

//Med slump functionen få den att generera ett kort vid click

//En counter som registrerar kortets värde och + på nästa värde

//Hämta knappen #stop

//function jämför vem som är närmast 21
