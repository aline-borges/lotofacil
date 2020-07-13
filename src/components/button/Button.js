import React from 'react';
import Style from './style';

const Button = (props) => {
  return(
    <Style>
      {props.children}
    </Style>
  );
}

export default Button 
