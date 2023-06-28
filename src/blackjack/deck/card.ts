import { SUITS, COLORS } from './types';

export default class Card {
	readonly suit;
	readonly value;
	readonly color: string;
	readonly id: number;

	constructor(suit: string, value: string) {
		this.suit = suit;
		this.value = value;
		this.color =
			this.suit.toLowerCase() === SUITS.DIAMONDS ||
			this.suit.toLowerCase() === SUITS.HEARTS
				? (this.color = COLORS.RED)
				: (this.color = COLORS.BLACK);

		if (this.value === 'J') this.id = 11;
		else if (this.value === 'Q') this.id = 12;
		else if (this.value === 'K') this.id = 13;
		else if (this.value === 'A') this.id = 1 || 11;
		else this.id = parseInt(value);
	}
}
