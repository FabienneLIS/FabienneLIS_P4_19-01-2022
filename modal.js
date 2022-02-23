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
const inputValidate = document.querySelector("#input-validate-check");
//close
const submitClose = document.querySelector("#input-close")
const ContentClose = document.querySelector(".contentClose")

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
inputQuantity.addEventListener("change", validateQuantity);
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
submitButton.addEventListener("click", validateSubmitButton);
//close
submitClose.addEventListener("click", validateClose);

// launch modal form
//prénom
function validateFirstname() {
  if(inputFirstname.value.length > 1) {
    inputFirstname.classList.remove("error-input");
    inputFirstnameError.innerText = "";
    return true; 
  } else {
    inputFirstname.classList.add("error-input");
    inputFirstnameError.innerText = "Le champ doit avoir 2 caractères minimum.";
    return false;
  }
}
//nom
function validateLastname() {
  if(inputLastname.value.length > 1) {
      inputLastname.classList.remove("error-input");
      inputLastnameError.innerText = "";
    return true;
    } else {
      inputLastname.classList.add("error-input");
      inputLastnameError.innerText = "Le champ doit avoir 2 caractères minimum.";
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
  if (inputQuantity.value.length != ""){
      inputQuantity.classList.remove("error-input");
      inputQuantityError.innerText = "";
      return true;
  } else {
      inputQuantity.classList.add("error-input");
      inputQuantityError.innerText = "Il faut rentrer un nombre.";
    return false;
  }
}

//choix du tournoi
function validateButtonSelector() {
  if (inputButtonSelector1.checked) { 
    console.log("Vous avez valider un choix");
    console.log(inputButtonSelector1.value);
    return true;
  } else if (inputButtonSelector2.checked) {
    console.log("Vous avez valider un choix");
    console.log(inputButtonSelector2.value);
  } else if (inputButtonSelector3.checked) {
    console.log("Vous avez valider un choix");
    console.log(inputButtonSelector3.value);
  } else if (inputButtonSelector4.checked) {
    console.log("Vous avez valider un choix");
    console.log(inputButtonSelector4.value);
  } else if (inputButtonSelector5.checked) {
    console.log("Vous avez valider un choix");
    console.log(inputButtonSelector5.value);
  } else if (inputButtonSelector6.checked) {
    console.log("Vous avez valider un choix");
    console.log(inputButtonSelector6.value); 
  } else {
    inputButtonSelectorError.innerText = "Il faut valider un choix.";
    console.log("Il faut valider un choix.");
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
function validateSubmitButton(e) {
  if( validateFirstname() 
      && validateLastname() 
      && validateEmail() 
      && validateBirthdate() 
      && validateQuantity() 
      && validateButtonSelector() 
      && validateCheckbox1()
    ) {
      inputValidate.innerText = "votre inscription est validée !";
      /*window.history.back();*/
      alert("votre inscription est validée !");
      return true;
  } else {
      inputSubmitError.innerText = "Il y a des champs non validé!";
      console.log("Il reste des champs à valider");
      e.preventDefault();
      return false;
  }
}

//close
/*function validateClose() {
  if (){
    ContentClose.classList.add;
  } else {
    return false;
  }
}*/

