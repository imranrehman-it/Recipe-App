import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function layoutSelector(val) {
  if (val == 1) {
    return;
  }
}

function Searched() {
  let params = useParams();
  const [search, setSearch] = useState([]);

  const getSearch = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`
    );
    const recipes = await data.json();
    setSearch(recipes.results);
  };

  useEffect(() => {
    getSearch(params.item);
    console.log(params.item);
  }, [params.item]);

  return (
    <Grid>
      {search.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} />
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export default Searched;
