import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {

  const APP_ID = "9d08158b";
  const APP_KEY = "9f913d708f562a6afd581668801ed6c1";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">

      <div className="search-engine-title-box">
        <div className="search-engine-title">Recipe Search Engine</div>
      </div>

      <form onSubmit={getSearch} className="search-form">

        <input className="search-bar" type="text" value={search} onChange={updateSearch} />

        <button className="search-button" type="submit">
          Search
        </button>

      </form>

      <div className="search-engine-query-box">
        <div className="search-engine-query-text">Showing result for: {query}</div>
      </div>

      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

    </div>
  )
}
export default App;
