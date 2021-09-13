import { useEffect } from 'react';
import { useHistory } from 'react-router';
import styled, { useTheme } from 'styled-components';

import Layout from '../components/Layout/Layout';
import Button from '../components/UI/Button';
import SocialNetworks from '../components/Navigation/SocialNetworks';
import AppIcons from '../components/AppIcons/AppIcons';
import DevSkillsList from '../components/CV/DevSkillsList';
import DownloadCV from '../components/CV/DownloadCV';

import myPhoto from '../assets/images/photo2.jpg';
import { TECHS, OTHER } from '../components/AppIcons/AppsList';

const Hero = styled.div`
	padding-top: 2rem;
	max-width: 800px;
	display: flex;
	align-items: center;
	margin: 0 auto;
	gap: 2rem;
	margin-bottom: 2rem;
	text-align: left;
	img {
		height: 250px;
		border-radius: 50%;
		margin: 0 auto;
		padding-bottom: 1rem;
	}
	div {
		h3 {
			padding: 1rem 0;
			margin: 0 auto;
		}
		p {
			padding-bottom: 1rem;
			text-align: justify;
		}
	}
	@media (max-width: 767px) {
		flex-direction: column;
		text-align: center;
		margin-bottom: 2rem;
	}
`;

const Skills = styled.section`
	padding-bottom: 4rem;
	h3 {
		padding-top: 4rem;
	}
	button {
		margin: 4rem 0 0;
	}
`;

const GoodAtList = styled.ul`
	max-width: 800px;
	margin: 0 auto;
	list-style-type: '→  ';
	color: var(--accent-color);
	h3 {
		padding-top: 0;
		color: ${props => props.theme.mainText};
	}
	li {
		h5,
		p {
			color: ${props => props.theme.mainText};
		}
		margin-bottom: 1.5rem;
		text-align: justify;
	}
	@media (max-width: 767px) {
		list-style: none;
	}
`;

const WorkExperience = styled.section`
	margin: 0 auto;
	padding-bottom: 4rem;
	h3 {
		padding-top: 2rem;
	}
`;
const Error404 = styled.p`
	font-size: 4rem;
	padding-bottom: 0;
	font-weight: 700;
`;

const CTA = styled.p`
	max-width: 500px;
	margin: 0 auto;
	font-size: 1.75rem;
	font-weight: 600;
	color: var(--accent-color);
`;

const About = () => {
	// useEffect(() => {
	// 	window.scrollTo(0, 0);
	// }, []);

	const history = useHistory();
	const theme = useTheme();

	return (
		<Layout>
			<section>
				<Hero>
					<div>
						<img src={myPhoto} alt='My photo' />
						<SocialNetworks />
					</div>
					<div>
						<h3>
							Hi! I am Nastia and I am looking for a Front-end Developer job
						</h3>
						<p>
							I am a self-taught ReactJS developer who is looking for a company
							to start my path as a full-time programmer. I've worked in
							business, marketing and finances, but COVID times gave me a chance
							to realize what I am really passionate about (if you still wonder
							what is it, it's programming ;) )
						</p>
						<p>
							As much as it is fun to do my own projects, I would love to be
							able finally to apply my knowledge to something real. I am very
							eager to start, to meet new teammates and keep learning :)
						</p>
						<p>
							<em>*Remote or in Málaga area</em>
						</p>
					</div>
				</Hero>
				<DownloadCV>Download CV</DownloadCV>
			</section>
			<Skills>
				<h3>Tech stack & tools</h3>
				<AppIcons list={TECHS} size='3.5rem' />
				<h3>Dev skills & knowledge</h3>
				<DevSkillsList />
				<Button title='Projects' onClick={() => history.push('/projects')}>
					My projects →
				</Button>
				<h3>Other software</h3>
				<AppIcons list={OTHER} size='2.75rem' />
			</Skills>
			<GoodAtList>
				<h3>What I am good at:</h3>
				<li>
					<h5>Learning: </h5>
					<p>
						I love acquiring new skills and improve them, whether it is a new
						language, new technology or gardening.
					</p>
				</li>
				<li>
					<h5>Finding solutions: </h5>
					<p>
						Give me a problem and it will be a fuel which I run on for days and
						weeks. I love challenges and see it as a trampoline to gain new
						skills and learn how to improve the current way of things. I do a
						lot of research, and with trial and error find a way to solve it.
					</p>
				</li>
				<li>
					<h5>Automating processes: </h5>
					<p>
						As much as I am a hard working person, I agree to the phrase
						“Laziness is an engine of progress”. I resent repetitive tasks. Once
						I detect one, gears start spinning in my head on the double speed
						until I find a way to avoid it. I apply it in all of my jobs, for
						instance, I got an award while working in “Xerox” for creating
						macros which saved 75% of time in everyday reports generation.
					</p>
				</li>
				<li>
					<h5>Perfectionism and structured approach: </h5>
					<p>
						For me everything should be done well until the last tiny bit.
						Otherwise I wouldn’t be any good at my previous accounting & finance
						positions ;) I apply it also to learning: if I start gaining a new
						skill I do it structurally from basics to more advanced levels, so I
						won’t miss any detail or fundamental knowledge.
					</p>
				</li>
				<li>
					<h5>Visuals: </h5>
					<p>
						I have experience in graphic design, painting and illustration,
						which come in handy also when working in front-end: I can detect
						wrong font-weight or padding in one sight, see incorrect colours and
						very well understand what a right look & feel should look like.
					</p>
				</li>
				<li>
					<h5>Adapting: </h5>
					<p>
						Consider me as a non-conflict person who adapts very good to any
						environment. I used to live in 3 foreign countries and, as much as
						they are all distinct, I didn’t mind their specialities and learned
						quite fast to deal with them. The same applies to friendships and
						working environments.
					</p>
				</li>
				<li>
					<h5>Communicating: </h5>
					<p>
						Despite the fact I am an introvert, I enjoy being in contact with my
						teammates: discuss new ideas, find solutions and express my
						opinions. I might not do it right away, but once I gain confidence
						with people, I consider myself quite talkative and very opened
						person. Also I know what and when I should or shouldn’t say when it
						comes to any communitaction: inside of company or with external
						clients.
					</p>
				</li>
				<li>
					<h5>Doing anything: </h5>
					<p>
						Seriously. I think you should do your best in any activity. I am
						really versatile and good at doing a great deal of things: work-wise
						or in my hobbies. At my current job I do customer attention and
						project management, web development, accounting, graphic design,
						marketing strategies, internal organisation… And what I am not good
						at, I keep improving. Just don’t make my sing, ever. I really can’t
						and it’s not fixable.
					</p>
				</li>
			</GoodAtList>
			<WorkExperience>
				<h3>Front-end work experience</h3>
				<Error404>404</Error404>
				<p>Ooops! Not found...</p>
				<Button
					bgColor={theme.mainText}
					color={theme.mainBg}
					title='Schedule an interview with me :)'
					onClick={() => history.push('/contact')}>
					Fix this error!
				</Button>
			</WorkExperience>
			<CTA>Are my skills is what your company may be interested in?</CTA>
			<Button onClick={() => history.push('/contact')}>Contact me!</Button>
		</Layout>
	);
};

export default About;
