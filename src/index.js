function displayPoem(response) {
  let poemBox = document.querySelector("#poem");
  new Typewriter(poemBox, {
    strings: response.data.answer,
    autoStart: true,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#userTopic");
  console.log(instructionInput);

  let apiKey = "5fobe02b0dff93d79ecc47a523d0f3t0";
  let prompt = `Generate a German poem about ${instructionInput}`;
  let context =
    "You are an romantic poem expert who loves to write short poems";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}
let poemForm = document.querySelector("#poem-generator-form");
console.log(poemForm);
poemForm.addEventListener("submit", generatePoem);
