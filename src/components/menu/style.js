import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  min-width: 100vw;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: transparent;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
`;

export const Item = styled.li`
  font: 600 12px 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #FDFCFC;
  padding: 8px 24px;
  cursor: pointer;
  border-bottom: 2px solid transparent;

    &:hover {
      border-bottom: 2px solid #FDFCFC;
    }
`;

export const Logo = styled.img`
  width: 30px;
  margin-right: 5px;
  border-bottom: 2px solid transparent;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font: 300 14px 'Roboto Condensed', sans-serif;
  text-transform: uppercase;
  color: #FDFCFC;
  border-bottom: 2px solid transparent;
`;