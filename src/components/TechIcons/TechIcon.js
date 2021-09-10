import styled, { useTheme } from 'styled-components';

import Icon from '../UI/Icon';

const IconWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;

	p {
		font-size: 0.75rem;
		color: ${props => props.theme.secondaryText};
	}
`;

const TechIcon = props => {
	const theme = useTheme();

	return (
		<IconWrapper title={props.title}>
			<Icon
				icon={props.icon}
				title={props.title}
				size='3.5rem'
				color={theme.secondaryText}
			/>
			<div>
				<p>{props.title}</p>
				{props.subtitle && <p>{props.subtitle}</p>}
			</div>
		</IconWrapper>
	);
};

export default TechIcon;
