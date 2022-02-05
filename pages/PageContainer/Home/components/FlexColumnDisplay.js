import React from 'react';
import styled from 'styled-components';

const StyledFlexColumnDisplay = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 50%;
    @media only screen and (max-width: 1300px) {
        width: 80%;
      }
    @media only screen and (max-width: 560px) {
        width: 95%;
      }
    @media only screen and (max-width: 480px) {
        width: 98%;
      }
`

const FlexColumnDisplay = ({children}) => {
  return (
    <StyledFlexColumnDisplay>
        {children}
    </StyledFlexColumnDisplay>
    )
};

export default FlexColumnDisplay;
