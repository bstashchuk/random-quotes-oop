import Quote from './Quote.js';
import RandomQuote from './RandomQuote.js';

class RandomQuotesApp {
  constructor() {
    this.randomQuoteBtn = document.getElementById('random-quote-btn');
    this.randomQuotePublicAPIBtn = document.getElementById(
      'random-quote-public-api-btn'
    );
    this.randomQuoteOwnAPIBtn = document.getElementById(
      'random-quote-own-api-btn'
    );
    this.quoteTextElement = document.getElementById('quote-text');
    this.quoteAuthorElement = document.getElementById('quote-author');
    this.currentQuote = null;

    this.init();
  }

  displayCurrentQuote() {
    this.quoteTextElement.textContent = this.currentQuote.formatText();
    this.quoteAuthorElement.textContent = this.currentQuote.formatAuthor();
  }

  changeCurrentQuote(newQuote) {
    if (newQuote instanceof Quote) {
      this.currentQuote = newQuote;
      this.displayCurrentQuote();
    }
  }

  randomQuoteHandler() {
    this.changeCurrentQuote(RandomQuote.getRandomQuote());
  }

  async handleRandomQuoteViaAPI(apiIsOwn = false) {
    this.changeCurrentQuote(
      apiIsOwn
        ? await RandomQuote.getRandomQuoteViaOwnAPI()
        : await RandomQuote.getRandomQuoteViaPublicAPI()
    );
  }

  init() {
    this.randomQuoteBtn.addEventListener('click', () =>
      this.randomQuoteHandler()
    );
    this.randomQuotePublicAPIBtn.addEventListener('click', () =>
      this.handleRandomQuoteViaAPI()
    );
    this.randomQuoteOwnAPIBtn.addEventListener('click', () =>
      this.handleRandomQuoteViaAPI(true)
    );
  }
}

export default RandomQuotesApp;
