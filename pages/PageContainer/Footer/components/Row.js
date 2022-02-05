import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
    display : flex;
    align-items: center;
  @media only screen and (max-width: 1600px) {
    margin: 1rem 0;
  }
`

const Row = ({children}) => {
  return (
    <StyledRow>
        {children}
    </StyledRow>
    );
};

export default Row;
