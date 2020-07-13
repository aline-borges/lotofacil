import styled from 'styled-components';

const Style = styled.button`
  font: 800 14px 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  min-width: 300px;
  margin-top: 25px;
  padding: 12px 24px;
  border: 1px solid #FDFCFC;
  background: transparent;
  color: #FDFCFC;
  cursor: pointer;

    &:hover {
      background: #FDFCFC;
      color: #572172;
    }
`;

export default Style 
