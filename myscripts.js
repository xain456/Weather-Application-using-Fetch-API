var input = document.querySelector(".input_text");
var name = document.querySelector("#name");
var button = document.querySelector(".submit");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var clouds = document.querySelector(".clouds");
button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=ed8f8b151948ea38a47a2e8c034eb68f"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var tempValue = data["main"]["temp"];
      var nameValue = data["name"];
      var descValue = data["weather"][0]["description"];

      name.innerHTML = nameValue;
      desc.innerHTML = "Desc - " + descValue;
      temp.innerHTML = "Temp - " + tempValue;
      input.value = "";
    });
});
