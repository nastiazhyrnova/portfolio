import styled from 'styled-components';

const BurgerButtonWrapper = styled.div`
	z-index: 100;
	position: fixed;
	top: 0;
	right: 0;
	@media (min-width: 768px) {
		display: none;
	}
`;
const BurgerButton = styled.button`
	padding: 15px 15px;
	display: inline-block;
	cursor: pointer;
	transition-property: opacity, filter;
	transition-duration: 0.15s;
	transition-timing-function: linear;
	font: inherit;
	color: inherit;
	text-transform: none;
	background-color: transparent;
	border: 0;
	margin: 0;
	overflow: visible;
`;
const BurgerBox = styled.span`
	width: 40px;
	height: 24px;
	display: inline-block;
	position: relative;
`;
const BurgerInner = styled.span`
	position: absolute;
	display: block;
	transition-property: transform, opacity;
	transition-timing-function: ease;
	transition-duration: 0.15s;
	width: 40px;
	height: 4px;
	background-color: ${props => props.theme.mainText};
	border-radius: 4px;
	margin-top: -2px;
	top: 2px;
	transform: ${props =>
		props.isActive ? 'translate3d(0, 10px, 0) rotate(45deg)' : 'none'};
	&::before,
	&::after {
		width: 40px;
		height: 4px;
		background-color: ${props => props.theme.mainText};
		border-radius: 4px;
		position: absolute;
		content: '';
		display: block;
	}
	&::before {
		top: 10px;
		transform: ${props =>
			props.isActive && 'rotate(-45deg) translate3d(-5.71429px, -6px, 0)'};
		opacity: ${props => (props.isActive ? '0' : '1')};
	}
	&::after {
		top: 20px;
		transform: ${props =>
			props.isActive && 'translate3d(0, -20px, 0) rotate(-90deg)'};
	}
`;

const Burger = props => {
	return (
		<BurgerButtonWrapper>
			<BurgerButton
				type='button'
				isActive={props.isActive}
				title='Menu'
				onClick={props.onClick}>
				<BurgerBox>
					<BurgerInner isActive={props.isActive}></BurgerInner>
				</BurgerBox>
			</BurgerButton>
		</BurgerButtonWrapper>
	);
};

export default Burger;
