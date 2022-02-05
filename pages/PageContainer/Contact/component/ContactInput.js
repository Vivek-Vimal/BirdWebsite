import React from 'react';
import styled from 'styled-components';
import InputBox from './InputBox';
import InfoBox from './InfoBox';

const StyledContactInput = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
  @media only screen and (max-width: 768px) {
       flex-direction: column;
    }
`
const Container  = styled.div`

`

const ContactInput = () => {
  return (
    <StyledContactInput>
        <Container>
            <InputBox Input ='Name' />
            <InputBox Input ='Email' email />
            <InputBox Input ='Message' />
        </Container>
        <Container>
            <InfoBox Heading='Contact' Desc='hi@green.com' />
            <InfoBox Heading='Based in' Desc='Los Angeles,California' />
        </Container>
    </StyledContactInput>
    );
};

export default ContactInput;
