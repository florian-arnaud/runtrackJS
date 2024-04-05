// Fonction qui récupère les informations contenues dans le fichier data.json et vérifie si l'utilisateur a rentré un mot de passe et email existant.

async function checkUserCredentials() {
  let fetchedData = await fetch("json/data.json");
  let jsonData = await fetchedData.json();
  let loginValues = getLoginInputValues()
  jsonData.forEach(user => {
    if ((user.email === loginValues.email) && (user.password == loginValues.password)) {
      loginUser()
    }
    else {
      writeErrors()
    }
  });

}

function getLoginInputValues() {
  let loginValues =
  {
    "email": document.getElementById("inputLoginEmail").value,
    "password": document.getElementById("inputLoginPassword").value
  };

  return loginValues
}

function loginUser() {
  let isLogged = 0
  if (checkUserCredentials) {
    console.log("Connexion réussie");
    isLogged = 1
    loginModal.hide()
  }
}

function writeErrors() {

}


