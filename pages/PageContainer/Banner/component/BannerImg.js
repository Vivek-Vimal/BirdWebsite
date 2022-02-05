import React from 'react';
import styled from 'styled-components';

const StyledBannerImg = styled.div`
    background-image: url('/banner/Banner.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 90rem;
    height: 60rem;
`

const BannerImg = () => {
  return (
   <StyledBannerImg />
  )
};

export default BannerImg;
