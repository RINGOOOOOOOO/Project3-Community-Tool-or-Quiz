document.addEventListener("DOMContentLoaded", function () {
  const options = document.querySelectorAll(".quiz-options li");
  const submitButton = document.getElementById("submit");

  let Option08 = "";
  let countA = parseInt(localStorage.getItem("countA")) || 0;
  let countB = parseInt(localStorage.getItem("countB")) || 0;
  let countC = parseInt(localStorage.getItem("countC")) || 0;
  const Option05 = localStorage.getItem("Option05");
  const Option06 = localStorage.getItem("Option06");
  const Option07 = localStorage.getItem("Option07");

  options.forEach((option) => {
    option.addEventListener("click", function () {
      options.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");

      Option08 = this.textContent.trim();
      console.log("page08:", Option08);
      console.log("page07:", Option07);
      console.log("page06:", Option06);
      console.log("page05:", Option05);
      console.log("A:", countA);
      console.log("B:", countB);
      console.log("C:", countC);
      submitButton.style.display = "block";
    });
  });

  submitButton.addEventListener("click", function () {
    localStorage.setItem("Option08", Option08);
    if (
      countB === 2 &&
      Option08 === "1. yeah" &&
      Option07 === "2. 3-10min" &&
      Option06 === "2. No" &&
      Option05 === "1. yeah"
    ) {
      window.location.href = "page09.html";
    } else {
      window.location.href = "page10.html";
    }
  });
});
