import React from "react";
import styled from "styled-components";

const FormStyles = styled.form`
  font-size: 1vw;
  display: flex;
  flex-direction: row;
`;

const FormInputStyles = styled.input`
  width: 100%;
  border: 2px solid black;
  box-sizing: border-box;
  border-radius: 3px;
  padding-top: 12px;

`;

const FormButtonStyles = styled.button`
  background: transparent;
  border: 2px solid black;
`;

function SearchForm(){
    let input;
    function handleSearch(event) {
      event.preventDefault();
      const search = input.value.replace(/\s/g, '+');
      console.log(search);
      input.value = '';
    }
  
    return (
      <FormStyles onSubmit={handleSearch}>
        <FormInputStyles
          type="text"
          placeholder="Search"
          id="search"
          ref={(node) => {input = node;}}/>
        <FormButtonStyles type="submit">Get My Giphix!</FormButtonStyles>
      </FormStyles>
    );
  };
  

  export default SearchForm;