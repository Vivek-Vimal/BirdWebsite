import React from 'react';
import styled from 'styled-components';

const StyledRoadmapImg = styled.div`
    background-image: url('/roadmap/roadmapimg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 90rem;
    height: 55rem;
`

const RoadmapImg = () => {
  return (
   <StyledRoadmapImg />
  )
};

export default RoadmapImg;
