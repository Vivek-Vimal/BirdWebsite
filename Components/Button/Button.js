import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion';

const Button = (props) => {

    const StyledButton = styled(motion.button)`

        color: ${ props.color ? props.color : "#E5E5E5" };
        font-size:${ props.fontSize ? props.fontSize : "17px" } ;
        line-height: ${ props.noLineHeight ? "1" : "150%"} ;
        letter-spacing: ${props.ls ? props.ls : "0.135em" } ;
        padding: ${props.big ? "1rem 2rem" : "0.7rem 1rem"} ;
        min-width: 7rem;
        height: 2.7rem ;
        padding: 1.2px 1.5px !important;
        font-weight: bold;
        position: relative;
        background:linear-gradient(to right, #7362f1, #db4cc7, #ff5293, #ff7867, #ffa34e);
        border-radius: 0.7rem;
        border: none;
        cursor: pointer;
        
`
    const ButtonInside = styled.div`

        background:  rgb(28, 5, 49);
        color: white;
        padding: 0 2rem;
        border-radius: 0.7rem;
        display: grid;
        place-items: center;
        height: 100%;
    `

    return (
        <StyledButton type="button"
            whileHover={{ scale: 1.1,boxShadow:"0 0 15px rgb(250, 0, 117)"}}
            whileTap={{ scale: 0.7 }}
        >
            <ButtonInside>
                {props.Text? props.Text : "Default Button"}
            </ButtonInside>
        </StyledButton>
    )
    }
export default Button;