// require("dotenv").config()
// const dotenv = require('dotenv');
// const result = dotenv.config();

// const apiKey = process.env.APIKEY;
const apiKey = "57714286124cb62c52857771f79d063b"
const apiCountry = `https://flagsapi.com/BR/flat/64.png`;

// if (result.error) {
//     throw result.error;
// }

// console.log(result.parsed);

const apiCity = document.getElementById('city-input');
const searchBtn = document.getElementById('search');


const showWeatherData = (city) => {
    
}

searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    const city = apiCity.value;
    console.log(city);
})