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

/* Social links fileds (add and remove skill functions) */

// Function to add a social link on contact information step.
let linkCounter = 0;
function addLinkField() {
  linkCounter++;

  // create the container of the link
  const linkContainer = document.createElement("div");
  linkContainer.id = `link${linkCounter}`

  // create input for the link
  const linkInput = document.createElement("input");
  linkInput.type = "text";
  linkInput.placeholder = "Enter your social link eg. github, linkedin ..."
  linkInput.classList.add("text-sm", "rounded-lg",  "block", "w-full", "p-2.5", "bg-gray-700", "border-gray-600", "placeholder-gray-400", "text-white", "focus:ring-blue-500", "focus:border-blue-500");


  // remove button
  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.innerText = "Remove";
  removeBtn.classList.add("text-white", "focus:outline-none", "focus:ring-4", "font-medium", "rounded-lg", "text-sm", "px-5", "py-2.5", "me-2", "mb-2", "bg-gray-800", "hover:bg-gray-700", "focus:ring-gray-700", "border-gray-700", "mt-3");
  removeBtn.onclick = function() {
    removeLink(linkContainer.id);
  }

  // Save the link to the html
  linkContainer.appendChild(linkInput);
  linkContainer.appendChild(removeBtn);

  document.getElementById("social-links").appendChild(linkContainer);
}

// Function to remove skill
function removeLink(id) {
  const elem = document.getElementById(id);
  if(elem) {elem.remove()}
}