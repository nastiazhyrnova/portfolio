import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: 0.3s all ease-out;
}
:root {
  --white-color: #ffffff;
  --light-grey-color: #F5F5F5;
  --mid-grey-color: #D3D3D3;
  --dark-grey-color: #777777;
  --black-color: #333333;
  --accent-color: #F15A29;
  --breakpoint-mobile: 767px;
}
::selection {
  background: #F15A29;
}
html {
  font-size: 16px;
}
body {
  background-color: ${props => props.theme.mainBg};
  color: ${props => props.theme.mainText};
  font-family: 'Inter', sans-serif;
}
main, header, footer {
  margin: 0 auto;
	padding: 0.5rem;
	max-width: 1170px;
	text-align: center;
}
main {
  flex: 2 1 0;
}
`;

export default GlobalStyles;
