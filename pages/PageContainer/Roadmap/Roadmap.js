import React from 'react';
import PageLayout from '../../../Components/PageLayout';
import Width from '../../../Components/Width/Width';
import Heading from '../../../Components/Heading'
import RoadmapImg from './component/RoadmapImg';

const Roadmap = () => {
  return (
    <PageLayout Bg3>
        <Width column>
            <Heading Text="Banner" />
            <div style={{height:"2rem"}} />
            <RoadmapImg />
        </Width>
    </PageLayout>
    )
};

export default Roadmap;
