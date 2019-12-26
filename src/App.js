import React, { useState, useEffect } from 'react';

import "./App.css"
import Recipe from './Recipe';
require('dotenv').config();


console.log(process.env)

function App() {
  const APP_ID= process.env.REACT_APP_APP_ID;
  const APP_KEY= process.env.REACT_APP_APP_KEY;
  

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");




  useEffect(()=>{
    getRecipe()
  }, [query])

  const getRecipe = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const setQueryFunc = (e) =>{
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }


  return (
    <div className="App">
      <form className="form" onSubmit={setQueryFunc} >
        <input type="text" className="form__text" value={search} onChange={(e)=>{setSearch(e.target.value)}} name="search" />
        <button type="submit" className="form__button">Search</button>
      </form>
      
      { recipes.map((rec, i) => 
         <Recipe 
         key={i} 
         title={rec.recipe.label} 
         calorie={rec.recipe.calories} 
         image={rec.recipe.image}
         ingredients={rec.recipe.ingredients}
         />
      )}
      
    </div>
  );
}

export default App;
