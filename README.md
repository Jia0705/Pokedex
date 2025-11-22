# Pokedex React App

## Overview

A React application that displays a list of Pokemon using mock API data.
Includes search filtering, type filtering, and a grid layout for Pokemon details.

## Features

- Mock API module with Pokemon list and type list
- Search by name
- Filter by type
- Pokemon grid with name, type, level, and level gauge
- Separate components for filters and grid
- Basic project structure with functional components and hooks

## Project Structure
src/
  components/
    Filters.js
    PokemonGrid.js
  utils/
    api.js
  App.js
  index.js
  index.css

## Mock API (src/utils/api.js)

### fetchTypes()
Returns a list of Pokemon types.

### fetchPokemons(params)
Filters Pokemon by:
- search - match by name
- type - match by type
Returns the filtered list.

## Components

### App.js
- Loads Pokemon types
- Loads filtered Pokemon
- Manages search and type filter state
- Renders Filters and PokemonGrid

### Filters.js
- Search text input
- Type selection dropdown

### PokemonGrid.js
- Renders Pokemon cards
- Displays name, type, level, and level gauge

## Installation

Install dependencies:

```
npm install
```

## Development

Run the development server:

```
npm start
```

The app is available at:

```
http://localhost:3000
```

## Usage

- Enter a name in the search input to filter Pokemon
- Select a type from the dropdown to filter by type
- View the updated list in the Pokemon grid

## Technologies

- React
- React Hooks
- Create React App
- Basic CSS
