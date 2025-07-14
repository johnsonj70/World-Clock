
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
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);