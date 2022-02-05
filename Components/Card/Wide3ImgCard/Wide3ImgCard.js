import React from 'react'
import styled from 'styled-components'
import pic1 from './c1.png'
import pic2 from './c2.png'
import pic3 from './c3.png'
import LeftArrowImg from './LeftArrow.png'
import RightArrowImg from './RightArrow.png'
import Heading from '../../Heading/Heading'

const Wide3ImgCard = (props) => {

    const StyledCard = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2.5rem 0;
        max-width: 847px;
        height: 244px;
        border: 2px solid #FFFFFF;
        position: relative;
        background: linear-gradient(123.64deg, rgba(255, 255, 255, 0) -22.38%, rgba(255, 255, 255, 0.039) 70.38%);
        backdrop-filter: blur(42px);
        border-radius: 20px;
         padding: 0 4rem;
        margin: 1rem 0;
        @media only screen and (max-width: 768px) {
            padding: 0 2rem;
            justify-content: space-around;

          }
        @media only screen and (max-width: 650px) {
            width: 90%;
          }
    `
    const LeftArrow = styled.div`
        background-image: url(${LeftArrowImg});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        cursor: pointer;
        position: absolute;
        left: -1.8rem;
        top: 40%;
        height: 4rem;
        width: 4rem;
        background-color: #FFF;
        border-radius: 1rem;
    `
    const RightArrow = styled.div`
        background-image: url(${RightArrowImg});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        cursor: pointer;
        position: absolute;
        right: -1.8rem;
        top: 40%;
        height: 4rem;
        width: 4rem;
        background-color: #FFF;
        border-radius: 1rem;
    `
    const Image = styled.div`
        height: auto;
        width: 33%;
        @media only screen and (max-width: 600px) {
            width: 100%;
          }
    `
    const Image2 = styled.div`
        height: auto;
        width: 33%;
        display: block;
        @media only screen and (max-width: 600px) {
            display: none;
          }
    `

    const Image3 = styled.div`
        height: auto;
        width: 33%;
        display: block;
        @media only screen and (max-width: 1100px) {
            display: none;
          }
    `
    const CardContainer = styled.div`
          display: flex;
          align-items: center;
          flex-direction: column;
    `

    return (
        <CardContainer>

            <Heading Text={`${props.Title ? props.Title : "Background"}`} alt="" center size="2.5rem" outline="1.5px"/>
            
            <StyledCard>

                <LeftArrow />

                <Image>
                    <img src={`${props.Image1 ? props.Image1 : pic1}`} alt="" style={{height:"100%",width:'100%'}} />
                </Image>
                <Image2 style={{margin:"0 2rem"}}>
                    <img src={`${props.Image2 ? props.Image2 : pic2}`} alt="" style={{height:"100%",width:'100%'}} />
                </Image2>
                <Image3>
                    <img src={`${props.Image3 ? props.Image3 : pic3}`} alt="" style={{height:"100%",width:'100%'}} />
                </Image3>

                <RightArrow/>
            
            </StyledCard>

        </CardContainer>
    )
}

export default Wide3ImgCard
