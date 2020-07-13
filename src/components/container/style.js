import styled from 'styled-components';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-heigth: 100vh;
  padding-top: 5px;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  min-height: 300px;
  background: #FDEFFE99;
  border-radius: 15px;
  padding: 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default Style 
 