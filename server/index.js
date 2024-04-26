const express = require('express');
const cors = require('cors');
const quotes = require('./data/quotes');
const app = express();
const PORT = 3000;

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

const corsOptions = {
  origin: '*', // default cross-origin value for CORS
  // origin: ['http://localhost:8080', 'http://127.0.0.1:8080'],
};

app.use(cors(corsOptions));

app.get('/quotes/random-single', (req, res) => {
  const randomQuote = getRandomQuote();
  res.json(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Quotes API service is running on port ${PORT}`);
});
