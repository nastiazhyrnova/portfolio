import styled from 'styled-components';

import { FaGlobe } from 'react-icons/fa';
import { SiGithub } from 'react-icons/si';

import Icon from '../UI/Icon';

import { STACK_ICONS } from './ProjectsList';

const Project = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 1rem;
	background-color: ${props => props.theme.mainBg};
	filter: ${props => `drop-shadow(0 0 10px ${props.theme.shadow})`};
	img {
		border-radius: 1rem 1rem 0 0;
		width: 100%;
	}
`;
const MainContentWrapper = styled.div`
	padding: 0 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
	h4 {
		padding-bottom: 1rem;
	}
`;
const Tags = styled.div`
	margin: 1rem 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
	span {
		background-color: ${props => props.theme.componentsBg};
		color: ${props => props.theme.secondaryText};
		font-size: 0.8rem;
		padding: 0.3rem 0.6rem;
		border-radius: 1rem;
	}
`;
const Stack = styled.div`
	margin: 1.5rem 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 1rem;
	span {
	}
`;
const ButtonsWrapper = styled.div`
	margin: 1rem;
`;
const SmallButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	/* Commented out until Case studies are ready */
	/* margin-bottom: 1rem; */
	a {
		width: 100%;
		/* Commented out until Case studies are ready */
		/* background-color: ${props => props.theme.componentsBg};
		color: ${props => props.theme.mainText}; */
		background-color: ${props => props.theme.additionalText};
		color: ${props => props.theme.mainText};
		outline: none;
		border: none;
		padding: 1rem;
		font-size: 1rem;
		border-radius: 0.75rem;
		margin: 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 0.25rem;
		&:hover {
			cursor: pointer;
			/* Commented out until Case studies are ready */
			/* background-color: ${props => props.theme.mainText};
			color: ${props => props.theme.componentsBg}; */
			background-color: var(--accent-color);
			color: var(--white-color);
		}
	}
`;

const CaseStudyButton = styled.button`
	width: 100%;
	background-color: ${props => props.theme.mainText};
	color: ${props => props.theme.mainBg};
	outline: none;
	border: none;
	padding: 1rem;
	font-size: 1rem;
	border-radius: 0.75rem;
	margin: 0;
	&:hover {
		cursor: pointer;
		background-color: var(--accent-color);
		color: var(--white-color);
	}
`;

const ProjectItem = props => {
	const { project } = props;

	const tags = project.tags.map(tag => <span key={tag}>#{tag}</span>);

	const stack = project.stack.map(tech => {
		const icon = STACK_ICONS.find(icon => icon.title === tech);
		return (
			<span key={icon.title} title={icon.title}>
				<Icon icon={icon.icon} size='2rem' color={icon.color} />
			</span>
		);
	});

	return (
		<Project>
			<img src={project.image} alt={project.title} />
			<MainContentWrapper>
				<h4> {project.title}</h4>
				<p>{project.short_description}</p>
				<Tags>{tags}</Tags>
				<Stack>{stack}</Stack>
			</MainContentWrapper>
			<ButtonsWrapper>
				<SmallButtonsContainer>
					<a
						href={project.demo}
						title={`Demo of the ${project.title}`}
						target='_blank'
						rel='noreferrer'>
						Demo <FaGlobe />
					</a>
					<a
						href={project.git}
						title={`GitHub of the ${project.title}`}
						target='_blank'
						rel='noreferrer'>
						GitHub <SiGithub />
					</a>
				</SmallButtonsContainer>
				{/* Commented out until Case studies are ready */
				/* <CaseStudyButton>Case Study →</CaseStudyButton> */}
			</ButtonsWrapper>
		</Project>
	);
};

export default ProjectItem;
