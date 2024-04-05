document.addEventListener("DOMContentLoaded", function () {
  const resultSpan = document.getElementById("result");
  const result2Span = document.getElementById("result2");
  const submitButton = document.getElementById("submit");
  const textId = document.getElementById("text");
  const textId2 = document.getElementById("text2");
  const options = document.querySelectorAll(".quiz-options li");

  let countA = parseInt(localStorage.getItem("countA")) || 0;
  let countB = parseInt(localStorage.getItem("countB")) || 0;
  let countC = parseInt(localStorage.getItem("countC")) || 0;
  const Option05 = localStorage.getItem("Option05");
  const Option06 = localStorage.getItem("Option06");
  const Option07 = localStorage.getItem("Option07");
  const Option08 = localStorage.getItem("Option08");

  function setResultText(option) {
    if (Option05 === "1. No") {
      resultSpan.textContent = "test!";
      // result2Span.textContent =
      //   "Under normal circumstances, having a bowel movement three times a day or once every three days are both considered reasonable ranges. As long as the bowel movements are regular, and the shape and color of the stool are healthy, there is no cause for concern!";
    } else if (option === "2. At least twice a day") {
      resultSpan.textContent = "Wow, You have very healthy poop habits!";
      result2Span.textContent =
        "Under normal circumstances, having a bowel movement three times a day or once every three days are both considered reasonable ranges. As long as the bowel movements are regular, and the shape and color of the stool are healthy, there is no cause for concern!";
    } else if (
      option === "3. Once or twice a day" ||
      option === "4. Every 2-3 days" ||
      option === "9. I prefer not to answer"
    ) {
      textId.style.display = "none";
      result2Span.textContent =
        "Under normal circumstances, having a bowel movement three times a day or once every three days are both considered reasonable ranges. As long as the bowel movements are regular, and the shape and color of the stool are healthy, there is no cause for concern!";
    } else if (
      option === "5. Every 4-7 days" ||
      option === "6. Every 2-3 weeks" ||
      option === "7. Once a month or longer" ||
      option === "8. I don't poop"
    ) {
      resultSpan.textContent = "OH NO, You may have constipation troubles!";
      result2Span.textContent =
        "Under normal circumstances, having a bowel movement three times a day or once every three days are both considered reasonable ranges. As long as the bowel movements are regular, and the shape and color of the stool are healthy, there is no cause for concern!";
    } else {
      textId.style.display = "none";
      textId2.style.display = "none";
    }
  }

  if (selectedOption) {
    setResultText(selectedOption);
  }

  if (!selectedOption) {
    submitButton.style.display = "none";
  }

  submitButton.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});
