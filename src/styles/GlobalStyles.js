import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
:root {
  --white-color: #ffffff;
  --light-grey-color: #F5F5F5;
  --mid-grey-color: #D3D3D3;
  --dark-grey-color: #777777;
  --black-color: #333333;
  --accent-color: #F15A29;
}
html {
  font-size: 16px;
}
body {
  background-color: ${({ theme }) => theme.mainBg};
  color: ${({ theme }) => theme.mainText};
  font-family: 'Inter', sans-serif;
}

`;

export default GlobalStyles;
