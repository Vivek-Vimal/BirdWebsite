import React from 'react';
import styled from 'styled-components';

const StyledMemberImage = styled.div`
    width: 50rem;
    height: 22rem;
`

const MemberImage = ({children}) => {
  return (
    <StyledMemberImage>
        {children}
    </StyledMemberImage>
    );
};

export default MemberImage;
