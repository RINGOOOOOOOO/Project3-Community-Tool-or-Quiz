document.addEventListener("DOMContentLoaded", function () {
  const resultSpan = document.getElementById("result");
  const result2Span = document.getElementById("result2");
  const submitButton = document.getElementById("submit");
  const textId = document.getElementById("text");
  const textId2 = document.getElementById("text2");
  const options = document.querySelectorAll(".quiz-options li");

  let selectedOption = localStorage.getItem("selectedOption");

  function setResultText(option) {
    if (option === "1. Like a jet fighter, anytime, anywhere") {
      resultSpan.textContent = "OH no, you may have diarrhea troubles!";
      result2Span.textContent =
        "Under normal circumstances, having a bowel movement three times a day or once every three days are both considered reasonable ranges. As long as the bowel movements are regular, and the shape and color of the stool are healthy, there is no cause for concern!";
    } else if (option === "2. At least twice a day") {
      resultSpan.textContent = "Wow, You have very healthy poop habits!";
      result2Span.textContent =
        "Under normal circumstances, having a bowel movement three times a day or once every three days are both considered reasonable ranges. As long as the bowel movements are regular, and the shape and color of the stool are healthy, there is no cause for concern!";
    } else if (
      option === "3. Once or twice a day" ||
      option === "4. Every 2-3 days" ||
      option === "9. I prefer not to answer"
    ) {
      //   const result2Span = document.getElementById("result2Span");
      //   result2Span.style.marginTop = "10%";
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

  options.forEach((option) => {
    option.addEventListener("click", function () {
      options.forEach((opt) => opt.classList.remove("selected"));
      this.classList.add("selected");
      selectedOption = this.textContent.trim();
      submitButton.style.display = "block";
    });
  });

  submitButton.addEventListener("click", function () {
    localStorage.setItem("selectedOption", selectedOption);
    window.location.href = "page05.html";
  });
});
