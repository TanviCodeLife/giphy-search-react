import React from "react";
import styled from 'styled-components';

import puppy from './assets/images/puppy.png';



const Wrapper = styled.section`
  padding: 2em;
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const CuteDog = styled.img`
  margin-bottom: -225px;
  position: relative;
  left: -60px;
  height: 150px;
  transform: rotate(-2.75deg); 
`;

const Header = () => {
  return (
    <Wrapper>
        <CuteDog src={puppy}/>
    </Wrapper>
  );
}

export default Header;