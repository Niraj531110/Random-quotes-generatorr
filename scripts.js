const quotes = [
    { text: "Life is 10% what happens to us and 90% how we react to it", author: "Charles R. Swindoll" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "Life is 10% what happens to us and 90% how we react to it", author: "Charles R. Swindoll" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "Life is 10% what happens to us and 90% how we react to it", author: "Charles R. Swindoll" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "The purpose of our lives is to be happy.", author: " Dalai Lama" },
    // Add more quotes here
];

const colors = ["#FF5733", "#33FF57", "#5733FF", "#FF33C7", "#33E4FF", "#E433FF"];

const textElement = document.getElementById("text");
const authorElement = document.getElementById("author");
const nextButton = document.getElementById("next-button");
const container = document.querySelector(".container");

nextButton.addEventListener("click", getNextQuote);

function getNextQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    textElement.textContent = randomQuote.text;
    authorElement.textContent = `— ${randomQuote.author}`;
    
    // Change quote and author text color to the new random color
    textElement.style.color = randomColor;
    authorElement.style.color = randomColor;
    
    container.style.backgroundColor = randomColor;
}
function getNextQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const textColor = colors[Math.floor(Math.random() * colors.length)]; // New line for text color

    textElement.textContent = randomQuote.text;
    authorElement.textContent = `— ${randomQuote.author}`;
    container.style.backgroundColor = randomColor;
    textElement.style.color = textColor; // Set the text color
    authorElement.style.color = textColor; // Set the author color
}


function getNextQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomBackgroundColor = colors[Math.floor(Math.random() * colors.length)];
    const randomTextColor = colors[Math.floor(Math.random() * colors.length)];

    textElement.textContent = randomQuote.text;
    authorElement.textContent = `— ${randomQuote.author}`;
    container.style.backgroundColor = "white"; // Keep quote box background color white
    textElement.style.color = randomTextColor;
    authorElement.style.color = randomTextColor;

    document.body.style.backgroundColor = randomBackgroundColor; // Set background color outside the box

    // Position "By Niraj" below the quote box
    const creditElement = document.getElementById("credit");
    creditElement.style.color = randomTextColor;
    creditElement.style.backgroundColor = randomBackgroundColor;
}

getNextQuote();



