function displayresult() {
    var city = document.getElementById("city").value;
    var apikey='793717529a647bd315bc735091f51690';
    fetch('https://api.openweathermap.org/data/2.5/weather?q='
    + city + '&appid='+apikey+'&units=metric')
       .then(response => response.json())
       .then(data => {
          var t = data['main']['temp']
          document.getElementById("output").innerHTML = t;
})
}
