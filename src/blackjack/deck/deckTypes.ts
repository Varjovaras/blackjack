export const SUITS = {
	HEARTS: 'hearts',
	DIAMONDS: 'diamonds',
	SPADES: 'spades',
	CLUBS: 'clubs',
} as const;

export const VALUES = {
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

export type Card = {
	Suit: Suit;
	Value: Value;
};

export type Deck = Card[];
