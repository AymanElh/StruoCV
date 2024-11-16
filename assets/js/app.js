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
    const description = v.querySelector(".degree-description-educ");


    if(degree && school && city && startDate && endDate && description) {
      let newEducItem = {
        degree: degree.textContent,
        school: school.textContent,
        city: city.textContent,
        startDate: startDate.textContent,
        endDate: endDate.textContent,
        description: description.textContent.trim()
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
      description: description.textContent
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
const donwnloadBtn = document.getElementById("download-btn");
donwnloadBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(donwnloadBtn);
  // download resume
  const resumeContainer = document.getElementById("get-Form");

  if(!resumeContainer) {
    alert("Error");
  }

  const options = {
    margin: 1,
    filename: "resume.pdf",
    html2canvas: {scale: 3},
    jsPdf: {unit: "in", format: "letter", orientation: "portrait"}
  };

  html2pdf().set(options).from(resumeContainer).save()
  
})

// Local Storage 
function addToLocalStorage() {
  window.localStorage.setItem("resumeInfos", JSON.stringify(resumeForm));
}


// Upload data to the resume


function updateDataOnResume () {
  // upload name
  const fullName = `${resumeForm.personalInformations.firstName} ${resumeForm.personalInformations.lastName}`
  const nameElement = document.getElementById("resume-name");
  if(nameElement) {
    nameElement.textContent = fullName;
  } else {
    console.log("Element not found");
  }

  document.getElementById("resume-post").textContent = resumeForm.personalInformations.postTitle;

  document.getElementById("resume-summary").textContent = resumeForm.summary;

  const skillsContainer = document.getElementById("resume-skills")
  skillsContainer.innerHTML = "";
  resumeForm.skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    skillsContainer.appendChild(li);
  })


  // upload education
  const educationContainer = document.getElementById("resume-education");
  educationContainer.innerHTML = "";
  resumeForm.educations.forEach(education => {
    const educDiv = document.createElement("div");
    educDiv.classList.add("mb-4");
    educDiv.innerHTML = `
    <h3 class="text-lg font-semibold">${education.degree}, ${education.school}</h3>
    <p class="text-gray-700">${education.description}</p>
    <p class="text-gray-600">${education.startDate} to ${education.endDate}</p>`
  
    educationContainer.appendChild(educDiv);
  })

  // update resume
  const expContainer = document.getElementById("resume-exp");
  // const expdiv = document.createElement("div")
  expContainer.innerHTML = "";
  resumeForm.experinces.forEach(exp => {
    const jobDiv = document.createElement("div");
    jobDiv.classList.add("mb-4");
    jobDiv.innerHTML = `
    <h3 class="text-lg font-semibold">${exp.job}, ${exp.organization}</h3>
    <p class="text-gray-700">${exp.description}</p>
    <p class="text-gray-600">${exp.startDate} to ${exp.endDate}</p>
  `;
  expContainer.appendChild(jobDiv);

  })

  const contactContainer = document.getElementById("resume-contact");
  contactContainer.innerHTML = "";

  const email = resumeForm.contactInformations.email;
  const phone = resumeForm.contactInformations.phoneNumber;
  const links = resumeForm.contactInformations.links

  const emailCont = document.createElement("li");
  emailCont.textContent = email;
  contactContainer.appendChild(emailCont);

  const phoneCont = document.createElement("li");
  console.log(phone);
  phoneCont.textContent = phone;
  contactContainer.appendChild(phoneCont);

  if(links.length > 0) {
    links.forEach(link => {
      const linkCont = document.createElement("li");
      const a = document.createElement("a");

      a.href = link;
      a.textContent = link;

      linkCont.appendChild(a);
      contactContainer.appendChild(linkCont);
    })
  }

} 


