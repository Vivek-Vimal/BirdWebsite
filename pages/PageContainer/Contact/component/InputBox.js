import React from 'react';
import styled from 'styled-components';
import Heading from '../../../../Components/Heading';

const StyledInputBox = styled.div`
  margin: 2rem;
`
const Line = styled.div`
    background: #E5E5E5;
    height: 2px;
    width: 20rem;
  @media only screen and (max-width: 610px) {
      width: 95%;  
  }
`
const StyleInput = styled.input`
  height: 3rem;
  width: 100%;
  background: transparent;
  border: none;
  color: #E5E5E5;
  font-size: 1.8rem;
  &:focus{
    
  }
`

const InputBox = (props) => {
  return (
    <StyledInputBox>
        <Heading Text={`${props.Input ? props.Input : 'Name'}`} size='2rem' bold />
        <StyleInput
          type={`${props.email ? 'email' : 'text'}`} />
        <Line />
    </StyledInputBox>
  );
};

export default InputBox;
