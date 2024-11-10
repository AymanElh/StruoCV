const prevBtns = document.querySelectorAll(".prev-btn");
const nextBtns = document.querySelectorAll(".next-btn");

const formSteps = document.querySelectorAll(".form-step");

let counter = 0;


nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    formSteps[counter].classList.replace("flex", "hidden")
    counter++;
    formSteps[counter].classList.replace("hidden", "flex")
  })
})

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    formSteps[counter].classList.replace("flex", "hidden");
    counter--;
    formSteps[counter].classList.replace("hidden", "flex");
  })
})