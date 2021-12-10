const quotes = [
    {
        quote: "The only way you are going to have success is to have lots of failures first.",
        author: "Sergey Brin"
    },
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein"
    },
    {
        quote: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
        author: "Albert Einstein"
    },
    {
        quote: "Good friends, good books, and a sleepy conscience: this is the ideal life.",
        author: "Mark Twain"
    },
    {
        quote: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
        author: "Friedrich Nietzsche"
    },
    {
        quote: "Love all, trust a few, do wrong to none.",
        author: "William Shakespeare"
    },
    {
        quote: "Anyone who has never made a mistake has never tried anything new.",
        author: "Albert Einstein"
    },
    {
        quote: "The truth is rarely pure and never simple",
        author: "Oscar Wilde"
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = '"'+todaysQuote.quote+'"';
author.innerText = todaysQuote.author;