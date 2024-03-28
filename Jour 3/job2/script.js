let randomNumbers = [];

while (randomNumbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    if (randomNumbers.indexOf(randomNumber) === -1) randomNumbers.push(randomNumber);
}
console.log(randomNumbers);


for (let i = 0; i <= 5; i++) {

    $("#containerImages").append(`<div id="containerImage${i+1}"> <img src="img/arc${randomNumbers[i]}.png"></div>`)
}


console.log($("#containerImages").children().length);  