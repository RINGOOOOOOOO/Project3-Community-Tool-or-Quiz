document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("#name").innerHTML = localStorage.getItem("name");
  document.querySelector("#name").style.color = localStorage.getItem("color");
});
document.addEventListener("DOMContentLoaded", function () {
  const resultSpan = document.getElementById("result");
  const result2Span = document.getElementById("result2");
  const result3Span = document.getElementById("result3");
  const submitButton = document.getElementById("submit");

  const Option05 = localStorage.getItem("Option05");
  const Option06 = localStorage.getItem("Option06");
  const Option07 = localStorage.getItem("Option07");

  console.log("page07:", Option07);
  console.log("page06:", Option06);
  console.log("page05:", Option05);

  if (Option05 === "2. No") {
    resultSpan.textContent =
      "You need to pay attention to healthy eating, nutrition balance, and fiber intake;";
  }
  if (Option06 === "1. yeah") {
    result2Span.textContent = "Relax your mind while 💩 and avoid anxiety;";
  }
  if (Option07 === "3. 10-30min" || Option07 === "4. over 30min") {
    result3Span.textContent = "It's best to keep 💩 time within 10 minutes;";
  }

  submitButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
