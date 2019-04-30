import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import { fetchGifs } from "./../actions";
import { connect } from "react-redux";

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
  font-size: 1.15em;
  text-indent: 2.5rem;
  padding-bottom: 12px;
  margin-right: 0.10em
  right: -5rem;
`;

const FormButtonStyles = styled.button`
  background: transparent;
  border: 2px solid black;
  border-radius: 3px;
  width: 50%;
  text-align: center;
  font-size: 1em;
  cursor: pointer;
`;

function SearchForm({dispatch}) {
  let input;
  function handleSearch(event) {
    event.preventDefault();
    const search = input.value.replace(/\s/g, "+");
    console.log(search);
    dispatch(fetchGifs(search, dispatch));
    input.value = "";
  }

  return (
    <FormStyles onSubmit={handleSearch}>
      <FormInputStyles
        type="text"
        placeholder="Search"
        id="search"
        ref={node => {
          input = node;
        }}
      />
      <FormButtonStyles type="submit">Get My Giphix!</FormButtonStyles>
    </FormStyles>
  );
}

SearchForm.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(SearchForm);
