import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #root {

  height: 100vh;

  font-family: 'PT Sans Caption', sans-serif;
  
}

.App {

  background: linear-gradient(-360deg, #41a9dc, #1588c7);

  display: flex;
  align-items: center;
  flex-direction: column;
}

button {
  cursor: pointer;
}

`;

