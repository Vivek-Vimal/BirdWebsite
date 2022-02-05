import React from 'react';
import styled from 'styled-components';

const StyledButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 2rem 0;
`

const ButtonContainer = ({children}) => {
  return (
    <StyledButtonContainer>
        {children}
    </StyledButtonContainer>
    );
};

export default ButtonContainer;
