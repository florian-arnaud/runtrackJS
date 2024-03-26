let buttonElement = document.getElementById("button");
let keyloggerElement = document.getElementById("keylogger")



document.addEventListener('keydown', (event) => {
      keyloggerElement.value += event.key
   
 })

