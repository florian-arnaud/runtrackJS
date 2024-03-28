
async function fetchPokemon() {
  const reponse = await fetch("pokemon.json");
  const pokemonList = await reponse.json();
  return pokemonList;
}


function displayPokemon(pokemonList) {

  pokemonList.forEach(element => {
    console.log(`Id: ${element.id}`);
    console.log(`Nom: ${element.name.french}`);
    console.log(`Type: ${element.type}`);
  });
  console.log(pokemonList);


}

fetchPokemon("pokemon.json").then(pokemonList => displayPokemon(pokemonList));


