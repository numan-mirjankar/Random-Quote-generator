

const quote = document.getElementById("quote");
const apiUrl = "https://api.kanye.rest";

async function getQuote(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        quote.innerHTML = data.quote;
    } catch (error) {
        console.error("Error fetching quote:", error);
        quote.innerHTML = "Failed to fetch quote";
    }
}

const newQuoteButton = document.getElementById("new-quote");
newQuoteButton.addEventListener("click", function() {
    getQuote(apiUrl);
});

function tweet() {
    window.open("https://twitter.com/intent/tweet?text=Hello%20world");
}


getQuote(apiUrl);
