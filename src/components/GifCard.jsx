import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Column = styled.div`
float: left;
width: 25%;
padding: 0 10px;
margin: 1%;

@media screen and (max-width: 600px) {
  width: 100%;
  display: block;
  margin-bottom: 20px;
}
`;


const CardBody = styled.div`
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GifCard = () => {
  return (
    <Column>
      <CardBody>
        <p>Title: TestGif</p>
        <p>URL: TestUrl</p>
      </CardBody>
    </Column>
  );
};

export default GifCard;