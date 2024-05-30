const quotes = [
    {
        quote: 'Do you want to spend the rest of your life selling sugared water or do you want a chance to change the world?',
        author: 'Steve Jobs',
    },
    {
        quote: 'Underpromise; overdeliver.',
        author: 'Tom Peters',
    },
    {
        quote: 'All my possessions for a moment of time.',
        author: 'Elizabeth I',
    },
    {
        quote: 'Those who cannot remember the past are condemned to repeat it.',
        author: 'George Santayana',
    },
    {
        quote: 'The unexamined life is not worth living.',
        author: 'Socrates',
    },
    {
        quote: 'If you think your teacher is tough, wait until you get a boss. He does not have tenure.',
        author: 'Bill Gates',
    },
    {
        quote: 'Hate the sin, love the sinner.',
        author: 'Mahatma Gandhi',
    },
    {
        quote: 'To love is to receive a glimpse of heaven.',
        author: 'Karen Sunde',
    },
    {
        quote: 'The hour of departure has arrived, and we go our ways - I to die, and you to live. Which is better God only knows.',
        author: 'Socrates',
    },
    {
        quote: 'The purpose of life is to fight maturity.',
        author: 'Dick Werthimer',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
