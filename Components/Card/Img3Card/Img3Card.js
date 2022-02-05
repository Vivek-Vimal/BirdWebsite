import React from 'react'
import styled from 'styled-components'
import Heading from '../../Heading/Heading'
import Text from '../../Text/Text'
import Button from '../../Button/Button'
import pic1 from './c1.png'
import pic2 from './c2.png'
import pic3 from './c3.png'
import Bg from './bg.png'
import Spin from './Spin.png'
import EthImg from './Eth.png'

export const Row = styled.div`
        display: flex;
        justify-content: space-between;
    `

const Img3Card = (props) => {

    const StyledHeaderCard = styled.div`
        background-image: url(${Bg});
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 2rem 0;
        max-width: 350px;
        min-width: 330px;
        margin: 3rem 0 0 0;
        @media only screen and (max-width: 410px) {
            max-width: 320px;
            min-width: 300px;
          }
    `
    const ImageContainer = styled.div`
        display: flex;
        justify-content: space-between;
        border: 2px solid #FFFFFF;
        backdrop-filter: blur(42px);
        width: 90%;
        border-radius: 20px;
        margin: 1rem 0;
        padding: 0.5rem;
    `
    const Image = styled.div`
        height: 8rem;
        width: 4rem;
    `
    const SmallButton = styled.button`
        background: linear-gradient(123.64deg, rgba(255, 255, 255, 0) -22.38%, rgba(255, 255, 255, 0.039) 70.38%);
        backdrop-filter: blur(42px);    
        border-radius: 15px;
        border: 2px solid  #FFFFFF;
        padding: 0.4rem 0.7rem;
        cursor: pointer;
    `

    return (
        <StyledHeaderCard>
           
            <Heading Text={`${props.Title ? props.Title : "Background"}`} size="2.5rem" outline="1.5px"/>
            <Text Text={`${props.Desc ? props.Desc : "From all projects"}`} />
            <ImageContainer>
                <Image>
                    <img src={`${props.Image1 ? props.Image1 : pic1}`} alt="" style={{height:"100%",width:'100%'}} />
                </Image>
                <Image style={{margin:"0 0.7rem"}}>
                    <img src={`${props.Image2 ? props.Image2 : pic2}`} alt="" style={{height:"100%",width:'100%'}} />
                </Image>
                <Image>
                    <img src={`${props.Image3 ? props.Image3 : pic3}`} alt="" style={{height:"100%",width:'100%'}} />
                </Image>
            </ImageContainer>
            <Row style={{ margin: "0 0 0 7rem"}}>
                <img src={Spin} alt="" style={{height:"1.5rem",width:"1.5rem"}}/>
                <div style={{display:"flex",margin:"0 0 0 2rem"}}>
                    <img src={EthImg} alt="" style={{height:"1.7rem",width:"1.1rem",margin:"0 0.3rem 0 0"}} />
                    <Text Text="ETH 3.31" color="#FFFFFF" />
                </div>
            </Row>
            <Text Text="1222 / 3333" />
            <Row style={{margin:"1rem 0"}}>
                <SmallButton
                    type='button'
                >
                    <svg width="21" height="4" viewBox="0 0 21 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.233 0.72C2.233 0.72 8.047 0.669 19.675 0.566999C20.117 0.566999 20.338 0.753999 20.338 1.128C20.338 2.828 19.726 3.678 18.502 3.678H0.907C0.465 3.678 0.244 3.338 0.244 2.658C0.244 1.366 0.907 0.72 2.233 0.72Z" fill="white"/>
                    </svg>
                </SmallButton>
                <div style={{margin:"0 2rem"}}>
                    <Text Text="2" color="#FFFFFF" size="3rem"/>
                </div>
                <SmallButton
                    type='button'
                >
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.08 19.305L9.125 12.6H1.025C0.575 12.6 0.35 12.3 0.35 11.7C0.35 10.38 0.995 9.72 2.285 9.72C5.375 9.72 7.655 9.705 9.125 9.675C9.155 7.935 9.17 5.7 9.17 2.97C9.17 1.62 9.95 0.944997 11.51 0.944997H11.69C11.75 0.944997 11.825 1.005 11.915 1.125C12.035 1.245 12.095 1.41 12.095 1.62C12.095 5.4 12.08 8.07 12.05 9.63L20.285 9.585C20.495 9.585 20.66 9.645 20.78 9.765C20.9 9.855 20.96 9.945 20.96 10.035V10.17C20.96 11.79 20.36 12.6 19.16 12.6H12.05C12.02 14.28 12.005 16.635 12.005 19.665C12.005 20.895 11.315 21.51 9.935 21.51C9.365 21.51 9.08 21.285 9.08 20.835V19.305Z" fill="white"/>
                    </svg>
                </SmallButton>
            </Row>
            <Button Text="Explore More" />

        </StyledHeaderCard>
    )
}

export default Img3Card
