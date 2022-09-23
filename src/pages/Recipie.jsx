import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Ingredients from "../components/Ingredients";
import {
  FaClock,
  FaDollarSign,
  FaHeart,
  FaCreativeCommonsBy,
} from "react-icons/fa";

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
      {/*
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
          */}
      <RecepieBox>
        <img src={recipe.image}></img>
        <InfoTabs>
          <Basicinfo>
            <InfoTag>
              <FaClock size="2rem"></FaClock>
              <h3>{recipe.readyInMinutes + " min"}</h3>
            </InfoTag>
            <InfoTag>
              <FaDollarSign size="2rem"></FaDollarSign>
              <h3>8.75</h3>
            </InfoTag>
            <InfoTag>
              <FaCreativeCommonsBy size="2rem"></FaCreativeCommonsBy>
              <h3>{recipe.servings}</h3>
            </InfoTag>
            <InfoTag>
              <FaHeart size="2rem"></FaHeart>
              <h3>{recipe.aggregateLikes}</h3>
            </InfoTag>
          </Basicinfo>
          <IngDisplay>
            <h2>Ingredients</h2>
            <Ingredients></Ingredients>
          </IngDisplay>
        </InfoTabs>
      </RecepieBox>
      <InstructionTab>
        <h2>Instructions</h2>
        <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
      </InstructionTab>
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

const RecepieBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 375px;
  left: 203px;
  top: 213px;
  background: white;

  img {
    width: 50%;
    height: 375px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const InfoTabs = styled.div`
  display: flex;
  flex-direction: column;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 64.25%;
  margin-left: 1rem;
  gap: 1rem;

  width: 50%;
  height: 372px;

  border-radius: 10px;
`;

const Basicinfo = styled.div`
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 64.25%;
  width: 100%;
  height: 30%;
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 10px;
  display: inline-block;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: white;
`;

const IngDisplay = styled.div`
  left: 0%;
  right: 0%;
  top: 38.44%;
  bottom: 0%;
  width: 100%;
  height: 70%;
  padding: 1rem;

  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: white;
`;

const InfoTag = styled.div`
  display: flex;
  flex-direction: row;
  h3 {
    margin-left: 0.5rem;
  }
  svg {
    margin: 0;
  }
`;

const InstructionTab = styled.div`
  background: linear-gradient(35deg, #494949, #313131);
  border-radius: 10px;
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: white;

  h2 {
    margin: 0;
  }

  h3 {
    padding: 1rem;
  }
`;

export default Recipie;
