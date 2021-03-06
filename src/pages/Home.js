import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import SocialNetworks from '../components/Navigation/SocialNetworks';
import AppIcons from '../components/AppIcons/AppIcons';
import DevSkillsList from '../components/CV/DevSkillsList';
import DownloadCV from '../components/CV/DownloadCV';

import { TECHS, OTHER } from '../components/AppIcons/AppsList';
import myPhoto from '../assets/images/myPhoto.png';

const Photo = styled.img`
	height: 225px;
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
	margin-bottom: 2rem;
`;

const Home = props => {
	return (
		<Layout>
			<section id='home'>
				<Photo src={myPhoto} alt='My photo' />
				<MainTitleWrapper>
					<AccentColor>Nastia</AccentColor> <h1>Zhyrnova</h1>
				</MainTitleWrapper>
				<h4>Front-end Developer</h4>
				<Description>
					Problem solver | Perfectionist | Adaptive and communicative |
					Pixel-perfect design supporter | Fast learner | Great web dev and nice
					person ;)
				</Description>
				<SocialNetworks />
			</section>
			<section id='skills'>
				<h3>Tech stack & tools</h3>
				<AppIcons list={TECHS} size='3.5rem' />
				<h3>Dev skills & knowledge</h3>
				<DevSkillsList />
				<h3>Other software</h3>
				<AppIcons list={OTHER} size='2.75rem' />
			</section>
			<section id='cv'>
				<h3>My CV:</h3>
				<DownloadCV>Download CV in PDF</DownloadCV>
			</section>
		</Layout>
	);
};

export default Home;
