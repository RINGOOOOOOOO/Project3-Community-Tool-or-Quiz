document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".quiz-options li");
  const submitButton = document.getElementById("submit");

  let Option06 = "";
  let countA = parseInt(localStorage.getItem("countA")) || 0;
  let countB = parseInt(localStorage.getItem("countB")) || 0;
  let countC = parseInt(localStorage.getItem("countC")) || 0;
  const Option05 = localStorage.getItem("Option05");

  options.forEach((option) => {
    option.addEventListener("click", function () {
      options.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");

      Option06 = this.textContent.trim();
      console.log("page06:", Option06);
      console.log("page05:", Option05);
      console.log("A:", countA);
      console.log("B:", countB);
      console.log("C:", countC);
      submitButton.style.display = "block";
    });
  });

  submitButton.addEventListener("click", function () {
    localStorage.setItem("Option06", Option06);
    window.location.href = "page07.html";
  });
});
