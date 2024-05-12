import quotes from '../data/quotes.js';
import MathUtils from '../utils/MathUtils.js';
import Quote from './Quote.js';
import config from '../../config.js';

class RandomQuote {
  static getRandomQuote() {
    const randomIndex = MathUtils.generateRandomInt(quotes.length);
    const { id, text, author } = quotes[randomIndex];
    return new Quote(id, text, author);
  }

  static async getRandomQuoteViaPublicAPI() {
    const url = `${config.PUBLIC_API_URL}/quotes/random`;
    const options = { headers: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(url, options);
      const quotes = await response.json();
      if (Array.isArray(quotes) && quotes.length === 1) {
        const quote = quotes[0];
        const { _id: id, content, author } = quote;
        if (id && content && author) {
          return new Quote(id, content, author);
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  static async getRandomQuoteViaOwnAPI() {
    const url = `${config.API_URL}/quotes/random-single`;
    const options = { headers: { 'Content-Type': 'application/json' } };
    try {
      const response = await fetch(url, options);
      const quote = await response.json();
      const { id, text, author } = quote;
      return new Quote(id, text, author);
    } catch (error) {
      console.error(error);
    }
  }
}

export default RandomQuote;
