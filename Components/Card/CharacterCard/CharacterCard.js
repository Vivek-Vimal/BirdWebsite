import React from 'react'
import styled from 'styled-components'
import pic from './bigcat.png'

const CharacterCard = (props) => {

    const StyledHeaderCard = styled.div`
        width: 378px;
        height: 616px;
        border: 2px solid #FFFFFF;
        border-radius: 20px;
        @media only screen and (max-width: 480px) {
            width: 95%;
            height: auto;
          }
    `

    return (
        <StyledHeaderCard>

            <img src={`${props.Image ? props.Image : pic}`} alt="" style={{height:"100%",width:'100%',borderRadius:"20px"}} />

        </StyledHeaderCard>
    )
}

export default CharacterCard
