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


/****************************/
/* Dynamic forms options    */
/****************************/


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


/* Education informations add and remove education */

// Function to add education
let educationCount = 1
function addEducation() {
  educationCount++;
  

  // Get the inputs from the user of educations
  const degree = document.getElementById("degree");
  const city = document.getElementById("school-city");
  const name = document.getElementById("school-name");
  const startDate = document.getElementById("start-degree-date");
  const endDate = document.getElementById("end-degree-date");
  const degreeDescription = document.getElementById("degree-description");

  if(!degree.value || !city.value || !name.value || !startDate.value || !endDate.value || !degreeDescription.value) {
    alert("Please Fill all inputs");
    return;
  }

  const educt = document.createElement("div");
  educt.classList.add("border", "border-2", "border-white", "text-white", "p-3");
  educt.id = `eductation-card-${educationCount}`
  educt.innerHTML = `
    <div class="first-side flex justify-between">
      <h2>${degree.value}</h2>
      <div class="date">
        ${startDate.value} to ${endDate.value}
      </div>
    </div>
    <div class="second-side">
      ${name.value} | ${city.value}
    </div>
    <div class="third-side">
      ${degreeDescription.value}
    </div>
  `

  const btn = document.createElement("button");
  btn.classList.add("border", "border-white");
  btn.textContent = "Remove";
  btn.onclick = function () {
    removeEducation(educt.id);
  }

  educt.appendChild(btn);

    document.getElementById("education-cards").appendChild(educt);

    // reset the inputs
    degree.value = "";
    city.value = "";
    name.value = "";
    startDate.value = "";
    endDate.value = "";
    degreeDescription.value = "";

}


// Function to remove educt field
function removeEducation(id) {
  const field = document.getElementById(id);
  if(field) {field.remove()}
}