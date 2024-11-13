// const prevBtns = document.querySelectorAll(".prev-btn");
// const nextBtns = document.querySelectorAll(".next-btn");

// const formSteps = document.querySelectorAll(".form-step");

// let counter = 0;


// nextBtns.forEach(btn => {
//   btn.addEventListener("click", () => {
//     formSteps[counter].classList.replace("flex", "hidden")
//     counter++;
//     formSteps[counter].classList.replace("hidden", "flex")
//   })
// })

// prevBtns.forEach(btn => {
//   btn.addEventListener("click", () => {
//     formSteps[counter].classList.replace("flex", "hidden");
//     counter--;
//     formSteps[counter].classList.replace("hidden", "flex");
//   })
// })


const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const formSteps = document.querySelectorAll(".form-step");
const submitBtn = document.querySelector(".submit-btn");

let counter = 0;
function stepperForm() {
  formSteps.forEach(step => step.classList.replace("flex", "hidden"))

  formSteps[counter].classList.replace("hidden", "flex");

  if(counter === 0) {
    prevButton.classList.add("hidden");
  } else {
    prevButton.classList.remove("hidden");
  }

  if(counter === formSteps.length-1) {
    nextButton.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  } else {
    nextButton.classList.remove("hidden");
    submitBtn.classList.add("hidden");
  }

}

nextButton.addEventListener("click", () => {
  if(counter <= formSteps.length-1) {
    counter++;
    stepperForm();
  }
})


prevButton.addEventListener("click", () => {
  if(counter > 0) {
    counter--;
    stepperForm();
  }
})


stepperForm();

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
  linkInput.classList.add("social-link", "text-sm", "rounded-lg",  "block", "w-full", "p-2.5", "bg-gray-700", "border-gray-600", "placeholder-gray-400", "text-white", "focus:ring-blue-500", "focus:border-blue-500");


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
  educt.classList.add("educ-container","border", "border-2", "border-white", "text-white", "p-3");
  educt.id = `eductation-card-${educationCount}`
  educt.innerHTML = `
    <div class="first-side flex justify-between">
      <h2 class="degree-name">${degree.value}</h2>
      <div class="date">
        <span class="start-date">${startDate.value}</span> to <span class="end-date">${endDate.value}</span>
      </div>
    </div>
    <div class="second-side">
      <span class="school-name-educ">${name.value}</span> | <span class="school-city-educ">${city.value}</span>
    </div>
    <div class="degree-description-educ">
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



/* Experience informatins */

// Function to add experience
let expCounter = 0;
function addExp() {
  expCounter++;

  const jobTitle = document.getElementById("job-title-input");
  const organization = document.getElementById("organization-input");
  const expStart = document.getElementById("start-exp-date-input");
  const expEnd = document.getElementById("end-exp-date-input");
  const expDescription = document.getElementById("exp-description-input");

  // console.log(jobTitle, organization, expStart, expEnd, expDescription)

  if(!jobTitle.value || !organization.value || !expStart.value || !expEnd.value || !expDescription) {
    alert("Please fill all the inputs");
    return;
  }

  const jobItem = document.createElement("div");
  jobItem.id = `jobcontainer${expCounter}`
  jobItem.classList.add(
    "exp-container",
    "px-5",
    "py-3",
    "flex",
    "flex-col",
    "gap-2",
    "rounded-xl",
    "shadow-lg",
    "shadow-cyan-500/50",
    "text-white"
  )

  jobItem.innerHTML = `
    <div id="first-side" class="flex justify-between items-start">
      <div class="flex flex-col">
        <h2 class="exp-title font-bold text-xl text-sky-500">${jobTitle.value}</h2>
        <p class="orgranization-name font-medium text-sky-200">${organization.value}</p>
      </div>
       <div class="">
        <span class="start-exp-date">${expStart.value}</span> to <span class="end-exp-date">${expEnd.value}</span>
      </div>
    </div>
    <div class="flex justify-between">
      <p class="exp-description">
        ${minimizeText(expDescription.value, 50)}      
      </p>
      <button type="button" onclick="removeExp(${jobItem.id})"
       class="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-600 p-1.5 inline-flex items-center justify-center h-8 w-8 
        text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `

  document.querySelector(".experience-informations").appendChild(jobItem);

  // reset inputs
  jobTitle.value = ""; organization.value = ""; expStart.value = ""; expEnd.value = ""; expDescription.value = "";

  function minimizeText(text, maxsize) {
    if(text.length > maxsize) {
      return text.slice(0, maxsize);
    }

    return text;
  }
}

// Function to remove experience
function removeExp(id) {
  const jobDiv = document.getElementById(id);
  console.log(id);
  id.remove()
}

/* Skills */

// Function to add skill 
let skillCount = 0;
function addSkill() {
  skillCount++;

  const skill = document.getElementById("skill");
  if(!skill.value) {
    alert("Please filll the inputs");
    return;
  }

  const skillItem = document.createElement("div")
  skillItem.classList.add("skills", "flex", "items-center", "max-w-[12rem]", "p-4", "text-gray", "bg-gray-800", "rounded-lg", "shadow", "text-sky-400", "text-xl");
  skillItem.id = `skill${skillCount}`
  skillItem.innerHTML = `
    <div class="skill text-sm font-semibold mr-2" id="skill-name-${skillCount}">
       ${skill.value}
    </div>
    <div class="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
      <button onclick="removeSkill(${skillItem.id})" type="button" class="ms-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-600 p-1.5 inline-flex items-center justify-center h-8 w-8 
        text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close">
          <span class="sr-only">Close</span>
            <i class="fa-solid fa-x" style="color: #74C0FC;"></i>
       </button>
    </div>
  `


  skill.value = "";

  document.querySelector(".skill-items").appendChild(skillItem);
}

// Function to remove skill
function removeSkill(id) {
  // const skillDiv = document.getElementById(id);
  console.log(id);
  // console.log(skillDiv);
  id.remove()
}



/* Languages informations dynamicite */

// function to add languages dynamically
let languageCounter = 0;
function addLanguage() {
  languageCounter++;
  const name = document.getElementById("language-name-input");
  const level = document.getElementById("language-level-input");

  if(!name.value || !level.value) {
    alert("Please fill all inputs");
    return;
  }

  const languageContainer = document.createElement("div");
  languageContainer.id = `languagecontainer${languageCounter}`
  languageContainer.classList.add(
    "language",
    "shadow-lg",
    "shadow-indigo-500/30",
    "px-6",
    "py-2",
    "flex",
    "justify-between",
    "items-center",
    "w-2/6",
    "rounded-lg",
    "bg-gray-800",
    "mb-6"
  )
   
  languageContainer.innerHTML = `
    <p class="language-name font-semibold text-lg text-sky-500">${name.value}</p>
    <p class="language-level font-medium text-white">${level.value}</p>
    <button type="button" onclick="removeLanguage(${languageContainer.id})">
      <i class="fa-solid fa-x" style="color: #74C0FC;"></i>
    </button>
  `

  document.querySelector(".languages-container").appendChild(languageContainer);

  // reset inputs 
  name.value = "";
  level.value = "";
}

// Function to remove language
function removeLanguage(id) {
  console.log(id);
  id.remove();
}