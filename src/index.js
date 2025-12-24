function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("peom");
  poemElement.innerHTML = "La tombe dit à la rose";
}

let poemFormElement = document.querySelector("#peom-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
