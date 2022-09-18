import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

function Ingredients() {
  const [ingredient, setIngredients] = useState([]);
  let params = useParams();

  useEffect(() => {
    const getIngredients = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/${params.recipe}/ingredientWidget.json?apiKey=${process.env.REACT_APP_API_KEY}&`
      );
      const data = await api.json();
      setIngredients(data.ingredients);
      console.log(typeof data);
      console.log(data.ingredients);
    };

    getIngredients(params.recipe);
  }, []);

  return (
    <>
      <h1>What You Will Need</h1>
      <Grid>
        {ingredient.map((item) => {
          return (
            <Card>
              <img
                src={
                  "https://spoonacular.com/cdn/ingredients_100x100/" +
                  item.image
                }
                width="100"
                height="100"
              ></img>
              <h4>
                {item.amount.us.value +
                  " " +
                  item.amount.us.unit +
                  " " +
                  item.name}
              </h4>
            </Card>
          );
        })}
      </Grid>
    </>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: rgb(123, 123, 123) solid 2px;
  width: 230px;
  height: 230px;

  h4 {
    padding: 1rem;
    text-align: center;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

export default Ingredients;
