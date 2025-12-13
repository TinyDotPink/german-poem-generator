function generatePoem(event) {
  event.preventDefault();
  let poemBox = document.querySelector("#poem");
  new Typewriter(poemBox, {
    strings: "Alles geben die Götter, die unendlichen",
    autoStart: true,
  });
}
let poemForm = document.querySelector("#poem-generator-form");
console.log(poemForm);
poemForm.addEventListener("submit", generatePoem);
