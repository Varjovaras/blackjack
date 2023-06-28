import Card from './card';
import { Deck, SUITS, VALUES } from './types';

export default class DeckBuilder {
	deck: Deck;

	constructor() {
		this.deck = new Array();
		for (const s in SUITS) {
			for (const v in VALUES) {
				const card: Card = new Card(s, v);
				this.deck.push(card);
			}
		}
		this.shuffle();
	}

	get getDeck() {
		return this.deck;
	}

	/**
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
