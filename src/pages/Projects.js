import { useEffect } from 'react';

import Layout from '../components/Layout/Layout';
import ProjectItems from '../components/Projects/ProjectItems';

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Layout>
			<h2>Projects</h2>
			<ProjectItems />
		</Layout>
	);
};

export default Projects;
