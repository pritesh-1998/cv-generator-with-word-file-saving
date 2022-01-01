const mail_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const number_regex = /^[6-9]\d{9}$/gi;
// selecting required fields of personal form
const first_name = document.getElementById("f-name")
const last_name = document.getElementById("l-name")
const e_mail = document.getElementById("e-mail")
const mobile_no = document.getElementById("mob-no")

function validateFields(e){
    if(e.target.classList.contains("personal-form-btn")){
        valid_flag = validateFieldsOfPersonal();
        // if(!valid_flag){
        //     e.target.disabled = true;
        //     setTimeout(()=>{
        //         e.target.disabled = false;
        //     },4000);
        // }
    }
    else if(e.target.classList.contains("experience-form-btn")){
    }    
}
function validateFieldsOfPersonal(){
    let input_flag = true;
    if(isEmpty(first_name.value)){
        input_flag = false;
        addInvalid(first_name);
        setTimeout(()=>{
            removeInvalid(first_name);
        },4000);
    }
    else{
        removeInvalid(first_name);
    }
    
    if(isEmpty(last_name.value)){
        input_flag = false;
        addInvalid(last_name);
        setTimeout(()=>{
            removeInvalid(last_name);
        },4000);
    }
    else{
        removeInvalid(last_name);
    }

    if(!mail_regex.test(e_mail.value)){
        input_flag = false;
        addInvalid(e_mail);
        setTimeout(()=>{
            removeInvalid(e_mail);
        },4000);
    }
    else{
        removeInvalid(e_mail);
    }
    return input_flag
}

// Utility Functions
function isEmpty(str){
    if(str == ""){
        return true;
    }
    return false;
}
function addInvalid(fieldObj){
    fieldObj.classList.add("invalid");
}
function removeInvalid(fieldObj){
    fieldObj.classList.remove("invalid");
}
