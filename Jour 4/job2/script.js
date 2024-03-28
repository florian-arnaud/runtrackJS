
const formation = {
  "name": "La Plateforme_",
  "address": "8 rue d'hozier",
  "city": "Marseille",
  "nb_staff":"11",
  "creation": "2019"
};

function jsonValueKey(json, key) {   
  const keyValue = json[key]; 
  console.log(keyValue); 
}
jsonValueKey(formation, "city")
