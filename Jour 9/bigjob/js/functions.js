
// Fonction qui récupère les informations contenues dans le fichier data.json et vérifie si l'utilisateur a rentré un mot de passe et email existant.

async function checkUserCredentials() {
  let fetchedData = await fetch("json/data.json");
  let jsonData = await fetchedData.json();
  let loginValues = getLoginInputValues()




  jsonData.forEach(user => {
    if ((user.email === loginValues.email) && (user.password == loginValues.password)) {
      loginUser()
      userData =
      {
        "firstName": user.firstName,
        "lastName": user.lastName,
        "email": user.email,
        "role": user.role

      };
      return userData;

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
  if (checkUserCredentials) {
    console.log("Connexion réussie");
    isLogged = 1
    loginModal.hide()
    showLoggedContent()

  }
}

function writeErrors() {

}

function showLoggedContent() {

  if (isLogged > 0) {
    let requireLoginElements = document.getElementsByClassName("requires-login")
    let loggedHiddenElements = document.getElementsByClassName("logged-hidden")

    Array.from(requireLoginElements).forEach(element => {
      element.classList.remove("d-none")
    });

    Array.from(loggedHiddenElements).forEach(element => {
      element.classList.add("d-none")
    });
  }
}

function logoutUser() {

}