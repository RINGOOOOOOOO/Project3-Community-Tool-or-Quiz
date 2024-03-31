document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#name").innerHTML = localStorage.getItem("name");
  document.querySelector("#name").style.color = localStorage.getItem("color");
});

document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".quiz-options li");
  const submitButton = document.getElementById("submit");

  let selectedOption = null;

  options.forEach((option) => {
    option.addEventListener("click", function () {
      if (selectedOption) {
        selectedOption.classList.remove("selected");
      }

      this.classList.add("selected");
      selectedOption = this;

      submitButton.style.display = "block";
    });
  });

  submitButton.addEventListener("click", function () {
    if (selectedOption) {
      if (selectedOption.textContent.trim() === "3. No") {
        alert("Bye!");
      } else {
        window.location.href = "page03.html";
      }
    }
  });
});
