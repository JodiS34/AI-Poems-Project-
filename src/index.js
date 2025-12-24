function generatePoem(event) {
  event.preventDefault();

  alert("Generating poem");
}

let poemFormElement = document.querySelector("#peom-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
