import styled from 'styled-components';

const text = styled.h1`
  font-family: ${props => props.fontFamily};
  font-size: ${props => props.size};
  color: ${props => props.color};
`;

export const Titles = styled.h1`
  font: 400 'Roboto', sans-serif;
  color: ${props => props.color};
  font-size: ${props => props.size};
  margin: 5px;
`;

export const Subtitles = styled.h2`
  font: 200 'Roboto Condensed', sans-serif;
  font-size: ${props => props.size};
  text-transform: uppercase;
  letter-spacing: 5px;
  background: -webkit-linear-gradient(#572172, #7C199E, #B744EF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0 0 15px;
`;

export default text  
