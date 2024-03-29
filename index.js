document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name");
  const nextPageLink = document.getElementById("nextPage");
  const radios = document.querySelectorAll(".radio");

  const defaultColor = "#564436";

  nameInput.addEventListener("input", function () {
    const val = this.value.trim();
    nextPageLink.style.display = val ? "block" : "none";
    const selectedColor = localStorage.getItem("color") || defaultColor;
    nameInput.style.color = selectedColor;
    localStorage.setItem("name", val);
  });

  for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function () {
      localStorage.setItem("color", this.value);
    });
  }
});
