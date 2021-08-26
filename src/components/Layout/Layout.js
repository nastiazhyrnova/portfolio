import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';

const LayoutStyled = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const Layout = props => {
	return (
		<LayoutStyled>
			<Header />
			<main>{props.children}</main>
			<Footer />
		</LayoutStyled>
	);
};

export default Layout;
