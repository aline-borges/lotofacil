import React from 'react';
import { CardBody, CardHeader, CardTitle, CardSubtitle, CardPrice, CardAlert, CardNumber } from './style';

const Card = (props) => {
  return(
    <CardBody>
      <CardNumber>
        {props.number}
      </CardNumber>
      <CardHeader>
        <CardTitle>{props.text}</CardTitle>
        <CardSubtitle>{props.data}</CardSubtitle>
      </CardHeader>
      <CardPrice>{props.price}</CardPrice>
      <CardAlert>{props.message}</CardAlert>
      {props.children}
    </CardBody>
  );
}

export default Card 
