let getForm = document.querySelector("form");	// get reference to the form element
let getName = document.querySelector("#name");  // get reference to name id
let getDob = document.querySelector("#datebirth");   // get reference to datebirth id
let getEmail = document.querySelector("#mail");  // get refernce to mail id

//formValidator() function is invoked when submit button in the form is pressed to check 
// if all the fields in the form are filled or not. 

function formValidator(event) {

    // Check if name field is empty

    if(getName.value === "")   {
        event.preventDefault();  		// As name field is empty, so prevent the form from being submitted to the server
        
       /*if the error message is not printed already, then create a new element with class= "form-field" as the child of element with class="name-field", to hold and display the error-message */

        if (document.querySelector(".name-field .form-field") === null) {
            let promptArea = document.createElement("div");
            promptArea.setAttribute("class", "form-field");
            let nameField = document.querySelector(".name-field");
            nameField.append(promptArea);
            let missingNamePrompt = document.createElement("span");
            missingNamePrompt.setAttribute("class", "data-missing");
            missingNamePrompt.textContent = "You need to enter your name";

            promptArea.append(missingNamePrompt);
        }
     }

    // Now check if DOB field is empty

     if(getDob.value === "")   {
        event.preventDefault();
        if(document.querySelector(".dob-field .form-field") === null) {
            let promptArea = document.createElement("div");
            promptArea.setAttribute("class", "form-field");
            let dobField = document.querySelector(".dob-field");
            dobField.append(promptArea);
            let missingDobPrompt = document.createElement("span");
            missingDobPrompt.setAttribute("class", "data-missing");
            missingDobPrompt.textContent = "You need to enter your Date of Birth";

            promptArea.append(missingDobPrompt);
        }
    }

     // Last check if Email field is empty

     if(getEmail.value === "")   {
        event.preventDefault();
        if(document.querySelector(".email-field .form-field") === null) {
        let promptArea = document.createElement("div");
        promptArea.setAttribute("class", "form-field");
        let emailField = document.querySelector(".email-field");
        emailField.append(promptArea);
        let missingEmailPrompt = document.createElement("span");
        missingEmailPrompt.setAttribute("class", "data-missing");
        missingEmailPrompt.textContent = "You need to enter your e-mail address";

        promptArea.append(missingEmailPrompt);
    }
  }
  
}

/* Delete error message, if it exist, that is associated with Name field if Name field is focused and after that
    any key is pressed */

function delNameNode() {
        let nameField = document.querySelector(".name-field");
        let formField = nameField.querySelector(".form-field");
        if(formField !== null)
            formField.remove();
}

function listenForNameInput() {
    getName.addEventListener("keydown", delNameNode);
}

getName.addEventListener("focus", listenForNameInput); 

/* Delete error message, if it exist, that is associated with DOB field if DOB field is focused and after that
    any key is pressed */

function delDobNode() {
        let dobField = document.querySelector(".dob-field");
        let formField = dobField.querySelector(".form-field");
        if(formField !== null)
            formField.remove();
}

function listenForDobInput() {
    getDob.addEventListener("keydown", delDobNode);
}

getDob.addEventListener("focus", listenForDobInput); 

/* Delete error message, if it exist, that is associated with email field if email field is focused and after that
    any key is pressed */

function delEmailNode() {
        let emailField = document.querySelector(".email-field");
        let formField = emailField.querySelector(".form-field");
        if(formField != null)
            formField.remove();
}

function listenForEmailInput() {
    getEmail.addEventListener("keydown", delEmailNode);
}

getEmail.addEventListener("focus", listenForEmailInput); 


getForm.addEventListener("submit", formValidator);