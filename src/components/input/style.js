import styled from 'styled-components';

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  margin-left: 40px;
  min-width: 350px;
  padding: 5px 10px 0;
  border-radius: 10px;
  background: linear-gradient(90deg, rgba(21,1,25,1) 0%, rgba(38,10,56,1) 35%, rgba(67,34,88,1) 100%);
  color: #FDFCFC;
`;

export const UserInput = styled.input`
  font: 600 18px 'Roboto', sans-serif;
  text-align: center;
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #FDFCFC;
  padding: 8px 16px;
  min-width: 100px;
  color: #FDFCFC;

    &:active,
    &:focus {
      border: transparent;
    }
`;

export const Label = styled.label`
  font: 600 14px 'Roboto Condensed', sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-top: 15px;
`;