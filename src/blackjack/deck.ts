const SUITS = {
	HEARTS: 'hearts',
	DIAMONDS: 'diamonds',
	SPADES: 'spades',
	CLUBS: 'clubs',
} as const;

const VALUES = {
	ACE: 'A',
	2: '2',
	3: '3',
	4: '4',
	5: '5',
	6: '6',
	7: '7',
	8: '8',
	9: '9',
	10: '10',
	J: 'J',
	Q: 'Q',
	K: 'K',
} as const;

type ObjectValues<T> = T[keyof T];

type Suit = ObjectValues<typeof SUITS>;

type Value = ObjectValues<typeof VALUES>;

type Card = {
	Suit: Suit;
	Value: Value;
};

type Deck = Card[];

export default class DeckBuilder {
	deck: Deck;

	constructor() {
		this.deck = new Array();
		for (let s in SUITS) {
			for (let v in VALUES) {
				const card: Card = { Suit: s, Value: v };
				this.deck.push(card);
			}
		}
		DeckBuilder.shuffle(this.deck);
	}

	/**
	 *
	 * fisher-yates shuffle
	 */
	static shuffle(deck: Deck) {
		let i = deck.length,
			j,
			temp;
		while (--i > 0) {
			j = Math.floor(Math.random() * (i + 1));
			temp = deck[j];
			deck[j] = deck[i];
			deck[i] = temp;
		}
	}
}

const deck = new DeckBuilder();
console.log(deck);
