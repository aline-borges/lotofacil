import React from 'react';
import { Nav, List, Item, Logo, Header } from './style';
import logo from '../../assets/images/logo.png';

const Menu = () => {
  return(
    <Nav>
      <Header>
        <Logo src={logo} alt={logo} />
        <h1>Lotofácil</h1>
      </Header>
      <List>
        <Item>Sobre</Item>
        <Item>Resultados</Item>
        <Item>Meus Jogos</Item>
      </List>
    </Nav>
  );
}

export default Menu 
