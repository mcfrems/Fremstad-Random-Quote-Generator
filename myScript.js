console.log(1+Math.floor(Math.random()*100))

//alert("hi");

const testurl =  "https://api.quotable.io/quotes?page=5"; //need to randomize page number

//test the api
fetch(testurl)
.then(res =>res.json())
.then(data => {
    console.log(data.results[0].content);
    console.log(data.results[0].author);
});

//create event listener for button
document.getElementById("btn-new-quote").addEventListener("click", getQuote);


function getQuote(){
    //get new quote
    let page = 1+Math.floor(Math.random()*100);
    let quoteText = document.getElementById("quote-text");
    let quoteAuthor = document.getElementById("quote-author");
    //const quoteUp = document.getElementById("quote-up");
    //const quoteDown = document.getElementById("quote-down");
    console.log("quote text is " + quoteText);
    console.log("quote author is" + quoteAuthor);
    //console.log(quoteUp);

    //create url with pagenumber
    const endpoint = `https://api.quotable.io/quotes?page=${page}`

    //make an api request to get new quote
    fetch(endpoint)
    .then(response => response.json())
    .then(data => {
  
        let quote = data.results[0].content;
        let author = data.results[0].author;
  
        quoteText.textContent = quote;
        quoteAuthor.textContent = author;
    })
}
