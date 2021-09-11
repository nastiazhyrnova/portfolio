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
a {
  color: inherit;
  text-decoration: none
}
h1 {
  font-size: 4rem
}
h2 {
  font-size: 3rem;
  /* margin: 5rem 0 0; */
}
h3 {
  font-size: 2.25rem;
  padding: 7rem 0 3rem;
}
h4 {
  font-size: 1.8rem;
  padding: 1.5rem 0;
  font-weight: 500;
}
.icon {
  vertical-align: middle;
}
.icon:hover {
  color: var(--accent-color)
}
/* @media (max-width: 767px){
  h1 {
    font-size: 4rem;
  }
} */

`;

export default GlobalStyles;
