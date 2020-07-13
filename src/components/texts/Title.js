import React from 'react';
import { Titles } from './style';

const Title = (props) => {
  return(
    <Titles color={props.color} size={props.size}>
      {props.children}
    </Titles>
  );
}

export default Title 
