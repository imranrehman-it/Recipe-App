import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React from "react";

function Search() {
  const [input, setInput] = useState();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/search/" + input);
  };

  return (
    <FormStyled onSubmit={submitHandler}>
      <div>
        <FaSearch size="1.5rem" color="white" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    </FormStyled>
  );
}

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
  svg {
  }
`;

export default Search;
