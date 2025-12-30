function displayPoem(response) {

    console.log("poem generatated");

    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}
function generatePoem(event) {
    event.preventDefault();
    
    let instructionsInput = document.querySelector("#user=instruction");
  let apiKey = "353edb486cab43d0074ob78cfft5c809";
    let prompt = ' User instructions: Generate a French poem about ${instructionsInput.value}';
    let context = 'You are a romantic Poem expert and love to write short peoms. Your mission is to generate a 4 line poem in basic HTML and seperate each line with a <br/>. Make sure to follow the user instructions.Do not include a title to the poem. 
    Sign the poem with 'SheCodes  AI' inside a <strong> element at the end of the poem and NOT at the beginning </strong>.';
        letapiURL = 'https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}';

    let poemElement = document.querySelector("#poem");
    poemElement.computedStyleMap.display = "block"; 
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = '<div class= "generating">Generating a French poem about ${instructionsInput.value}</div>';
    
   
    axios.get(apiURL).then(displayPoem);
  
}
let poemFormElement = document.querySelector("#peom-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
