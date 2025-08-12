
const data = [
  {
    content: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  },
  {
    content: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    content: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    content: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    content: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    content: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    content: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs"
  },
  {
    content: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    content: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    content: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    author: "Zig Ziglar"
  }
];



const btn=document.getElementById("quoteButton");
const quoteText=document.getElementById("quote");
const authorText=document.getElementById("author");

 quoteText.textContent = `"${data[0].content}"`;
authorText.textContent = `- ${data[0].author}`;

btn.addEventListener("click", function() {
   var randomIndex = Math.floor(Math.random() * data.length);
    var quote = data[randomIndex];
    quoteText.textContent = `"${quote.content}"`;
    authorText.textContent = `- ${quote.author}`;
});