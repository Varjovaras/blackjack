import DeckBuilder from './deck/deck';

console.time('t');
let firstDeck = new DeckBuilder();
// const decks = [firstDeck.getDeck];

for (let i = 0; i < 1000; i++) {
	const newDeck = new DeckBuilder();

	// if (i % 100000 === 0) {
	// 	console.log(i);
	// }
	// decks.push(newDeck.getDeck);
}

console.log(firstDeck);

console.timeEnd('t');
