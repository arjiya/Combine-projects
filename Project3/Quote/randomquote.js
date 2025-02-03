let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

const fallbackQuotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
        author: "Buddha"
    },
    {
        quote: "Happiness is not something ready-made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "You miss 100% of the shots you don’t take.",
        author: "Wayne Gretzky"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Believe you can, and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    }
];

const getQuote = () => {
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch from API");
            }
            return response.json();
        })
        .then((data) => {
            quote.textContent = `"${data.content}"`;
            author.textContent = `- ${data.author}`;
        })
        .catch(() => {
           
            const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
            const randomQuote = fallbackQuotes[randomIndex];
            quote.textContent = `"${randomQuote.quote}"`;
            author.textContent = `- ${randomQuote.author}`;
        });
};


window.addEventListener("load", getQuote);


btn.addEventListener("click", getQuote);
