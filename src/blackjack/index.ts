import DeckBuilder from './deck';

console.time('t');
const deck = new DeckBuilder();
console.log(deck);
console.timeEnd('t');
