import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TestButton = styled(Link)`
  font-size: 1em;
  margin: 1em;
  padding: 0.5em;
  border: 1px solid black;
  border-radius: 3px;
  text-decoration: none;
  color: black;
`;

const Error404 = () => {
  return(
    <div>
      <h1>Page  does not exist</h1>
      <TestButton to="/">Home</TestButton>
    </div>
  )
};

export default Error404;