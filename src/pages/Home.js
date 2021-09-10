import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import SocialNetworks from '../components/Navigation/SocialNetworks';
import TechIcons from '../components/TechIcons/TechIcons';

import myPhoto from '../assets/images/myPhoto.png';

const Photo = styled.img`
	height: 300px;
	border-radius: 50%;
	margin: 4rem 0;
`;

const MainTitleWrapper = styled.div`
	h1 {
		display: inline-block;
	}
`;

const AccentColor = styled.h1`
	display: inline-block;
	color: var(--accent-color);
`;

const Description = styled.p`
	max-width: 800px;
	text-align: justify;
	margin-bottom: 2rem;
`;

const Home = props => {
	return (
		<Layout>
			<Photo src={myPhoto} alt='My photo' />
			<MainTitleWrapper>
				<AccentColor>Nastia</AccentColor> <h1>Zhyrnova</h1>
			</MainTitleWrapper>
			<h3>Front-end Developer</h3>
			<Description>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua.
			</Description>
			<SocialNetworks />
			<h2>Tech stack & tools</h2>
			<TechIcons />
			<h2>Projects</h2>
		</Layout>
	);
};

export default Home;
