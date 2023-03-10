function searchPokemon() {
  // Get the pokemon name searched
  const pokemonName = document.getElementById("pokemon-search").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("Pokemon not found - check your connection and try again!");
    }
    return response.json();
  });
}
