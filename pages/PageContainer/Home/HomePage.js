import React from 'react';
import PageLayout from '../../../Components/PageLayout';
import Width from '../../../Components/Width/Width';
import TextContainer from './components/TextContainer';
import ImageContainer from './components/ImageContainer';

const HomePage = () => {
  return (
    <PageLayout>
      <Width>
        <TextContainer />
        <ImageContainer />
      </Width>
    </PageLayout>
  )
};

export default HomePage;
