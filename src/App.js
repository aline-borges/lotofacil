import React from 'react';
import GlobalStyle from './assets/styles/GlobalStyles';
import Home from './pages/Home';
import Menu from './components/menu/Menu';

function App() {
  return (
    <>
      <Menu />
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;
