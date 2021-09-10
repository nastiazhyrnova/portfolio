import { NavLink } from 'react-router-dom';
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

const ButtonStyled = styled.button`
	${linkStyles}
	outline: none;
	border: none;
	cursor: pointer;
`;

const NavItem = props => {
	return (
		<li>
			{props.navlink ? (
				<NavLinkStyled to={props.path}>{props.name}</NavLinkStyled>
			) : (
				<ButtonStyled {...props}>{props.name}</ButtonStyled>
			)}
		</li>
	);
};

export default NavItem;
