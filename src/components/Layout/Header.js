import { useSelector } from 'react-redux';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

import ThemeToggle from '../UI/ThemeToggle';
import MainNav from '../Navigation/MainNav';

import logoDark from '../../assets/logo/logoDark.svg';
import logoLight from '../../assets/logo/logoLight.svg';

const HeaderStyled = styled.header`
	z-index: 99;
	position: sticky;
	top: 0;
	background-color: ${props => props.theme.mainBg};
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	& a,
	div {
		flex: 1 0 auto;
	}
	& img {
		max-width: 100px;
	}
	& nav {
		flex: 50 1 auto;
	}

	@media (max-width: 767px) {
		position: fixed;
		display: ${props => (props.showMobile ? 'flex' : 'none')};
		flex-direction: column;
		background-color: ${props => props.theme.mainBg};
		height: 100vh;
		justify-content: space-between;
		& a {
			flex: 1 1 auto;
		}
		& nav {
			flex: 4 1 auto;
		}
		& div {
			flex: 4 1 auto;
		}
	}
`;

const Logo = styled.img`
	height: 2rem;
`;

const Header = props => {
	const theme = useSelector(state => state.theme);
	return (
		<HeaderStyled showMobile={props.showMobile}>
			<HashLink to='/#home' smooth>
				<Logo src={theme === 'light' ? logoDark : logoLight} alt='Logo nZh' />
			</HashLink>
			<MainNav closeMobileMenu={props.closeMobileMenu} />
			<ThemeToggle />
		</HeaderStyled>
	);
};

export default Header;
