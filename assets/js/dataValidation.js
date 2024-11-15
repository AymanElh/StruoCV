function step1 () {
    let isValid = true;

    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    if (!/^[a-zA-Z\s]{4,}$/.test(firstName.value)) {
        showError(firstName, "Invalid first name");
        isValid = false;
    } else {
        hideError(firstName);
    }


    if (!/^[a-zA-Z\s]{5,}$/.test(lastName.value)) {
        showError(lastName, "Invalid last name");
        isValid = false;
      } else {
        hideError(lastName);
      }
    
    return isValid;
}

function step2 () {
    let isValid = true;

    const email = document.getElementById("email");
    const phone = document.getElementById("phone-number");

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
        showError(email, "Invalid email format");
        isValid = false;
    } else {
        hideError(email);
    }

    if (!/^\d{10}$/.test(phone.value)) { 
        showError(phone, "Invalid phone number");
        isValid = false;
    } else {
        hideError(phone);
    }

    const links = document.querySelectorAll(".social-link");
    links.forEach(link => {
        if (!link.value && !/^(https?:\/\/)?([\w\d-]+\.)+[\w]{2,}(\/.+)?$/.test(link.value)) {
            showError(link, "Invalid URL format");
            isValid = false;
        } else {
            hideError(link);
        }
    })

    return isValid;
}

 function step3() {
    let isValid = true;

    const degree = document.getElementById("degree");
    const City = document.getElementById("school-city");
    const schoolName = document.getElementById("school-name");
    const startDate = document.getElementById("start-degree-date");
    const endDate = document.getElementById("end-degree-date");
    const description = document.getElementById("degree-description");

    if (!/^[a-zA-Z\s]{5,}$/.test(degree.value)) {
        showError(degree, "Invalid degree name");
        isValid = false;
    } else {
        hideError(degree);
    }

    if (!/^[a-zA-Z\s]{2,}$/.test(City.value)) {
        showError(City, "Invalid city name");
        isValid = false;
    } else {
        hideError(City);
    }

    if (!schoolName.value) {
        showError(schoolName, "Invalid school name");
        isValid = false;
    } else {
        hideError(schoolName);
    }

    if (new Date(startDate.value) > new Date(endDate.value)) {
        showError(startDate, "Invalid date");
        showError(endDate, "Invalid Date");
        isValid = false;
    } else {
        hideError(startDate);
        hideError(endDate);
    }

    if(description.value.length < 20) {
        showError(description, "Description should be has more thant 20 caracters");
        isValid = false
    } else {
        hideError(description)
    }

    return isValid

}


function step4() {
    let isValid = true;

    const jobTitle = document.getElementById("job-title-input");
    const organization = document.getElementById("organization-input");
    const startDate = document.getElementById("start-exp-date-input");
    const endDate = document.getElementById("end-exp-date-input");
    const description = document.getElementById("exp-description-input");

    if (!/^[a-zA-Z\s]{5,}$/.test(jobTitle.value)) {
        showError(jobTitle, "Invalid degree name");
        isValid = false;
    } else {
        hideError(degree);
    }

    if (!/^[a-zA-Z\s]{2,}$/.test(organization.value)) {
        showError(organization, "Invalid name");
        isValid = false;
    } else {
        hideError(organization);
    }


    if (new Date(startDate.value) > new Date(endDate.value)) {
        showError(startDate, "Invalid date");
        showError(endDate, "Invalid Date");
        isValid = false;
    } else {
        hideError(startDate);
        hideError(endDate);
    }

    if(description.value.length < 20) {
        showError(description, "Description should be has more thant 20 caracters");
        isValid = false
    } else {
        hideError(description)
    }

    return isValid
}

function step5() {
    let skillValidation = true;
    const skill = document.getElementById("skill");
  
    if (!/^[a-zA-Z0-9]{2,}$/.test(skill.value)) {
      showError(skill, "Invalid skill");
      skillValidation = false;
    } else {
      hideError(skill);
    }
  
    return skillValidation;
  }
  

function step6 () {
    let summaryValidation = true;

    const summary = document.getElementById("summary")

    if(!summary.value) {
        showError(summary, "Empty summary");
        summaryValidation = false;
    } else {
        hideError(summary);
    }

    if(summary.value.length < 100) {
         showError(summary, "summary should be greater than 100 caracter");
         summaryValidation = false;
    } else {
        hideError(summary);
    }

    return summaryValidation;
}


function showError(input, message = "") {
    const errorContainer = input.nextElementSibling;
    errorContainer.textContent = message;
    errorContainer.classList.add("block", "text-red-500");
}


function hideError(input) {
    const errorContainer = input.nextElementSibling;
    errorContainer.textContent = "";
    errorContainer.classList.replace("block", "hidden");
}