import styled from 'styled-components';

import AppIcon from './AppIcon';

const IconsContainer = styled.div`
	display: grid;
	gap: 2.5rem 1rem;
	grid-template-columns: repeat(7, 1fr);
	align-items: start;
	max-width: 800px;
	margin: 0 auto;

	@media (max-width: 767px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const AppIcons = props => {
	const icons = props.list.map(tech => (
		<AppIcon
			icon={tech.icon}
			title={tech.title}
			subtitle={tech.subtitle}
			key={`${tech.title} ${tech.subtitle && tech.subtitle}`}
			size={props.size}
		/>
	));

	return <IconsContainer>{icons}</IconsContainer>;
};

export default AppIcons;
