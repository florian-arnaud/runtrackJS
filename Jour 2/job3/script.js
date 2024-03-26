let buttonElement = document.getElementById("button");
let compteurElement = document.getElementById("compteur")
let valeur = 1

function compteur() {
   compteurElement.textContent = valeur ++;
}

buttonElement.addEventListener("click", compteur)
