const data=[{
    content: "The only limit to our realization of tomorrow is our doubts of today.",
  },
  {
    content: "In the middle of every difficulty lies opportunity.",
  },
  {
    content: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  },
  {
    content: "Do what you can, with what you have, where you are.",
  },
  {
    content: "Happiness is not something ready made. It comes from your own actions.",
  },
  {
    content: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    content: "Your time is limited, so don’t waste it living someone else’s life.",
  },
  {
    content: "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    content: "Believe you can and you're halfway there.",
  },
  {
    content: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  }];

  
const btn=document.getElementsByClassName("btn")[0];
const contentContainer = document.getElementsByClassName("content-container")[0];


btn.addEventListener("click", function() {
  const p= createParagraph(data[Math.floor(Math.random() * data.length)].content);
  contentContainer.appendChild(p);
  p.style=`background-color: rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  setTimeout(() => {
    contentContainer.removeChild(p);
  }, 5000);

});

function createParagraph(text) {
    const p = document.createElement("p");
    const textNode = document.createTextNode(text);
    p.appendChild(textNode);
    p.classList.add("content");
    return p;
}