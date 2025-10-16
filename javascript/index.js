
function updateTime () {
// London
let londonElement = document.querySelector("#london");
    if (londonElement) {
        let londonDateElement = londonElement.querySelector(" .date");
        let londonTimeElement = londonElement.querySelector(" .time");
        let londonTime = moment().tz("Europe/London");

        londonDateElement.innerHTML = londonTime.format("D MMMM YYYY");
        londonTimeElement.innerHTML = londonTime.format("HH:mm:ss [<small>]A[</small>]");
    }


// New York
let newYorkElement = document.querySelector("#new-york");
if (newYorkElement) {

    let newYorkDateElement = newYorkElement.querySelector(" .date");
    let newYorkTimeElement = newYorkElement.querySelector(" .time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML =newYorkTime.format("D MMMM YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format("HH:mm:ss [<small>]A[</small>]");
    }


let parisElement = document.querySelector("#paris");
  if (parisElement) {

    let parisDateElement = parisElement.querySelector(" .date");
    let parisTimeElement = parisElement.querySelector(" .time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("D MMMM YYYY");
    parisTimeElement.innerHTML = parisTime.format("HH:mm:ss [<small>]A[</small>]");
  }

let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {

    let losAngelesDateElement = losAngelesElement.querySelector(" .date");
    let losAngelesTimeElement = losAngelesElement.querySelector(" .time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("D MMMM YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("HH:mm:ss [<small>]A[</small>]");
  }

let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {

    let tokyoDateElement = tokyoElement.querySelector(" .date");
    let tokyoTimeElement = tokyoElement.querySelector(" .time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("D MMMM YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss [<small>]A[</small>]");
  }
}



function updateCity (event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current"){
      cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment.tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("D MMMM YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("H:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="index.html" class="all-cities">ALL CITIES</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);