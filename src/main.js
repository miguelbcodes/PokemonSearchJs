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
      // Add Pokemon Section styles
      pokemonSectionEl.classList.add("flex", "flex-col", "items-center", "mt-8", "gap-8");

      // Clear the current Pokemon searched, if it exists
      removeAllChildNodes(pokemonSectionEl);

      // Create Pokemon Card
      const pokemonCardEl = document.createElement("article");
      // Add Pokemon Card styles
      pokemonCardEl.classList.add(
        "w-96",
        "flex",
        "gap-4",
        "p-4",
        "rounded-md",
        "bg-blue-400",
        "shadow-lg",
        "shadow-blue-200"
      );

      // Create Pokemon Image Wrapper
      const pokemonImageWrapperEl = document.createElement("div");
      // Add Pokemon Image Wrapper styles
      pokemonImageWrapperEl.classList.add("w-1/2", "bg-white", "rounded-lg");

      // Append Pokemon Image to its wrapper
      displayPokemonImage(pokemonImageWrapperEl, data);

      // Append Pokemon Image Wrapper to Pokemon Card
      pokemonCardEl.appendChild(pokemonImageWrapperEl);

      // Create Pokemon Info Wrapper
      const pokemonInfoWrapperEl = document.createElement("div");
      // Add Pokemon Info Wrapper styles
      pokemonInfoWrapperEl.classList.add("px-4", "py-2", "bg-blue-500", "grow", "rounded-lg", "space-y-2");

      // Append Pokemon Info to its wrapper
      displayPokemonInfo(pokemonInfoWrapperEl, data);

      // Append Pokemon Info Wrapper to Pokemon Card
      pokemonCardEl.appendChild(pokemonInfoWrapperEl);

      // Append Pokemon Card to Pokemon Section
      pokemonSectionEl.appendChild(pokemonCardEl);

      // Create a button and append it to Pokemon Section. The button shows the search
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
  // Add Pokemon Image styles
  pokemonImageEl.classList.add("w-full", "drop-shadow-lg");
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
  // Add Pokemon Name styles
  pokemonNameEl.classList.add("text-2xl", "font-bold", "text-slate-50");
  // Appen Pokemon Image to Pokemon Section
  parent.appendChild(pokemonNameEl);
}

function displayPokemonHeight(parent, data) {
  // Create Pokemon Height
  const pokemonHeightEl = document.createElement("p");
  // Add Pokemon Height text
  pokemonHeightEl.textContent = `Height: ${data.height * 10}cm`;
  // Add Pokemon Height styles
  pokemonHeightEl.classList.add("text-base", "text-slate-50");
  // Appen Pokemon Image to Pokemon Section
  parent.appendChild(pokemonHeightEl);
}

function displayPokemonWeight(parent, data) {
  // Create Pokemon Weight
  const pokemonWeightEl = document.createElement("p");
  // Add Pokemon Weight text
  pokemonWeightEl.textContent = `Weight: ${data.weight / 10}kg`;
  // Add Pokemon Height styles
  pokemonWeightEl.classList.add("text-base", "text-slate-50");
  // Appen Pokemon Image to Pokemon Section
  parent.appendChild(pokemonWeightEl);
}

function displayPokemonTypes(parent, data) {
  // Create Pokemon Types list
  const pokemonTypesEl = document.createElement("p");
  // Add Pokemon Image attributes
  pokemonTypesEl.textContent = data.types.map((type) => type.type.name).join(", ");
  // Add Pokemon Types styles
  pokemonTypesEl.classList.add("text-base", "text-slate-50");
  // Appen Pokemon Image to Pokemon Section
  parent.appendChild(pokemonTypesEl);
}

function showSearchButton(parent, searchFormEl) {
  // Create Button
  const buttonEl = document.createElement("button");
  // Add button text
  buttonEl.textContent = "Search Another Pokemon";
  // Add button styles
  buttonEl.classList.add(
    "text-amber-500",
    "bg-amber-50",
    "px-3",
    "py-2",
    "rounded-md",
    "font-semibold",
    "text-sm",
    "transition-colors",
    "transition-shadow",
    "hover:bg-amber-500",
    "hover:text-white",
    "hover:shadow-lg",
    "hover:shadow-amber-100",
    "focus:outline-none",
    "focus:ring",
    "focus:ring-amber-500"
  );

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
