const inputValuesModal = new bootstrap.Modal(document.getElementById('modalValeurs'))

// Changement du paragraphe par une citation de Blade Runner
let quotes = ["Fiery the angels fell. Deep thunder rolled around their shores; burning with the fires of Orc.", "'More human than human' is our motto.", "I'm not in the business. I am the business."]

function randomQuote() {
    let randomNumber = Math.floor((Math.random() * 3));
    document.getElementById("rebootParagraph").textContent = quotes[randomNumber]
}

document.getElementById("reboot").addEventListener("click", randomQuote)

/* Changement de l'élément actif de la liste*/
let list_items = document.getElementsByClassName("list-group-item");
for (let i = 0; i < list_items.length; i++) {

    list_items[i].addEventListener("click", function () {
        if (!list_items[i].classList.contains("active")) {
            for (let j = 0; j < list_items.length; j++) {

                list_items[j].classList.remove("active")

            }
            list_items[i].classList.add("active")
        }
    })
}

/* Pattern pour afficher la modale*/
let hiddenContent = document.getElementsByTagName("main")[0]
var pattern = ['D', 'G', 'C'];
var current = 0;

document.addEventListener('keydown', (event) => {
    // If the key isn't in the pattern, or isn't the current key in the pattern, reset
    if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
        current = 0;
        return;
    }

    // Update how much of the pattern is complete
    current++;

    // If complete, alert and reset
    if (pattern.length === current) {
        current = 0;
        showInputValues();
    }
});

function getInputValues() {
    let inputValues = []
    inputValues[0] = document.getElementById("login").value
    inputValues[1] = document.getElementById("password").value
    inputValues[2] = document.getElementById("dogecoin").value
    inputValues[3] = document.getElementById("lptf-link").value
    inputValues[4] = document.getElementById("email").value
    inputValues[5] = document.getElementById("password-login").value

    return inputValues;
}

function showInputValues() {
    let inputValues = getInputValues();
    document.getElementById("inputValuesDiv").insertAdjacentHTML('beforeend', `<p>Login : ${inputValues[0]}</p> <p>Mot de passe : ${inputValues[1]} <p>dogecoin : ${inputValues[2]} <p>lien : ${inputValues[3]}`);
    inputValuesModal.show()
}

function updateSpinner() {
    let randomNumber = Math.floor((Math.random() * 6) + 1);
    let spinner = document.getElementById("spinner")

    let inputValues = getInputValues();
    if (inputValues[4] && inputValues[5]) {
        switch (randomNumber) {
            case 1:
                spinner.classList.replace("text-primary", "text-secondary")
                spinner.classList.replace("text-danger", "text-secondary")
                spinner.classList.replace("text-warning", "text-secondary")
                spinner.classList.replace("text-success", "text-secondary")
                spinner.classList.replace("text-dark", "text-secondary")
                spinner.classList.replace("text-light", "text-secondary")
                break;
            case 2:
                spinner.classList.replace("text-primary", "text-danger")
                spinner.classList.replace("text-secondary", "text-danger")
                spinner.classList.replace("text-warning", "text-danger")
                spinner.classList.replace("text-success", "text-danger")
                spinner.classList.replace("text-dark", "text-danger")
                spinner.classList.replace("text-light", "text-danger")
                break;

            case 3:
                spinner.classList.replace("text-primary", "text-success")
                spinner.classList.replace("text-secondary", "text-success")
                spinner.classList.replace("text-warning", "text-success")
                spinner.classList.replace("text-danger", "text-success")
                spinner.classList.replace("text-dark", "text-success")
                spinner.classList.replace("text-light", "text-success")
                break;

            case 4:
                spinner.classList.replace("text-primary", "text-warning")
                spinner.classList.replace("text-secondary", "text-warning")
                spinner.classList.replace("text-success", "text-warning")
                spinner.classList.replace("text-danger", "text-warning")
                spinner.classList.replace("text-dark", "text-warning")
                spinner.classList.replace("text-light", "text-warning")
                break;

            case 5:
                spinner.classList.replace("text-primary", "text-dark")
                spinner.classList.replace("text-secondary", "text-dark")
                spinner.classList.replace("text-success", "text-dark")
                spinner.classList.replace("text-danger", "text-dark")
                spinner.classList.replace("text-warning", "text-dark")
                spinner.classList.replace("text-light", "text-dark")
                break;
            case 6:
                spinner.classList.replace("text-primary", "text-light")
                spinner.classList.replace("text-secondary", "text-light")
                spinner.classList.replace("text-success", "text-light")
                spinner.classList.replace("text-danger", "text-light")
                spinner.classList.replace("text-warning", "text-light")
                spinner.classList.replace("text-dark", "text-light")
                break;
            default:


        }
    }
}

document.getElementById("submitButton").addEventListener("click", updateSpinner)
