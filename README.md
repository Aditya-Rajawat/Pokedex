# *Pokedex*

- *Pokedex is a web application that allows users to retrieve, search and disset different pokemons based on their statistics. Users can filter pokemons based on the category and preference in category dropdown and searchbar respectively. Redux Toolkit library is used for managing the state at the top level hierarchy. Components are styled using Tailwind
CSS. Shimmer UI is implemented so as to increase user experience.*

- *Live Link : https://pokedex-goodtheory.netlify.app/*

- *Tech Stack : ReactJS, Tailwind CSS, Redux Toolkit*

  # *Setting up the project*

- Created react boilerplate using Vite
  ```
  npm create vite@latest
  ```
 
- Install tailwindcss via npm, and create your tailwind.config.js file
  ```
  npm install -D tailwindcss
  npx tailwindcss init
  ```
  
- Configure your template paths
  ```
  /** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```
  
- Add the Tailwind directives to your CSS
  ```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- Install Redux Toolkit and React-Redux
  ```
  npm install @reduxjs/toolkit react-redux
  ```
