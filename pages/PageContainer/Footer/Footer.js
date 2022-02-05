import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';
import Text from '../../../Components/Text';
import Row from './components/Row';
import ImageBox from './components/ImageBox';

const StyledFoot = styled.footer`
    min-height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 10% 1.5rem 10%;
    background-color: rgba(76, 17, 122, 0.97);
    @media only screen and (max-width: 998px) {
        flex-direction: column;
        min-height: auto;
        padding: 1.5rem;
   }
`;

const Img = styled(motion.img)`
    width: 2.5rem;
    cursor: pointer;
    @media only screen and (max-width: 950px) {
        margin: 2rem 0;
    }
 `

const Footer = () => {
    return (
        <StyledFoot>
            <Row>
                <img src="../images/logo/logo.png" alt="Logo" style={{width:"8rem"}} />
            </Row>

            <Row>
                <Text Text='privacy statement' size='1.2rem'/>
                <div style={{margin:'0 2rem'}}>
                    <Text Text='terms of service'size='1.2rem'/>  
                </div>
                <Text Text='we`re hiring!' size='1.2rem' />
            </Row>
            
            <ImageBox>
                <Img
                    style={{width:"2rem",margin:"0 1rem"}}
                    whileHover={{ scale: 1.2}}
                    whileTap={{ scale: 0.7 }}
                    src="https://assets.website-files.com/605cf560c1c73e1ee595cfc6/6063ee9e283200ce55f019f7_footer-twitter.svg" alt="" 
                />
                <Img 
                    style={{width:"2rem",margin:"0 1rem"}}
                    whileHover={{ scale: 1.2}}
                    whileTap={{ scale: 0.7 }}
                    src="https://assets.website-files.com/605cf560c1c73e1ee595cfc6/6063ee9e75da23553d7ea376_footer-linkedin.svg" alt="" 
                />  
            </ImageBox>
        </StyledFoot>
    )
}

export default Footer