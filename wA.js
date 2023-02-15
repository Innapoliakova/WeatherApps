window.addEventListener('load', () => {
  let long;
  let lat;

  let temperatureDescription = document.querySelector('.temperature-description'); 
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimezone = document.querySelector('.location-timezone'); 

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      let apiKey = 'e0edaa0a551590a9b03a5f54aad144a9'; 
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`; // add units=metric to get temperature in Celsius

      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
         
          const { name } = data; 
          const { temp } = data.main; 
          const { description, icon } = data.weather[0]; 

          locationTimezone.textContent = name;
          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = description;
        });
    });
  }
});