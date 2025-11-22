// INSTRUCTION: Filter controls for search and type.
import React from "react";

function Filters(props) {
  const { search, type, types, onSearchChange, onTypeChange } = props;
  return (
    <div className="filters">
      <label className="field">
        <span className="field-label">Search</span>
        <div className="input-shell">
          <input
            type="text"
            value={search}
            placeholder="Find a Pokemon by name"
            onChange={onSearchChange}
          />
        </div>
      </label>

      <label className="field">
        <span className="field-label">Type</span>
        <div className="input-shell">
          <select value={type} onChange={onTypeChange}>
            <option value="">All types</option>
            {types &&
              types.map((typeOption) => (
                <option key={typeOption} value={typeOption}>
                  {typeOption}
                </option>
              ))}
          </select>
        </div>
      </label>
    </div>
  );
}

export default Filters;
