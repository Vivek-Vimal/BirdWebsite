import React from 'react';
import PageLayout from '../../../Components/PageLayout';
import Width from '../../../Components/Width/Width';
import 'react-alice-carousel/lib/alice-carousel.css'
import AliceCarousel from 'react-alice-carousel'
import Google from './component/Google';

const Slide = () => {
  return (
    <PageLayout>
        <Width>
            <AliceCarousel
                paddingLeft={12}
                // autoPlay
                infinite
                animationDuration={1700}
                // disableButtonsControls
                // disableDotsControls
                // responsive={responsive}
                autoWidth
            >
                <Google />
                <Google />
            </AliceCarousel>
        </Width>
    </PageLayout>
  )
  ;
};

export default Slide;
