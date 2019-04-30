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

const GifCardList = (props) => {
  return (
    <GifWrapper>
      {Object.keys(props.resultGifs).map(gifId => {
        let card = props.resultGifs[gifId];
        return (
          <GifCard
            gifTitle={card.title}
            gifUrl={card.url}
            gifImage={card.image}
            key={gifId}
          />
        );
      })}
    </GifWrapper>
  );
};

export default GifCardList;
