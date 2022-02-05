import React from 'react';
import styled from 'styled-components';
import Button from '../../../../Components/Button/Button';

const StyledGoogle = styled.div`
    border: 6px solid #000000;
    width: 80%;
    min-height: 25rem;
    display: flex;
    align-items: center;
    border-radius: 1.5rem;
    padding: 2rem 4rem;
    justify-content: space-between;

    @media only screen and (max-width: 900px) {
        width: 98%;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`
const Line = styled.div`
    width: 1px;
    height: 15rem;
    background: #C4C4C4;
    margin: 0 0 0 2rem;
`
const Img = styled.div`
    background-image: url('/slide/googleimg.png'); 
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 12rem; height: 12rem;
`

const Google = () => {
  return (
  <StyledGoogle>
      <div style={{display:'flex',alignItems:'center'}}>
        <Img />
        <Line />
      </div>
      <div style={{display:'flex',alignItems:'center',flexDirection:'column'}}>
          <div style={{width:'20vw',height:'17rem'}} />
          <Button Text='Open' />
      </div>
  </StyledGoogle>
  );
};

export default Google;
