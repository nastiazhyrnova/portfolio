import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transition: 0.1s all ease-out;
  font-family: 'Inter', sans-serif;
}
:root {
  --white-color: #ffffff;
  --light-grey-color: #F5F5F5;
  --mid-grey-color: #D3D3D3;
  --dark-grey-color: #505050;
  --black-color: #333333;
  --the-darkest-black-color: #1c1c1c;
  --accent-color: #F15A29;
  --breakpoint-mobile: 767px;
}
::selection {
  background: #F15A29;
}
html {
  font-size: 14px;
}
body {
  background-color: ${props => props.theme.mainBg};
  color: ${props => props.theme.mainText};
}
main, header, footer {
  margin: 0 auto;
	max-width: 1170px;
	text-align: center;
}
header,footer {
  padding: 0.5rem;
}
main {
  flex: 2 1 0;
  padding: 1rem;
}
a {
  color: inherit;
  text-decoration: none
}
h1 {
  font-size: 4rem
}
h2 {
  font-size: 2.5rem;
  padding: 2rem 0 4rem;
}
h3 {
  font-size: 2.25rem;
  padding: 7rem 0 3rem;
}
h4 {
  font-size: 1.5rem;
  padding: 1.5rem 0;
  font-weight: 600;
}
h5 {
  font-size: 1.1rem;
  font-weight: 600;
}
h6 {
  font-size: 1rem;
  font-weight: 500;
}
.icon {
  vertical-align: middle;
}
.icon:hover {
  color: var(--accent-color)
}

`;

export default GlobalStyles;
