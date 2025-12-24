function displayPoem(response); {

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

  let apiKey = "353edb486cab43d0074ob78cfft5c809";
    let prompt = "Generate a French poem about Flowers";
        let context = "";
        letapiURL =
    "https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}");

    axios.get(apiURL).then(displayPoem);
  
}
let poemFormElement = document.querySelector("#peom-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
