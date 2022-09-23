import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Dessert() {
  const [dessert, setDessert] = useState([]);

  useEffect(() => {
    getDessert();
  }, []);

  //async waits for the API to get the data before rendering
  const getDessert = async () => {
    const check = localStorage.getItem("dessert");
    if (check) {
      setDessert(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=dessert`
      );
      const data = await api.json();

      localStorage.setItem("dessert", JSON.stringify(data.recipes));
      setDessert(data.recipes);
      console.log(data);
    }
  };

  return (
    <div>
      <h1>Dessert Picks</h1>
      <Wrapper>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {dessert.map((recipe) => {
            return (
              <SplideSlide>
                <Card key={recipe}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image}></img>
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div`
  margin: 1rem 0rem;
`;

const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  backgroud: linear-gradient(rgba(0, 0, 0, 0), rbga(0, 0, 0, 0.5));
`;

export default Dessert;
