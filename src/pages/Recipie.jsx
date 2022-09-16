import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Recipie() {
  let params = useParams();
  const [recipe, setRecipe] = useState({});
  const [getIngredients, setIngredients] = useState();

  useEffect(() => {
    getRecepie(params.recipe);
    console.log(params.recipe);
  }, [params.recipe]);

  const getRecepie = async (id) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recdata = await data.json();
    console.log(recipe);
    setRecipe(recdata);
  };

  return (
    <div>
      <img src={recipe.image}></img>
      <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }} />
      <h3>{recipe.title}</h3>
      <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
      <h3></h3>
    </div>
  );
}

export default Recipie;
