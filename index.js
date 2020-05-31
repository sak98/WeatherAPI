var search = document.getElementById("search");
search.addEventListener("keyup", e => {
  var getCityName = e.target.value;
  getWeather(getCityName);
});

function getWeather(getCityName) {
  const weatherApi = `
  http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=b7a1f7118d66ca41dad9e02f93b413e1`;
  window
    .fetch(weatherApi)
    .then(data => {
      data
        .json()
        .then(weather => {
          var output = "";
          console.log(weather);
          var weatherData = weather.weather;
          for (let x of weatherData) {
            output += `
                    <div class="mt-4 weatherBlock">
                        <div class="card-body1">
                            <h1>${weather.name}</h1>
                            <span class="icon">
                            <img src="http://openweathermap.org/img/wn/${x.icon}.png" /></span>
                            <p><span>temp:</span>
                            <span class="temp">${weather.main.temp}&deg;c</span></p>
                            <span class="des float-left">${x.description}</span>
                            <span class="des float-right">${x.main}</span>
                        </div>
                    </div>
                  `;
            document.getElementById("template").innerHTML = output;
          }
        })
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
}