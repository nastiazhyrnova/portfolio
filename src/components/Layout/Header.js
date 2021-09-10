import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ThemeToggle from '../UI/ThemeToggle';
import MainNav from '../Navigation/MainNav';

import logoDark from '../../assets/logo/logoDark.svg';
import logoLight from '../../assets/logo/logoLight.svg';

const HeaderStyled = styled.header`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	width: 100%;
	& img,
	div {
		flex: 1 0 auto;
	}
	& img {
		max-width: 100px;
	}
	& nav {
		flex: 3 1 auto;
	}

	@media (max-width: 767px) {
		display: none;
		background-color: ${props => props.theme.mainBg};
		flex-direction: column;
		position: fixed;
		height: 100vh;
	}
`;

const Logo = styled.img`
	height: 2rem;
`;

const Header = props => {
	const theme = useSelector(state => state.theme);

	return (
		<HeaderStyled>
			<Logo src={theme === 'light' ? logoDark : logoLight} alt='Logo nZh' />
			<MainNav />
			<ThemeToggle />
		</HeaderStyled>
	);
};

export default Header;
