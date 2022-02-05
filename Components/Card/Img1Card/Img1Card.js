import React from 'react'
import styled from 'styled-components'
import Heading from '../../Heading/Heading'
import Button from '../../Button/Button'
import pic1 from './c1.png'
import Bg from './bg.png'

const Img1Card = (props) => {

    const StyledHeaderCard = styled.div`
        background-image: url(${Bg});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 2.5rem 0;
        max-width: 350px;
        min-width: 330px;
        margin: 3rem 0 0 0;
    `
    const ImageContainer = styled.div`
        display: flex;
        justify-content: space-between;
        backdrop-filter: blur(42px);
        width: 90%;
        height: 12rem;
        border-radius: 20px;
        margin: 1.5rem 0;
    ` 

    return (
        <StyledHeaderCard>
           
            <Heading Text={`${props.Title ? props.Title : "Category"}`} size="2.5rem" outline="1.5px"/>
            <Heading Text={`${props.SubTitle ? props.SubTitle : "Background"}`} size="2.5rem" outline="1.5px"/>
            <ImageContainer>
                <img src={`${props.Image1 ? props.Image1 : pic1}`} alt="" style={{height:"100%",width:'100%'}} />
            </ImageContainer>
            <Heading Text="Background #0012" outline="2px" size="2.2rem" />
            <div style={{height:"1.5rem"}} />
            <Button Text="open" />

        </StyledHeaderCard>
    )
}

export default Img1Card
