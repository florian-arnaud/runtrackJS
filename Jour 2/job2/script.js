let buttonElement = document.getElementById("button");
let articleElement = document.createElement("article");
document.body.appendChild(articleElement);

function showhide() {
    if (articleElement.textContent == "") {
        articleElement.textContent = "L'important n'est pas la chute, mais l'atterrissage."
    }

    else if (articleElement.textContent !== "") {
        articleElement.textContent = ""
    }
}

buttonElement.addEventListener("click", showhide)
{

}