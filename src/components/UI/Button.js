import styled from 'styled-components';

const ButtonStyled = styled.button`
	background-color: var(--accent-color);
	color: var(--white-color);
	outline: none;
	border: none;
	padding: 1rem 3rem;
	font-size: 1.25rem;
	border-radius: 0.75rem;
	margin: 1rem 0;
	&:hover {
		cursor: pointer;
		background-color: ${props => props.theme.buttonBg};
		color: ${props => props.theme.mainBg};
	}
`;

const Button = props => {
	return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};

export default Button;
