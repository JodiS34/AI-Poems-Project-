function displayPoem(response) {
  let poem = response.data.answer;

  // Remove markdown code fences if the AI adds them
  poem = poem.replace(/```html\s*/gi, "");
  poem = poem.replace(/```/g, "");

  // Clear previous content so it doesn't stack
  document.querySelector("#poem").innerHTML = "";

  new Typewriter("#poem", {
    strings: poem,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instruction");
  let apiKey = "353edb486cab43d0074ob78cfft5c809";

  let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;

  let context = `You are a romantic poem expert and love to write short poems.
Your mission is to generate a 4-line poem in basic HTML and separate each line with a <br/>.
Make sure to follow the user instructions. Do not include a title to the poem.
Sign the poem with "SheCodes AI" inside a <strong> element at the end of the poem and NOT at the beginning.`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.style.display = "block";
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">Generating a French poem about ${instructionsInput.value}...</div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
