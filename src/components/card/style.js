import styled from 'styled-components';

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #FDFCFC;
  min-width: 300px;
  min-height: 400px;
  border-radius: 10px;
  border-top: 10px solid #572172;
  border-bottom: 25px solid #572172;
  margin-bottom: 10px;
  padding-bottom: 25px;
  -webkit-box-shadow: 39px 1px 22px -7px rgba(0,0,0,0.38);
  -moz-box-shadow: 39px 1px 22px -7px rgba(0,0,0,0.38);
  box-shadow: 39px 1px 22px -7px rgba(0,0,0,0.38);
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  min-height: 50px;
  min-width: 400px;
  padding: 10px 15px;
  color: #FDFCFC;
  background: #572172;
`;

export const CardTitle = styled.h1`
  font: 800 14px 'Montserrat', sans-serif;
  margin-top: 3px;
`;

export const CardSubtitle = styled.h2`
  font: 200 18px 'Montserrat', sans-serif;
`;

export const CardAlert = styled.div`
  font: 400 42px 'Montserrat', sans-serif;
  text-transform: uppercase;
  background: -webkit-linear-gradient(#572172,#572172,#B744EF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  min-width: 400px;
  text-align: center;
  margin-bottom: 10px;
`;

export const CardPrice = styled.div`
  font: 600 36px 'Roboto', sans-serif;
  text-transform: uppercase;
  color: #FDFCFC;
  background: #572172;
  min-width: 400px;
  margin-bottom: 20px;
  padding-bottom: 5px;
  text-align: center;
`;

export const CardNumber = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  font: 600 32px 'Roboto', sans-serif;
  color: #FDFCFC;
  padding: 25px 15px 5px;
  background: #572172;
  min-width: 400px;
  border-bottom: 1px solid #FDFCFC;
`;