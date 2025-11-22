// INSTRUCTION: Temporary mock data so the app works without a backend.
const MOCK_TYPES = [
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "rock",
  "ice",
  "ghost",
  "dragon",
  "fighting",
  "fairy",
  "ground",
  "poison",
];

const MOCK_POKEMONS = [
  { name: "pikachu", type: "electric", level: 12 },
  { name: "bulbasaur", type: "grass", level: 8 },
  { name: "charmander", type: "fire", level: 10 },
  { name: "squirtle", type: "water", level: 7 },
  { name: "geodude", type: "rock", level: 9 },
  { name: "abra", type: "psychic", level: 11 },
  { name: "lapras", type: "ice", level: 18 },
  { name: "gengar", type: "ghost", level: 22 },
  { name: "dragonite", type: "dragon", level: 28 },
  { name: "machop", type: "fighting", level: 13 },
  { name: "jigglypuff", type: "fairy", level: 6 },
  { name: "diglett", type: "ground", level: 9 },
  { name: "ekans", type: "poison", level: 7 },
  { name: "onix", type: "rock", level: 16 },
  { name: "psyduck", type: "water", level: 10 },
  { name: "vulpix", type: "fire", level: 12 },
  { name: "oddish", type: "grass", level: 5 },
  { name: "magneton", type: "electric", level: 20 },
  { name: "alakazam", type: "psychic", level: 26 },
  { name: "glaceon", type: "ice", level: 19 },
];

// INSTRUCTION: Return all available types.
export async function fetchTypes() {
  return MOCK_TYPES;
}

// INSTRUCTION: Filter mock pokemon list by optional search/type params.
export async function fetchPokemons(params = {}) {
  const search = (params.search || "").toLowerCase();
  const type = (params.type || "").toLowerCase();

  return MOCK_POKEMONS.filter((pokemon) => {
    const matchesType = !type || pokemon.type.toLowerCase() === type;
    const matchesSearch =
      !search || pokemon.name.toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesSearch;
  });
}
