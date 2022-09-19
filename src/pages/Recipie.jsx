import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Ingredients from "../components/Ingredients";

function Recipie() {
  let params = useParams();
  const [recipe, setRecipe] = useState({});
  const [ingredient, setIngredients] = useState({});

  useEffect(() => {
    getRecepie(params.recipe);
    console.log(params.recipe);
  }, [params.recipe]);

  const getRecepie = async (id) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const recdata = await data.json();
    setRecipe(recdata);
    console.log(recdata);
    setIngredients(recdata.extendedIngredients);
  };

  return (
    <RecipeDisplay>
      <h1>{recipe.title}</h1>
      <img src={recipe.image}></img>
      <h2>{recipe.readyInMinutes + " Minutes"}</h2>
      <h3>{recipe.servings + " serving"}</h3>
      <RecipeContent>
        <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }} />
        <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
        <Ingredients />
      </RecipeContent>
    </RecipeDisplay>
  );
}

const RecipeDisplay = styled.div`
  display: flex;
  flex-direction: column;
  border: 5px solid black;
  border-radius: 10px;
  padding: 3rem;

  img {
    margin: 1rem;
    border-radius: 10px;
  }

  h3 {
    padding: 1rem;
  }
`;

const RecipeContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 3rem;
`;

export default Recipie;
