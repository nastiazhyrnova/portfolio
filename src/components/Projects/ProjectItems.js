import styled from 'styled-components';

import ProjectItem from './ProjectItem';

import { PROJECTSLIST } from './ProjectsList';

const Projects = styled.div`
	max-width: 900px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 3rem 1.5rem;

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
	}
`;

const ProjectItems = props => {
	const projects = PROJECTSLIST.map(project => (
		<ProjectItem key={project.id} project={project} />
	));

	return <Projects>{projects}</Projects>;
};

export default ProjectItems;
