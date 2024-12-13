const apikey = "43d36f387547035f3ed6e10cee583156";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`)
    var data = await response.json();

    // console.log(data);
    
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
    // console.log(data.weather.main);
    // console.log(data.weather[0].main);

    
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src = "./assets/images/clouds.png"
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src = "./assets/images/rain.png"
    
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src = "./assets/images/clear.png"
    }
    else if(data.weather[0].main=="Drizle"){
        weatherIcon.src = "./assets/images/drizzle.png"
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src = "./assets/images/mist.png"
    }
    document.querySelector('.weather').style.display = "block";
}
searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value); 
})