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
      window.location.href = "page09.html";
    }
  });
});
