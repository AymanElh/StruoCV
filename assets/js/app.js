// Object to store the resume informations
let resumeForm = JSON.parse(localStorage.getItem("resumeInfos")) || {};

function collectData() {

  // Personal informations
  resumeForm.personalInformations = {
    firstName: document.getElementById("first-name").value,
    lastName: document.getElementById("last-name").value,
    postTitle: document.getElementById("post-title").value
  }


  // Contact informations
  const links = document.querySelectorAll(".social-link");
  const linkValues = Array.from(links).map(link => link.value);

  resumeForm.contactInformations = {
    phoneNumber: document.getElementById("phone-number").value,
    email: document.getElementById("email").value,
    links: linkValues
  }


  // Education informations
  let educations = []
  const educationsValues = Array.from(document.querySelectorAll(".educ-container"));
  educationsValues.forEach(v => {
    const degree = v.querySelector(".degree-name");
    const school = v.querySelector(".school-name-educ");
    const city = v.querySelector(".school-city-educ");
    const startDate = v.querySelector(".start-date");
    const endDate = v.querySelector(".end-date");
    const description = v.querySelector(".degree-descritption-educ");


    if(degree && school && city && startDate && endDate && description) {
      let newEducItem = {
        degree: degree.textContent,
        school: school.textContent,
        city: city.textContent,
        startDate: startDate.textContent,
        endDate: endDate.textContent,
        description: description.textContent
      }
  
      educations.push(newEducItem);
    } else {
      alert("Error");
    }
  })
  resumeForm.educations = educations;

  // Experience informations
  let experinces = [];
  experincesValues = Array.from(document.querySelectorAll(".exp-container"));
  experincesValues.forEach(exp => {
    const jobTitle = exp.querySelector(".exp-title");
    const orgranization = exp.querySelector(".orgranization-name");
    const startDate = exp.querySelector(".start-exp-date");
    const endDate = exp.querySelector(".end-exp-date");
    const description = exp.querySelector(".exp-description");


    let newExp = {
      job: jobTitle.textContent,
      organization: orgranization.textContent,
      startDate: startDate.textContent,
      endDate: endDate.textContent,
      description: description
    }

    experinces.push(newExp);
  })
  resumeForm.experinces = experinces;


  // Skill infos
  let skills = [];
  const skillItems = Array.from(document.querySelectorAll(".skills"));
  skillItems.forEach(skill => {
    const skillName = skill.querySelector(".skill");

    skills.push(skillName.textContent.trim());
  })
  resumeForm.skills = skills

  
  // Proffesional summary 
  resumeForm.summary = document.getElementById("summary").value;

  // Languages
  let languages = [];
  languagesItems = Array.from(document.querySelectorAll(".language"));
  languagesItems.forEach(lang => {
    const name = lang.querySelector(".language-name");
    const level = lang.querySelector(".language-level");

    let newlang = {
      languageName: name.textContent,
      languageLevel: level.textContent
    }

    languages.push(newlang);
  })
  resumeForm.languages = languages;

  addToLocalStorage();
} 



// Collect data on submit even on the form
const form = document.getElementById("resume-form")
form.addEventListener("submit", (event) => {
  event.preventDefault();

  collectData();
  alert("data collected");
  console.log(resumeForm)

})

// Local Storage 
function addToLocalStorage() {
  window.localStorage.setItem("resumeInfos", JSON.stringify(resumeForm));
}