document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submit");
  const options = document.querySelectorAll(".quiz-options li");
  let selectedOption = "";

  options.forEach((option) => {
    option.addEventListener("click", function () {

      countA = 0;
      countB = 0;
      countC = 0;

      options.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");

      selectedOption = this.textContent.trim();

      switch (this.id) {
        case "A":
          countA = 1;
          break;
        case "B":
          countB = 1;
          break;
        case "C":
          countC = 1;
          break;
        default:
          break;
      }
      console.log("A:", countA);
      console.log("B:", countB);
      console.log("C:", countC);
      submitButton.style.display = "block";
    });
  });

  submitButton.addEventListener("click", function () {
    localStorage.setItem("selectedOption", selectedOption);
    localStorage.setItem("countA", countA);
    localStorage.setItem("countB", countB);
    localStorage.setItem("countC", countC);

    window.location.href = "page04.html";
  });
});
