import styled from 'styled-components';

const ButtonStyled = styled.button`
	background-color: ${props => props.theme.buttonBg};
	color: ${props => props.theme.mainBg};
	outline: none;
	border: none;
	padding: 1rem 3rem;
	font-size: 1.25rem;
	border-radius: 1rem;
	margin: 7rem 0 2rem;

	&:hover {
		cursor: pointer;
		background-color: var(--accent-color);
		color: var(--white-color);
	}
`;

const Button = props => {
	return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};

export default Button;
