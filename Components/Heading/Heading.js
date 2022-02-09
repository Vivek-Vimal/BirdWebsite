import React from 'react'
import styled from 'styled-components'

const Heading = (props) => {

  const StyledHeading = styled.h1`
    font-size:${props.size ? props.size : "3.5rem"};
    font-weight: 400;
    line-height: 1.2;
    text-align: ${props.center ? "center" : "left"};
    color: ${props.color ? props.color : "#FFFFFF"};
    background: -webkit-${props.lg ? props.lg : null};
    -webkit-background-clip: ${props.lg ? 'text' :  null};
    -webkit-text-fill-color: ${props.lg ? 'transparent' : null};
  }

  @media only screen and (max-width: 1500px) {
    font-size:${props.lgsize ? props.lgsize : "3.2rem"};
  }

  @media only screen and (max-width: 1200px) {
    font-size:${props.xmsize ? props.xmsize : "3rem"};
  }

  @media only screen and (max-width: 768px) {
    font-size:${props.msize ? props.msize : "2.5rem"};
  }
    `
    
    return (
        <StyledHeading> 
          {props.Text ? props.Text : "Default Heading"}
        </StyledHeading>
    )
}

export default Heading
