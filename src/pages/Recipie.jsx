import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Ingredients from "../components/Ingredients";
import { FaPizzaSlice, FaHamburger, FaHome, FaClock } from "react-icons/fa";

function Recipie() {
  let params = useParams();
  const [recipe, setRecipe] = useState({});
  const [ingredient, setIngredients] = useState({});
  const [tab, setTab] = useState(1);

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
    <>
      <RecipeDisplay>
        <Heading>
          <h1>{recipe.title}</h1>
        </Heading>
        <Heading>
          <FaClock color="white" size="1rem"></FaClock>
          <h2>{recipe.readyInMinutes + " Minutes"}</h2>
          <FaHamburger color="white" size="1rem"></FaHamburger>
          <h2>{recipe.servings + " serving"}</h2>
        </Heading>
        <img src={recipe.image}></img>
        <RecipeContent>
          <Heading>
            <StyleButton onClick={() => setTab(1)}>
              <h2>Ingredients</h2>
            </StyleButton>
            <StyleButton onClick={() => setTab(2)}>
              <h2>Instructions</h2>
            </StyleButton>
            <StyleButton onClick={() => setTab(3)}>
              <h2>Description</h2>
            </StyleButton>
          </Heading>

          {tab === 1 && <Ingredients />}
          {tab === 2 && (
            <h2 dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
          )}
          {tab === 3 && (
            <h2 dangerouslySetInnerHTML={{ __html: recipe.summary }} />
          )}
        </RecipeContent>
      </RecipeDisplay>
    </>
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
  h1 {
    font-weight: 1000;
    color: white;
    padding: 1rem;
  }
`;

const RecipeContent = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 1rem;
`;

const Heading = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  align-content: center;

  h2,
  h1 {
    margin: 1rem;
    color: white;
    background: linear-gradient(35deg, #494949, #313131);
    border-radius: 10px;
    padding: 1rem;
  }
`;

const StyleButton = styled.div`
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    h2 {
      background: linear-gradient(to right, #f27121, #e94057);
    }
  }

  &:active {
    h2 {
      background: linear-gradient(to right, #f27121, #e94057);
    }
  }
`;

export default Recipie;
