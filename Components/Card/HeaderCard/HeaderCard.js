import React from 'react'
import styled from 'styled-components'
import Heading from '../../Heading/Heading'
import Button from '../../Button/Button'
import cat1 from './c1.png'
import cat2 from './c2.png'
import Bg from './bg.png'

const HeaderCard = (props) => {

    const StyledHeaderCard = styled.div`
        background-image: url(${Bg});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0 1rem 3rem;
        max-width: 1200px;
        @media only screen and (max-width: 1300px) {
            flex-direction: column;
            padding: 5rem 1rem 2rem 3rem;
            max-width: 888px;
          }
        @media only screen and (max-width: 520px) {
            padding: 4rem 1rem 2rem 2rem;
          }
    `
    const LeftSide = styled.div`
        width: 50%;

        @media only screen and (max-width: 1300px) {
            width: 35rem;
          }
        
        @media only screen and (max-width: 1200px) {
            width: 100%;
          }
    `
    const RightSide = styled.div`
        display: flex;
        justify-content: space-between;
        width: 50%;
        @media only screen and (max-width: 1300px) {
            width: 25rem;
          }
        @media only screen and (max-width: 520px) {
            width: 100%;
          }
    `
    const Image1 = styled.div`
        width: 20rem;
        @media only screen and (max-width: 1300px) {
            width: 50%;
          }
    `
    const Image2 = styled.div`
        width: 20rem;
        @media only screen and (max-width: 1300px) {
            width: 50%;
          }
    `
    const ButtonContainer = styled.div`
          margin: 0.6rem 0 0 3rem;
    `

    return (
        <StyledHeaderCard>
            <LeftSide>
                <Heading Text={`${props.Title ? props.Title : "Welcome to Crypto Cat NFTs Here You Can Mint Trades"}`} />
                <ButtonContainer>
                    <Button Text="Explore More" />
                </ButtonContainer>
            </LeftSide>
            <RightSide>
                <Image1>
                    <img src={`${props.Image1 ? props.Image1 : cat1}`} alt="" style={{height:"100%",width:'100%'}} />
                </Image1>
                <Image2>
                    <img src={`${props.Image2 ? props.Image2 : cat2}`} alt="" style={{height:"100%",width:'100%'}} />
                </Image2>
            </RightSide>
        </StyledHeaderCard>
    )
}

export default HeaderCard
