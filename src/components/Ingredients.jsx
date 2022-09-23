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
      <List>
        {ingredient.map((item) => {
          return (
            <li>
              <h4>
                {item.amount.us.value +
                  " " +
                  item.amount.us.unit +
                  " " +
                  item.name}
              </h4>
            </li>
          );
        })}
      </List>
    </>
  );
}

const List = styled.ul`
  margin-left: 1rem;
  margin-top: 1rem;
  width: fill;
  height: 70%;
  overflow: auto;
`;
export default Ingredients;
