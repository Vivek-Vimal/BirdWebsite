import React from 'react';
import FlexColumnDisplay from './FlexColumnDisplay';

const TextContainer = ({children}) => {
  return (
    <FlexColumnDisplay>
        {children}
    </FlexColumnDisplay>
  )
};

export default TextContainer;
