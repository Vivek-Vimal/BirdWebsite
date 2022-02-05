import React from 'react';
import styled from 'styled-components';

const StyledImageBox = styled.div`
    display: flex;
    align-items: center;
  @media only screen and (max-width: 1600px) {
        margin: 1rem 0;
  }
`

const ImageBox = ({children}) => {
  return (
    <StyledImageBox>
        {children}
    </StyledImageBox>
    );
};

export default ImageBox;
