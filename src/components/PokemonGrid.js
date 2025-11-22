// INSTRUCTION: Grid of Pokemon cards with empty-state handling.
import React from "react";

function formatName(name) {
  if (!name) return "Unknown";
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function PokemonGrid(props) {
  const { pokemons } = props;

  // INSTRUCTION: Show a friendly empty state when no results match.
  if (!pokemons.length) {
    return (
      <div className="empty-state">
        <p className="eyebrow subtle">No matches</p>
        <h3>No Pokemon found</h3>
        <p className="hint">
          Try clearing the type filter or using a different search term.
        </p>
      </div>
    );
  }

  // INSTRUCTION: Render cards with level gauge and type pill.
  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon) => {
        const level = Number(pokemon.level || 0);
        const levelPercent = Math.min(1, level / 50) * 100;

        return (
          <div
            key={`${pokemon.name}-${pokemon.type}`}
            className="pokemon-card"
            role="button"
          >
            <div className="card-header">
              <div className="avatar">
                {(pokemon.name || "").charAt(0).toUpperCase() || "?"}
              </div>
              <div className="card-title">
                <p className="card-label">Level {level || "?"}</p>
                <h3>{formatName(pokemon.name)}</h3>
              </div>
              <span className="pill">{pokemon.type || "Unknown"}</span>
            </div>

            <div className="card-body">
              <div className="meta-row">
                <span className="muted">Type</span>
                <span className="value">{pokemon.type || "-"}</span>
              </div>
              <div className="progress">
                <div
                  className="progress-fill"
                  style={{ width: `${levelPercent}%` }}
                ></div>
              </div>
              <p className="hint small">Level gauge (maxed at 50 for display)</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PokemonGrid;
