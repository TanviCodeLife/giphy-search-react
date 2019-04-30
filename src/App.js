import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  @import url('https://fonts.googleapis.com/css?family=Spicy+Rice');
  font-family: 'Spicy Rice', cursive;
  animation: colorchange 50s;
  -webkit-animation: colorchange 20s infinite;
  @keyframes colorchange {
    0% {
      background: #fec5e2;
    }
    50% {
      background: #23d7ef;
    }
    75% {
      background: tomato;
    }
    100% {
      background: #21bc66;
    }
  }
  @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */ {
    0% {
      background: #fec5e2;
    }
    50% {
      background: #23d7ef;
    }
    75% {
      background: tomato;
    }
    100% {
      background: #21bc66;
    }
  }
}

`;


function App() {
  return (
    <GlobalStyles />
  );
}

export default App;
