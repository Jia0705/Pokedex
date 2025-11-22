# Pokedex React App

## Overview
A React application that displays a list of Pokemon using mock API data. Includes search filtering, type filtering, and a grid layout for Pokemon details.

## Features
- Mock API module with Pokemon list and type list
- Search by name
- Filter by type
- Pokemon grid with name, type, level, and level gauge
- Separate components for filters and grid
- Basic project structure with functional components and hooks

## Project structure
```
src/
  components/
    Filters.js
    PokemonGrid.js
  utils/
    api.js
  App.js
  index.js
  index.css
```

## Mock API (`src/utils/api.js`)
- `fetchTypes()` returns a list of Pokemon types.
- `fetchPokemons(params)` filters Pokemon by `search` (match by name) and `type` (match by type) and returns the filtered list.

## Components
- `App.js` loads Pokemon types and filtered Pokemon, manages search and type filter state, and renders Filters and PokemonGrid.
- `Filters.js` provides a search text input and a type selection dropdown.
- `PokemonGrid.js` renders Pokemon cards and displays name, type, level, and level gauge.

## Installation
```
npm install
```

## Development
```
npm start
```
The app is available at http://localhost:3000

## Usage
- Enter a name in the search input to filter Pokemon.
- Select a type from the dropdown to filter by type.
- View the updated list in the Pokemon grid.

## Technologies
- React
- React Hooks
- Create React App
- Basic CSS
