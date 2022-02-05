import React from 'react';
import PageLayout from '../../../Components/PageLayout';
import Width from '../../../Components/Width/Width';
import Heading from '../../../Components/Heading'
import BannerImg from './component/BannerImg';

const Banner = () => {
  return (
    <PageLayout Bg2>
        <Width column>
            <Heading Text="Banner" color="#7F00FF" />
            <BannerImg />
        </Width>
    </PageLayout>
    )
};

export default Banner;
