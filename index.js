const apiKey='dcd3bd00dce8afdeaa053d5125828f38'
let city= "delhi"
async function fetchweatherData(city){
    const response =await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    console.log(response);
    let data = await response.json();
    console.log(data);
    console.log(data.name);
    console.log(data.main.temp);
    console.log(data.wind.speed);
    console.log(data.main.humidity);
    console.log(data.visibility);
    weatherUpdte(data)
}

let nameElement = document.querySelector(".city")
let tempretureEle = document.querySelector(".temp")
let airEle = document.querySelector(".wind-speed")
let humidityEle = document.querySelector(".humidity-speed")
let visibilityEle = document.querySelector(".visibility-speed")
let description =document.querySelector(".tempreture-text")
const date =document.querySelector(".date")

function weatherUpdte(value){
    console.log(value);
    nameElement.textContent = value.name;
    tempretureEle.textContent = `${Math.round(value.main.temp)}° C`;
    airEle.textContent = `${Math.round(value.wind.speed)} KM/H`;
    humidityEle.textContent = `${value.main.humidity}%`;
    visibilityEle.textContent = `${value.visibility / 1000} KM/H`;
    description.textContent = `${value.weather[0].description}`;

    const currentDate = new Date()
    date.textContent = currentDate.toDateString()
}

const formele = document.querySelector(".serch-form")
const inputele = document.querySelector(".city-input")

formele.addEventListener("submit",(Event) =>{
    Event.preventDefault();
    let city = inputele.value;
    if(city !== "" ){
        fetchweatherData(city);
        inputele.value = ""
    }
})