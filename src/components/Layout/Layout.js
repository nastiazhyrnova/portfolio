import { useState } from 'react';
import { useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';

import styled from 'styled-components';

import Footer from './Footer';
import Header from './Header';
import Burger from '../Navigation/Burger';

import logoDark from '../../assets/logo/logoDark.svg';
import logoLight from '../../assets/logo/logoLight.svg';

const LayoutStyled = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: 767px) {
		padding-top: 3.5rem;
	}
`;

const MobileHeader = styled.div`
	background-color: ${props => props.theme.mainBg};
	z-index: 98;
	width: 100%;
	position: fixed;
	top: 0;
	height: 3.5rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
`;
const Logo = styled.img`
	height: 2rem;
	margin: 1rem;

	@media (min-width: 768px) {
		display: none;
	}
`;

const Layout = props => {
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const theme = useSelector(state => state.theme);

	return (
		<LayoutStyled>
			<MobileHeader>
				<HashLink to='/#home' smooth>
					<Logo src={theme === 'light' ? logoDark : logoLight} alt='Logo nZh' />
				</HashLink>
			</MobileHeader>
			<Burger
				isActive={showMobileMenu}
				onClick={() => setShowMobileMenu(!showMobileMenu)}
			/>
			<Header
				showMobile={showMobileMenu}
				closeMobileMenu={() => setShowMobileMenu(false)}
			/>
			<main>{props.children}</main>
			<Footer />
		</LayoutStyled>
	);
};

export default Layout;
