import { Deck, SUITS, VALUES } from './deckTypes';

export default class DeckBuilder {
	deck: Deck;

	constructor() {
		this.deck = new Array();
		for (const s in SUITS) {
			for (const v in VALUES) {
				//@ts-expect-error
				const card: Card = { Suit: s, Value: v };
				this.deck.push(card);
			}
		}
		// for (let i = 0; i < 1000000; i++) {
		this.shuffle();
		// }
	}

	get getDeck() {
		return this.deck;
	}

	/**
	 *
	 * fisher-yates shuffle
	 */
	shuffle() {
		let i = this.deck.length,
			j,
			temp;
		while (--i > 0) {
			j = Math.floor(Math.random() * (i + 1));
			temp = this.deck[j];
			this.deck[j] = this.deck[i];
			this.deck[i] = temp;
		}
	}
}
