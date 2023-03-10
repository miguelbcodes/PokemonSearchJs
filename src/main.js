function searchPokemon() {
  // Get the pokemon name searched
  const pokemonName = document.getElementById("pokemon-search").value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Pokemon not found - check your connection and try again!");
      }
      return response.json();
    })
    .then((data) => {
      // Get the search element
      const searchFormEl = document.getElementById("search-form");

      // Hides the search
      toggleElementDisplay(searchFormEl);

      // Get Pokemon Section
      const pokemonSectionEl = document.getElementById("pokemon-section");

      // Clear the current Pokemon searched, if it exists
      removeAllChildNodes(pokemonSectionEl);

      // TODO: Create Pokemon Image Wrapper
      const pokemonImageWrapperEl = document.createElement("div");

      // TODO: Append Pokemon Image to its wrapper
      displayPokemonImage(pokemonImageWrapperEl, data);

      // TODO: Append Pokemon Image Wrapper to Pokemon Section
      pokemonSectionEl.appendChild(pokemonImageWrapperEl);

      // TODO: Create Pokemon Info Wrapper
      const pokemonInfoWrapperEl = document.createElement("div");

      // TODO: Append Pokemon Info to its wrapper
      displayPokemonInfo(pokemonInfoWrapperEl, data);

      // TODO: Append Pokemon Info Wrapper to Pokemon Section
      pokemonSectionEl.appendChild(pokemonInfoWrapperEl);

      // TODO: Create a button and append it to Pokemon Section. The button shows the search
      showSearchButton(pokemonSectionEl, searchFormEl);
    });
}

// Remove all childs from parent element
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function displayPokemonImage(parent, data) {
  // Create Pokemon Image
  const pokemonImageEl = document.createElement("img");
  // Add Pokemon Image attributes
  pokemonImageEl.src = data.sprites.front_default;
  pokemonImageEl.alt = data.name;
  // Appen Pokemon Image to Pokemon Section
  parent.appendChild(pokemonImageEl);
}

function displayPokemonInfo(parent, data) {
  displayPokemonName(parent, data);

  displayPokemonHeight(parent, data);

  displayPokemonWeight(parent, data);

  displayPokemonTypes(parent, data);
}

function displayPokemonName(parent, data) {
  // Create Pokemon Name
  const pokemonNameEl = document.createElement("h2");
  // Add Pokemon Name text
  pokemonNameEl.textContent = data.name;
  // Appen Pokemon Image to Pokemon Section
  parent.appendChild(pokemonNameEl);
}

function displayPokemonHeight(parent, data) {
  // Create Pokemon Height
  const pokemonHeightEl = document.createElement("p");
  // Add Pokemon Height text
  pokemonHeightEl.textContent = data.height;
  // Appen Pokemon Image to Pokemon Section
  parent.appendChild(pokemonHeightEl);
}

function displayPokemonWeight(parent, data) {
  // Create Pokemon Weight
  const pokemonWeightEl = document.createElement("p");
  // Add Pokemon Weight text
  pokemonWeightEl.textContent = data.weight;
  // Appen Pokemon Image to Pokemon Section
  parent.appendChild(pokemonWeightEl);
}

function displayPokemonTypes(parent, data) {
  // Create Pokemon Types list
  const pokemonTypesEl = document.createElement("p");
  // Add Pokemon Image attributes
  pokemonTypesEl.textContent = data.types.map((type) => type.type.name).join(", ");
  // Appen Pokemon Image to Pokemon Section
  parent.appendChild(pokemonTypesEl);
}

function showSearchButton(parent, searchFormEl) {
  // Create Button
  const buttonEl = document.createElement("button");
  // Add button text
  buttonEl.textContent = "Search Another Pokemon";

  // Show the searchbar when clicked
  buttonEl.addEventListener("click", () => {
    toggleElementDisplay(searchFormEl);
    // Delete the Pokemon Section
    removeAllChildNodes(parent);
  });

  // Appen button to Pokemon Section
  parent.appendChild(buttonEl);
}

function toggleElementDisplay(element) {
  element.classList.toggle("hidden");
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
