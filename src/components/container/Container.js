import React from 'react';
import Style from './style';

const Container = (props) => {
  return(
    <Style>
      {props.children}
    </Style>
  );
}

export default Container 
