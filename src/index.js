function displayPoem(response) {
  console.log(response.data.answer);
  let poemBox = document.querySelector("#poem");
  new Typewriter(poemBox, {
    strings: response.data.answer,
    autoStart: true,
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector(".instructions");
  console.log(userInput.value);

  let apiKey = "5fobe02b0dff93d79ecc47a523d0f3t0";
  let prompt = `Generate a German poem about ${userInput.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}
let poemForm = document.querySelector("#poem-generator-form");
console.log(poemForm);
poemForm.addEventListener("submit", generatePoem);
