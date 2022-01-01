// selecting Image file and other related functions
const img_file = document.getElementById("input-image");

img_file.addEventListener("change", (e) => {
    // console.dir(img_file);
    const files = e.target.files;
    if (!files || !files.length) return
    const avatarImageFile = files[0];
    console.dir(avatarImageFile);
    const avatarImageUrl = URL.createObjectURL(avatarImageFile);
    console.log(avatarImageUrl)
    let img_tag = document.createElement("img");
    img_tag.src = avatarImageUrl;
    img_tag.height = 150;
    console.log(img_tag.src);
    img_file.previousElementSibling.innerHTML = "";
    img_file.previousElementSibling.appendChild(img_tag);
});

// Utility functions for dynamic date
function isMonth31(monthStr) {
    if (monthStr == "january" || monthStr == "march" || monthStr == "may" || monthStr == "july" || monthStr == "august" || monthStr == "october" || monthStr == "december") {
        return true;
    }
    return false;
}

function isMonth30(monthStr) {
    if (monthStr == "april" || monthStr == "june" || monthStr == "september" || monthStr == "november") {
        return true;
    }
    return false;
}

function isLeapYear(yearStr) {
    let year = Number(yearStr);
    if (year % 4 == 0) {
        return true;
    }
    return false;
}
// Additional Details related
function toggleVisibility(e) {
    const addInfoContainer = e.target.previousElementSibling;
    addInfoContainer.classList.toggle("expand");
    if (addInfoContainer.classList.contains("expand")) {
        e.target.textContent = "Hide Additional Information";
    } else {
        e.target.textContent = "Show Additional Information";
    }
}
const perToggleBtn = document.querySelector("#per-toggle");
const expToggleBtn = document.querySelector("#exp-toggle");

perToggleBtn.addEventListener("click", toggleVisibility);
expToggleBtn.addEventListener("click", toggleVisibility);

// Selecting all the section containing forms
const personal_form = document.querySelector("#personal-section");
const experience_form = document.querySelector("#experience-section");
const template_form = document.querySelector("#template-section");


// Selecting all the section containing forms
const personal_icon = document.querySelector("#personal-icon");
const experience_icon = document.querySelector("#experience-icon");
const template_icon = document.querySelector("#template-icon");
// selecting the next-step button
// const next_button = document.querySelector("#next-btn");
// let valid_flag = true;

function nextForm(e) {
    if (e.target.classList.contains("personal-form-btn") && valid_flag) {
        e.target.classList.remove("experience-form-btn");
        e.target.classList.add("template-form-btn");
        e.target.textContent = 'Submit';
        e.target.type = "submit";
        e.target.disabled = true;
        experience_icon.classList.add("complete");
        experience_icon.classList.remove("box-shadow");
        experience_icon.classList.add("box-shadow-green");
        experience_form.style = "transform : translateX(-50%); opacity : 0";
        setTimeout(() => {
            experience_form.classList.toggle("d-none");
        }, 1000);
        personal_form.style = "opacity : 1";
        setTimeout(() => {
            template_form.classList.toggle("d-none");
        }, 1000);

    } else if (e.target.classList.contains("experience-form-btn") && valid_flag) {
        e.target.classList.remove("experience-form-btn");
        e.target.classList.add("template-form-btn");
        e.target.textContent = 'Submit';
        e.target.type = "submit";
        e.target.disabled = true;
        experience_icon.classList.add("complete");
        experience_icon.classList.remove("box-shadow");
        experience_icon.classList.add("box-shadow-green");
        experience_form.style = "transform : translateX(-50%); opacity : 0";
        setTimeout(() => {
            experience_form.classList.toggle("d-none");
        }, 1000);
        personal_form.style = "opacity : 1";
        setTimeout(() => {
            template_form.classList.toggle("d-none");
        }, 1000);
    }
}
// next_button.addEventListener('click',validateFields);
next_button.addEventListener('click', nextForm);

// Template section
let templates = [];
templates[0] = document.getElementById("template-1");
templates[1] = document.getElementById("template-2");
templates[2] = document.getElementById("template-3");
for (let i = 0; i < templates.length; i++) {
    templates[i].addEventListener('change', whenChecked)
}

function whenChecked(e) {
    if (isChecked(templates)) {
        template_icon.classList.add("complete");
        template_icon.classList.remove("box-shadow");
        template_icon.classList.add("box-shadow-green");
        next_button.disabled = false;
    } else {
        template_icon.classList.remove("complete");
        template_icon.classList.add("box-shadow");
        template_icon.classList.remove("box-shadow-green");
        next_button.disabled = true;
    }
}

function isChecked(tempArray) {
    for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].checked) {
            return true;
        }
    }
    return false;
}
// -------------------------------------To display max length dynamically
let maxLen_displays = document.querySelectorAll(".max-display");

function changeLimit(e) {
    let current_limit = e.target.maxLength - e.target.value.length;
    e.target.nextElementSibling.textContent = current_limit;
}

for (let i = 0; i < maxLen_displays.length; i++) {
    maxLen_displays[i].previousElementSibling.addEventListener("keydown", changeLimit);
}