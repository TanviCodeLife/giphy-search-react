import React from "react";
import styled from "styled-components";
import GifCard from "./GifCard";


const GifWrapper = styled.div`
 margin: 6%;
 margin-left: 6%;
 margin-right: 6%;

  &::after{
    content: "";
    display: table;
    clear: both;
  }
`;

const GifCardList = () => {
  return (
    <GifWrapper>
      <GifCard />
      <GifCard />
      <GifCard />
    </GifWrapper>
  );
};

export default GifCardList;
