import React from 'react';
import PageLayout from '../../../Components/PageLayout/PageLayout';
import Width from '../../../Components/Width'
import Heading from '../../../Components/Heading';
import Text from '../../../Components/Text'
import Gallery from './component/Gallery';

const Team = () => {
  return (
    <PageLayout>
        <Width column>
            <Heading Text="Meet the team" lg='linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%)' />
            <svg style={{margin:'2rem 0 0 0'}} width="50" height="8" viewBox="0 0 50 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="3.5" y1="4.42188" x2="46.5" y2="4.42188" stroke="url(#paint0_linear_185_66)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                <linearGradient id="paint0_linear_185_66" x1="27.5" y1="7.76447" x2="27.5011" y2="9.53774" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FD749B"/>
                <stop offset="1" stopColor="#281AC8"/>
                </linearGradient>
                </defs>
            </svg>
            <div style={{maxWidth:"998px", margin:'2rem 0 0 0'}}>
              <Text lh='1.7' center Text="Meet the team that  makes the process of this system fast and painless as possible to provide you with good result " />
            </div>
            <Gallery />
        </Width>
    </PageLayout>
  );
};

export default Team;
