console.log(1+Math.floor(Math.random()*100))

alert("hi");

const testurl =  "https://api.quotable.io/quotes"; //need to add pages to url I think

//test the api
fetch(testurl)
.then(res =>res.json())
.then(data => {
    console.log(data.results[0].content);
    console.log(data.results[0].author);
});

//create event listener for button
document.getElementById("new-quote").addEventListener("click", getQuote);

function getQuote(){}

/*const results = document.getElementById("results");

function getForecast(){
    console.log("click");
    //get zipcode
    const zipcode = document.getElementById("zipcode").value ;
    console.log("zipcode is " + zipcode);
    //create url with this zipcode
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`;

    //make an api request to get forecast for zipcode
    fetch(endpoint)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        //build html that goes in div
        let forecast = `<h3>City: ${data.name} </h3>`;
        results.innerHTML = forecast;
        //display the temp in p tag
        results.innerHTML += `<p>Temp: ${data.main.temp}</p>`
        results.innerHTML += `<p>Description: ${data.weather[0].description}</p>`
    })






    
/*const apiKey = "acc785dd4ef0fe813c807aa2818b9994";

const testurl = "https://api.openweathermap.org/data/2.5/weather?zip=68803&units=imperial&appid=acc785dd4ef0fe813c807aa2818b9994";

//test the api
fetch(testurl)
.then(res =>res.json())
.then(data => {
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.weather[0].description);
});

//create event listener for button
document.getElementById("btn-forecast").addEventListener("click", getForecast);

const results = document.getElementById("results");

function getForecast(){
    console.log("click");
    //get zipcode
    const zipcode = document.getElementById("zipcode").value ;
    console.log("zipcode is " + zipcode);
    //create url with this zipcode
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&units=imperial&appid=${apiKey}`;

    //make an api request to get forecast for zipcode
    fetch(endpoint)
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        //build html that goes in div
        let forecast = `<h3>City: ${data.name} </h3>`;
        results.innerHTML = forecast;
        //display the temp in p tag
        results.innerHTML += `<p>Temp: ${data.main.temp}</p>`
        results.innerHTML += `<p>Description: ${data.weather[0].description}</p>`
    })

    //display the results on webpage
} */



