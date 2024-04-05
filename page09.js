document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#name").innerHTML = localStorage.getItem("name");
  document.querySelector("#name").style.color = localStorage.getItem("color");
});

document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".quiz-options li");
  const submitButton = document.getElementById("submit");

  let selectedOption = null;

  submitButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
