// Récupère les valeurs de chaque input du formulaire d'inscription et les insère dans un tableau
function getSignUpValues() {
  let userSignUpValues = [];
  userSignUpValues[0] = document.getElementsByName("firstName")[0].value.trim();
  userSignUpValues[1] = document.getElementsByName("lastName")[0].value.trim();
  userSignUpValues[2] = document.getElementsByName("address")[0].value.trim();
  userSignUpValues[3] = document.getElementsByName("zipCode")[0].value.trim();
  userSignUpValues[4] = document.getElementsByName("email")[0].value.trim();
  userSignUpValues[5] = document.getElementsByName("password")[0].value.trim();
  checkSignUpValues(userSignUpValues)
}
// Manipule le tableau des valeurs récupérées précédemment 
function checkSignUpValues(values) {
  let errorCount = 0
  let isValid = false

  // Déclaration des regex
  let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  let alphabeticValidation = /^[a-z\d\-_\s]+$/i
  let numericValidation = /^[0-9]+$/
  let alphanumericValidation = /^[-\w\s]+$/

  // Vérification des champs
  let errorMessageElements = document.getElementsByClassName("errorMessage")


  //Vérification si les champs sont vides
  for (let i = 0; i < values.length; i++) {
    errorMessageElements[i].textContent = "";
    if (!values[i])
    {
      errorMessageElements[i].textContent = "Le champ ne peut pas être vide";
      errorCount++;
    }
  }

  //Vérifie si le mail est au bon format
  if (!emailValidation.test(values[4]))
  {
    errorMessageElements[4].textContent = "L'adresse email n'est pas au bon format";
    errorCount++;
  } 

  //Vérifie si le prénom et le nom ne contiennent que des caractères alphabétiques
  if (!alphabeticValidation.test(values[0]))
  
  {
    errorMessageElements[0].textContent = "Le champ ne doit contenir que des caractères alphabétiques";
    errorCount++
  }

  if (!alphabeticValidation.test(values[1]))
  {
    errorMessageElements[1].textContent = "Le champ ne doit contenir que des caractères alphabétiques"
    errorCount++;
}

  //Vérifie si l'adresse ne contient que des caractères alphanumériques
  if (!alphanumericValidation.test(values[2]))
  {
    errorMessageElements[2].textContent = "Le champ ne doit contenir que des caractères alphanumériques";
    errorCount++;
  }

  //Vérifie si le code postal ne contient que des nombres
  if (!numericValidation.test(values[3]))
  {
    errorMessageElements[3].textContent ="Le champ ne doit contenir que des caractères numériques";
    errorCount++
  }

  //Vérifie si le mot de passe convient au minimum 8 caractères
  if (values[5].length <8)
  {
    errorMessageElements[5].textContent ="Le mot de passe convient moins de 8 caractères";
    errorCount++
  }
 if (errorCount === 0)
 {
  console.log("Inscription effectuée");
 }
}