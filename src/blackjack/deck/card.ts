import { Suit, Value } from './types';

export default class Card {
	readonly suit;
	readonly value;
	constructor(suit: string, value: string) {
		this.suit = suit;
		this.value = value;
	}
}
