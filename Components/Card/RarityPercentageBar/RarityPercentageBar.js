import React from 'react';
import styled from 'styled-components';
import { Line } from 'rc-progress';
import Heading from '../../Heading/Heading';
import Text from '../../Text/Text';

const RarityPercentageBar = (props) => {

    const StyledRarityContainer = styled.div`
        background: linear-gradient(123.64deg, rgba(255, 255, 255, 0) -22.38%, rgba(255, 255, 255, 0.039) 70.38%);
        backdrop-filter: blur(42px);
        border-radius: 20px;
        border: 2px solid #FFFFFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 0.5rem 1rem;
        max-width: 400px;
        min-width: 378px;;
        margin: 2rem 0;
        @media only screen and (max-width: 480px) {
            max-width: 98%;
            min-width: 95%;
          }
    `

    const PercentageContainer = styled.div`
        background: linear-gradient(123.64deg, rgba(255, 255, 255, 0) -22.38%, rgba(255, 255, 255, 0.039) 70.38%);
        backdrop-filter: blur(42px);
        border-radius: 20px;
        border: 2px solid #FFFFFF;
        width: 100%;
        margin: 0.5rem;
        padding:  0 0 0 0.5rem;
    `

  return (
    <StyledRarityContainer>

        <Heading Text="Rarity" size="2.5rem" outline="1.5px" />

        <PercentageContainer>
            <Text Text="Face" color="#FFFFFF" center />
            <div style={{display:"flex",alignItems:"center",width:"100%",justifyContent:"space-between"}}>
                <Line percent={`${props.Per1 ? props.Per1 : "20"}`} strokeWidth="1.8" strokeColor="rgba(252, 174, 115, 1)" />
                <div style={{margin: "0 1rem"}}><Text Text={`${props.Per1 ? props.Per1 : "20%"}`} color="rgba(105, 105, 105, 1)" /></div>
            </div>
        </PercentageContainer>
        <PercentageContainer>
            <Text Text="Eye" color="#FFFFFF" center/>
            <div style={{display:"flex",alignItems:"center",width:"100%",justifyContent:"space-between"}}>
                <Line percent={`${props.Per2 ? props.Per2 : "50"}`} strokeWidth="1.8" strokeColor="rgba(252, 115, 115, 1)" />
                <div style={{margin: "0 1rem"}}><Text Text={`${props.Per2 ? props.Per2 : "50%"}`} color="rgba(105, 105, 105, 1)" /></div>
            </div>
        </PercentageContainer>
        <PercentageContainer>
            <Text Text="Cloth" color="#FFFFFF" center/>
            <div style={{display:"flex",alignItems:"center",width:"100%",justifyContent:"space-between"}}>
                <Line percent={`${props.Per3 ? props.Per3 : "70"}`} strokeWidth="1.8" strokeColor="rgba(159, 252, 115, 1)" />
                <div style={{margin: "0 1rem"}}><Text Text={`${props.Per3 ? props.Per3 : "70%"}`} color="rgba(105, 105, 105, 1)" /></div>
            </div>
        </PercentageContainer>

    </StyledRarityContainer>
  )
};

export default RarityPercentageBar;
