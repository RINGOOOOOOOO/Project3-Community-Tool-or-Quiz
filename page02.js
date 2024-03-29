document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#name").innerHTML = localStorage.getItem("name");
  document.querySelector("#name").style.color = localStorage.getItem("color");
});
