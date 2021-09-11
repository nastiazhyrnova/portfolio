import { NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import styled, { css } from 'styled-components';

const linkStyles = css`
	padding: 0.5rem 1.5rem;
	border-radius: 2rem;
	background: transparent;
	font-size: 0.9rem;
	&.active,
	:hover {
		background-color: ${props => props.theme.componentsBg};
		transition: 0.8s all ease-out;
	}
`;

const NavLinkStyled = styled(NavLink)`
	${linkStyles}
`;

const NavHashLinkStyled = styled(NavHashLink)`
	${linkStyles}
`;

const ButtonStyled = styled.button`
	${linkStyles}
	outline: none;
	border: none;
	cursor: pointer;
`;

const NavItem = props => {
	const navLinkEl = (
		<NavLinkStyled to={props.path} onClick={props.closeMobileMenu}>
			{props.name}
		</NavLinkStyled>
	);

	const navHashLinkEl = (
		<NavHashLinkStyled smooth to={props.path} onClick={props.closeMobileMenu}>
			{props.name}
		</NavHashLinkStyled>
	);

	const button = (
		<ButtonStyled {...props} onClick={props.closeMobileMenu}>
			{props.name}
		</ButtonStyled>
	);

	return (
		<li>
			{props.navlink ? (props.hashlink ? navLinkEl : navHashLinkEl) : button}
		</li>
	);
};

export default NavItem;
