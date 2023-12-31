import Card from './card';

export const SUITS = {
	HEARTS: 'hearts',
	DIAMONDS: 'diamonds',
	SPADES: 'spades',
	CLUBS: 'clubs',
} as const;

export const VALUES = {
	A: 'A',
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

export const COLORS = {
	RED: 'RED',
	BLACK: 'BLACK',
} as const;

type ObjectValues<T> = T[keyof T];

export type Suit = ObjectValues<typeof SUITS>;

export type Value = ObjectValues<typeof VALUES>;

export type Deck = Card[];
