import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import SelectedCuisine from "./SelectedCuisine";

export default function InputCuisine() {
  //async waits for the API to get the data before renderin
  const [input, setInput] = useState("");
  const [type, setType] = useState([]);
  const [submited, setSubmited] = useState(false);

  const getType = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=${input}`
    );

    const data = await api.json();
    setType(data.recipes);
    setSubmited(true);
    console.log(data);
  };

  return (
    <>
      <h1>Type Cuisine</h1>
      <FormStyled onSubmit={() => getType}>
        <div>
          <FaSearch size="1.5rem" color="white" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </FormStyled>
      {submited && <SelectedCuisine input="dessert" perPage={3} />}
    </>
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
const FormStyled = styled.form`
  div {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    background: linear-gradient(35deg, #494949, #313131);
    border-radius: 1rem;
    padding: 0rem 0rem 0rem 1rem;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    border-radius: 1rem;
    outline: none;
    width: 100%;
    padding: 1rem;
  }
`;
