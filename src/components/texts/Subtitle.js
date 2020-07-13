import React from 'react';
import { Subtitles } from './style';

const Subtitle = (props) => {
  return(
    <Subtitles size={props.size}>
      {props.children}
    </Subtitles>
  );
}

export default Subtitle 
