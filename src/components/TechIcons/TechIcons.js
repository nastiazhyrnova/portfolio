import styled from 'styled-components';

import TechIcon from './TechIcon';

import { TECHS } from './TechList';

const IconsContainer = styled.div`
	display: grid;
	gap: 2.5rem 1rem;
	grid-template-columns: repeat(6, 1fr);
	align-items: flex-start;
	justify-content: space-evenly;
	/* flex-wrap: wrap; */
	max-width: 750px;
	margin: 0 auto;

	@media (max-width: 767px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;

const TechIcons = props => {
	const icons = TECHS.map(tech => (
		<TechIcon
			icon={tech.icon}
			title={tech.title}
			subtitle={tech.subtitle}
			key={tech.title}
		/>
	));

	return <IconsContainer>{icons}</IconsContainer>;
};

export default TechIcons;
