import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static getRandomQuoteViaAPI() {
    const url = 'https://api.quotable.io/random';
    const options = { headers: { 'Content-Type': 'application/json' } };

    return fetch(url, options)
      .then((response) => response.json())
      .then(({ _id: id, content, author }) => new Quote(id, content, author))
      .catch((error) => console.error(error));
  }
}

export default RandomQuote;
