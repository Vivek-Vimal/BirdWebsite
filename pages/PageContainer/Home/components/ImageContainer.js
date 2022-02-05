import React from 'react';
import styled from 'styled-components';
import FlexColumnDisplay from './FlexColumnDisplay';

const StyledImageContainer = styled.div`
    background-image: url('/home/homeimg.png'); 
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 35rem; width: 40rem;
`

const ImageContainer = () => {
  return (
    <FlexColumnDisplay>
        <StyledImageContainer />
    </FlexColumnDisplay>
  )
};

export default ImageContainer;
