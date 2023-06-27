import DeckBuilder from './deck/deck';

console.time('t');
let firstDeck = new DeckBuilder();
// const decks = [firstDeck.getDeck];

for (let i = 0; i < 10000000000; i++) {
	const newDeck = new DeckBuilder();

	if (i % 10000 === 0) {
		console.log(i);
	}
	// decks.push(newDeck.getDeck);
}

// console.log(decks);

console.timeEnd('t');
