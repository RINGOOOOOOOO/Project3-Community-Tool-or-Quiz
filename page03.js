document.addEventListener("DOMContentLoaded", function () {
  // document.querySelector("#jiangkang").innerHTML =
  //   localStorage.getItem("jiangkang");
  // document.querySelector("#cuanxi").innerHTML = localStorage.getItem("cuanxi");
  // document.querySelector("#bianmi").innerHTML = localStorage.getItem("bianmi");

  const submitButton = document.getElementById("submit");
  const options = document.querySelectorAll(".quiz-options li");
  let selectedOption = "";

  options.forEach((option) => {
    option.addEventListener("click", function () {
      options.forEach((opt) => opt.classList.remove("selected"));

      this.classList.add("selected");

      selectedOption = this.textContent.trim();
      submitButton.style.display = "block";
    });
  });

  submitButton.addEventListener("click", function () {
    window.location.href = "page04.html";
    localStorage.setItem("selectedOption", selectedOption);
  });
});
