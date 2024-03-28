async function getText() {
    let file = await fetch("expression.txt");
    let text = await file.text();
    document.getElementById("expression").textContent = text
  }

document.getElementById("button").addEventListener("click", getText)