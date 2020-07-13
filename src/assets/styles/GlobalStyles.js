import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font: 200 15px 'Roboto', sans-serif;
    min-width: 100vw;
    min-height: 100vh;
    background-image: linear-gradient(#572172,#B744EF,#C37CC1);
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  td,
  tr,
  th {
    weight: normal;
  }
`;

export default GlobalStyle 
