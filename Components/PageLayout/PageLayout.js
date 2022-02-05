import React from 'react';
import styled from 'styled-components';

const PageLayout = ({children,Bg2,Bg3,Bg4,contactImg}) => {

  const StyledPageLayout = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(28, 5, 49);
    background-image: url(${Bg2 ? '/background/bg2.png' : Bg3 ? '/background/bg3.png' : Bg4 ? '/background/bg4.png'  : contactImg ? '/contact/IMG.png' : '/background/bg1.png'}); 
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding: 7rem 0 2rem 0;
    overflow-x: hidden;

    @media only screen and (max-width: 1350px) {
      padding: 2rem 0 0 0;
    }
    @media only screen and (max-width: 1250px) {
      padding: 2rem 0 0 0;
      background-size: auto 100%;
    }

    @media only screen and (max-width: 1050px) {
      padding: 1rem 0;
    }
`;

  return (
    <StyledPageLayout >
      {children}
    </StyledPageLayout>
  )
};

export default PageLayout;
