function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Formulaire

// DOM Elements
// page principal
 const returnPage = document.querySelector("#myTopnav");
//prénom
const inputFirstname = document.querySelector("#firstname");
const inputFirstnameError = document.querySelector("#input-firstname-error");
//nom
const inputLastname = document.querySelector("#lastname");
const inputLastnameError = document.querySelector("#input-lastname-error");
//email
const inputEmail = document.querySelector("#email");
const inputEmailError = document.querySelector("#input-email-error");
//date de naissance
const inputBirthdate = document.querySelector("#birthdate");
const inputBirthdateError = document.querySelector("#input-birthdate-error")
//nombre de tournoi
const inputQuantity = document.querySelector("#quantity");
const inputQuantityError = document.querySelector("#input-quantity-error");
//choix du tournoi
const inputButtonSelector1 = document.querySelector("#location1");
const inputButtonSelector2 = document.querySelector("#location2");
const inputButtonSelector3 = document.querySelector("#location3");
const inputButtonSelector4 = document.querySelector("#location4");
const inputButtonSelector5 = document.querySelector("#location5");
const inputButtonSelector6 = document.querySelector("#location6");
const inputButtonSelectorError = document.querySelector("#input-location-error");
//condition
const inputCheckbox1= document.querySelector("#checkbox1");
const inputCheckbox1Error = document.querySelector("#input-checkbox-error");
//validation
const submitButton = document.querySelector("#buttonsubmit");
const inputSubmitError = document.querySelector("#input-submit-error");
//message validation
const submitmessage= document.querySelector("#validate-check");
//close
const submitClose = document.querySelector("#input-close");
//close message validation
/*const submitCloseMessage = document.querySelector("#input-close-form");*/

// launch modal event
//prénom
inputFirstname.addEventListener("change", validateFirstname);
//nom
inputLastname.addEventListener("change", validateLastname);
//email
inputEmail.addEventListener("change", validateEmail);
//date de naissance
inputBirthdate.addEventListener("change", validateBirthdate);
//nombre de tournoi
inputQuantity.addEventListener("blur", validateQuantity);
//choix du tournoi
inputButtonSelector1.addEventListener("click", validateButtonSelector);
inputButtonSelector2.addEventListener("click", validateButtonSelector);
inputButtonSelector3.addEventListener("click", validateButtonSelector);
inputButtonSelector4.addEventListener("click", validateButtonSelector);
inputButtonSelector5.addEventListener("click", validateButtonSelector);
inputButtonSelector6.addEventListener("click", validateButtonSelector);
//condition
inputCheckbox1.addEventListener("click", validateCheckbox1);
//validation
/*submitButton.addEventListener("submit", validateSubmitButton);*/
//close
submitClose.addEventListener("click", validateClose);
//close message validation
/*submitCloseMessage.addEventListener("click", validateCloseMessage);*/


// launch modal form

function hasOnlyLetters(string) {
  console.log({ string });
  const regexToMatch = new RegExp('[a-zA-Zéèàôîê]+', 'g');

  return regexToMatch.test(string);
}

//prénom
function validateFirstname() {
  console.log(hasOnlyLetters(inputFirstname.value))
  if(inputFirstname.value.length > 1 && inputFirstname.value.length < 250 && !parseInt(inputFirstname.value)) {
    inputFirstname.classList.remove("error-input");
    inputFirstnameError.innerText = "";
    return true; 
  } else {
    inputFirstname.classList.add("error-input");
    inputFirstnameError.innerText = "Le champ doit avoir 2 lettres minimum.";
    return false;
  }
}
//nom
function validateLastname() {
  if(inputLastname.value.length > 1 && inputLastname.value.length < 250 && !parseInt(inputLastname.value)) {
      inputLastname.classList.remove("error-input");
      inputLastnameError.innerText = "";
    return true;
    } else {
      inputLastname.classList.add("error-input");
      inputLastnameError.innerText = "Le champ doit avoir 2 lettres minimum.";
    return false;
  }
}
//email
function validateEmail() {
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
      inputEmail.classList.remove("error-input");
      inputEmailError.innerText = "";
    return true;
  } else {
      inputEmail.classList.add("error-input");
      inputEmailError.innerText = "L'adresse mail n'est pas valide.";
    return false;
  }
}
//date de naissance
function validateBirthdate() {
  if (inputBirthdate.checkValidity()) {
      inputBirthdate.classList.remove("error-input");
      inputBirthdateError.innerText = "";
    return true;
  } else {
      inputBirthdate.classList.add("error-input");
      inputBirthdateError.innerText = "La date de naissance n'est pas valide.";
   
    return false;
  }
}

//nombre de participation
function validateQuantity() {
  if (!parseInt(inputQuantity.value) || parseInt(inputQuantity.value) < 0){
    inputQuantity.classList.add("error-input");
    inputQuantityError.innerText = "Veuillez rentrer un nombre positif.";
    return false;
  } else {
    inputQuantity.classList.remove("error-input");
    inputQuantityError.innerText = "";
    return true;
  }
}

//choix du tournoi
function validateButtonSelector() {
  const radioInputsList = document.querySelectorAll(".radio-input");
  const radioInputsArray = Array.from(radioInputsList);
  const radioInputChecked = radioInputsArray.find((radio) => radio.checked);

  if (radioInputChecked) {
    console.log("bonne réponse");
    return true;
  } else {
    radioInputChecked.innerText = "Vous devez sélectionner une ville.";
    console.log("mauvaise réponse");
    return false;
  }
}

//condition d'utilisation
function validateCheckbox1() {
  if (inputCheckbox1.checked){
    inputCheckbox1Error.innerText = "";
    console.log(inputCheckbox1.value);
    return true;
  } else {
    inputCheckbox1Error.innerText = "Il faut valider les conditions d'utilisation.";
    console.log(inputCheckbox1.value);
    return false;
  }
}


  
//validation du formulaire
const form = document.querySelector("#form");
form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  if( validateFirstname() 
    && validateLastname() 
    && validateEmail() 
    && validateBirthdate() 
    && validateQuantity() 
    && validateButtonSelector() 
    && validateCheckbox1() ) {
      inputSubmitError.innerText = "";
      submitmessage.style.display = "block";
      modalbg.style.display = "none";
      console.log("valoui")
  } else {
    console.log("valnon")
    inputSubmitError.innerText = "Il reste des champs à valider !";
  }
}

//close modal
function validateClose(e){
  if (launchModal === null)
    return e.preventDefault;
    modalbg.style.display = "none";
}

//close message validation
/*function CloseMessage(){
    submitmessage.style.display = "none";
}*/
