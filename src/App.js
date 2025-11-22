// INSTRUCTION: Core app shell that wires filters, data fetch, and grid together.
import React, { useState, useEffect } from "react";
// INSTRUCTION: Data helpers (mocked locally so the UI works without a backend).
import { fetchPokemons, fetchTypes } from "./utils/api";
// INSTRUCTION: UI subcomponents.
import Filters from "./components/Filters";
import PokemonGrid from "./components/PokemonGrid";

function App() {
  // INSTRUCTION: Local UI state for data and filters.
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    // INSTRUCTION: Load type options on mount.
    fetchTypes()
      .then(function (data) {
        setTypes(data);
      })
      .catch(function (error) {
        console.log("Error fetching types:", error);
      });
  }, []);

  useEffect(() => {
    // INSTRUCTION: Refetch whenever search or type filter changes.
    fetchPokemons({ search: search, type: selectedType })
      .then(function (data) {
        setPokemons(data);
      })
      .catch(function (error) {
        console.log("Error fetching pokemons:", error);
      });
  }, [search, selectedType]);

  // INSTRUCTION: Derived UI stats from the current list.
  const matchingCount = pokemons.length;
  const uniqueTypeCount = new Set(pokemons.map((pokemon) => pokemon.type)).size;
  const averageLevel = pokemons.length
    ? Math.round(
        pokemons.reduce(
          (total, pokemon) => total + Number(pokemon.level || 0),
          0
        ) / pokemons.length
      )
    : 0;

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleTypeChange(event) {
    setSelectedType(event.target.value);
  }

  return (
    <div className="app-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Trainer console</p>
          <h1>Pokedex Control Center</h1>
          <p className="lede">
            Search, filter, and keep tabs on your squad with a clean console
            view.
          </p>
        </div>
        <div className="stat-row">
          <div className="stat-card">
            <span className="stat-label">Matching</span>
            <strong className="stat-value">{matchingCount}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Type spread</span>
            <strong className="stat-value">{uniqueTypeCount}</strong>
          </div>
          <div className="stat-card">
            <span className="stat-label">Avg. level</span>
            <strong className="stat-value">{averageLevel}</strong>
          </div>
        </div>
      </header>

      <section className="panel">
        <div className="panel-head">
          <div>
            <p className="eyebrow subtle">Filters</p>
            <h2>Dial in your search</h2>
          </div>
          <p className="hint">Type a name or narrow by type.</p>
        </div>
        <Filters
          search={search}
          type={selectedType}
          types={types}
          onSearchChange={handleSearchChange}
          onTypeChange={handleTypeChange}
        />
      </section>

      <section className="panel">
        <div className="panel-head">
          <div>
            <p className="eyebrow subtle">Roster</p>
            <h2>Active Pokemon</h2>
          </div>
          <p className="hint">Click a card to review stats.</p>
        </div>
        <PokemonGrid pokemons={pokemons} />
      </section>
    </div>
  );
}

export default App;
