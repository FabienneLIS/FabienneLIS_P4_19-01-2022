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

// DOM Elements(on récupère le Dom qui correspond au fichier sur lequel on veut travailler)
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
const radioInputsList = document.querySelectorAll(".radio-input");
const inputCityError = document.querySelector("#input-city-error");
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
const submitCloseMessage = document.querySelector("#input-close-form");

// launch modal event (on écoute le DOM à travers une évenement paticulier)
//prénom
inputFirstname.addEventListener("change", validateFirstname);
//nom
inputLastname.addEventListener("change", validateLastname);
//email
inputEmail.addEventListener("change", validateEmail);
//date de naissance
inputBirthdate.addEventListener("change", validateBirthdate);
//nombre de tournoi
inputQuantity.addEventListener("blur", validateParticipationsNumber);
//ville
radioInputsList.forEach((radio) => radio.addEventListener("change", validateCitySelector));
//condition
inputCheckbox1.addEventListener("click", validateCheckbox1);
//close
submitClose.addEventListener("click", validateClose);
//close message validation
submitCloseMessage.addEventListener("click", validateCloseMessage);


// launch modal form (on applique des restirictions sur les champs des formulaires)

//Fonction qui autorise que des lettres ou des chiffres
function hasOnlyLetters(string) {
  const regexToMatch = new RegExp('[a-zA-Zéèàôîê]+', 'g');
  return regexToMatch.test(string);
}

function isPositiveNumber(value) {
  return /^[0-9]+$/.test(value);
}

function isDateFormatValid(value) {
  return /^(([0-9]{4})-[0-9]{2})-([0-9]{2})+$/.test(value);
} 

function isOfLegalAge(dateOfBirth) {
  const todayInMilliseconds = Date.now();
  const dateOfBirthInMilliseconds = Date.parse(dateOfBirth);

  const age = (todayInMilliseconds - dateOfBirthInMilliseconds) / (365*24*60*60*1000);

  return age >= 18;
}

//prénom
function validateFirstname() {
  if(inputFirstname.value.length > 1 && inputFirstname.value.length < 250 && hasOnlyLetters(inputFirstname.value)) {
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
  if(inputLastname.value.length > 1 && inputLastname.value.length < 250 && hasOnlyLetters(inputLastname.value)) {
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
  if (!isDateFormatValid(inputBirthdate.value)) {
    inputBirthdate.classList.add("error-input");
    inputBirthdateError.innerText = "La date de naissance n'est pas valide.";
 
    return false;
  } else if (!isOfLegalAge(inputBirthdate.value)) {
    inputBirthdate.classList.add("error-input");
    inputBirthdateError.innerText = "Il faut avoir au moins 18 ans pour participer.";
 
    return false;
  } else {
    inputBirthdate.classList.remove("error-input");
    inputBirthdateError.innerText = "";

    return true;   
  }
}

//nombre de participation
function validateParticipationsNumber() {
  if (!isPositiveNumber(inputQuantity.value) || inputQuantity.value.valueOf() > 99) {
    inputQuantity.classList.add("error-input");
    inputQuantityError.innerText = "Veuillez rentrer un nombre positif et inférieur à 100.";
    return false;
  } else {
    inputQuantity.classList.remove("error-input");
    inputQuantityError.innerText = "";
    return true;
  }
}

//choix du tournoi (la fonction valide lorsque un bouton est sélectionner)
function validateCitySelector() {
  const radioInputsArray = Array.from(radioInputsList);
  /* On tranforme la liste en tableau*/
  const radioInputChecked = radioInputsArray.find((radio) => radio.checked);

  if (radioInputChecked) {
    inputCityError.innerText = "";
    return true;
  } else {
    inputCityError.innerText = "Vous devez sélectionner une ville.";
    return false;
  }
}

//condition d'utilisation
function validateCheckbox1() {
  if (inputCheckbox1.checked){
    inputCheckbox1Error.innerText = "";
    return true;
  } else {
    inputCheckbox1Error.innerText = "Il faut valider les conditions d'utilisation.";
    return false;
  }
}


  
//validation du formulaire
const form = document.querySelector("#form");
/*on récupère le DOM du formulaire)*/
form.addEventListener("submit", submitForm);
/* on écoute le formulaire*/
/* On utilise une fonction que valide le formulaire si tout les champs sont validés*/
function submitForm(e) {
  e.preventDefault();

  if( validateFirstname() 
    && validateLastname() 
    && validateEmail() 
    && validateBirthdate() 
    && validateParticipationsNumber() 
    && validateCitySelector() 
    && validateCheckbox1() ) {
      inputSubmitError.innerText = "";
      submitmessage.style.display = "block";
      modalbg.style.display = "none";
  } else {
    inputSubmitError.innerText = "Il reste des champs à valider !";
  }
}

//close modal (permet de fermer le formulaire)
function validateClose(e){
  if (launchModal === null)
    return e.preventDefault;
    modalbg.style.display = "none";
}

//close message validation (permet de retourner à la page d'accueil)
function validateCloseMessage(e) {
  e.preventDefault;
    window.location.href="index.html";
}
